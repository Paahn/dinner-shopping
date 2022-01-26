import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PlaceHolderDirective } from 'src/app/shared/directives/placeholder.directive';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  public isLoginMode: boolean = true;
  public isLoading: boolean;
  public error: string = null;
  @ViewChild(PlaceHolderDirective, { static: false}) public alertReference: PlaceHolderDirective;
  private closeSubscription: Subscription;

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

    const alertComponentRef = alertViewContainerRef.createComponent(alertComponentFactory);
    alertComponentRef.instance.message = error;
    this.closeSubscription = alertComponentRef.instance.close.subscribe( () => {
      this.closeSubscription.unsubscribe();
      alertViewContainerRef.clear();
    });
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
      if (this.closeSubscription) {
        this.closeSubscription.unsubscribe();
      }
  }

}
