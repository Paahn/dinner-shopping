import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public isLoginMode: boolean = true;
  public isLoading: boolean;
  public error: string = null;

  constructor(private authService: AuthService) { }

  public onSwitchAuthMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  public onSubmit(form: NgForm): void {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    if (this.isLoginMode) {
      this.authService.signIn(email, password)
      .subscribe(
        responseData => {
          console.log(responseData);
          this.isLoading = false;
        },
        errorMessage => {
          this.error = errorMessage;
          this.isLoading = false;
        }
      );
    } else {
      this.authService.signUp(email, password)
        .subscribe(
          responseData => {
            console.log(responseData);
            this.isLoading = false;
          },
          errorMessage => {
            this.error = errorMessage;
            this.isLoading = false;
          }
        );
    }
    form.reset();
  }

  public ngOnInit(): void {
  }

}
