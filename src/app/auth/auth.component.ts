import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PlaceHolderDirective } from '../directives/placeholder.directive';
import { AlertComponent } from '../shared/alert/alert.component';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public isLoginMode: boolean = true;
  public isLoading: boolean;
  public error: string = null;
  @ViewChild(PlaceHolderDirective, { static: false}) public alertReference: PlaceHolderDirective;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  public onSwitchAuthMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  public onSubmit(form: NgForm): void {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObservable: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLoginMode) {
      authObservable = this.authService.signIn(email, password);
    } else {
      authObservable = this.authService.signUp(email, password);
    }

    authObservable
      .subscribe(
        responseData => {
          console.log(responseData);
          this.isLoading = false;
          this.router.navigate(['./recipes']);
        },
        errorMessage => {
          this.error = errorMessage;
          this.showErrorAlert(errorMessage);
          this.isLoading = false;
        }
      );
    form.reset();
  }

  public onHandleClose(): void {
    this.error = null;
  }

  private showErrorAlert(error: string): void {
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const alertViewContainerRef = this.alertReference.viewContainerRef;
    alertViewContainerRef.clear();

    alertViewContainerRef.createComponent(alertComponentFactory);
  }

  public ngOnInit(): void {
  }

}
