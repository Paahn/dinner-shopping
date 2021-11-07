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

    if (this.isLoginMode) {
      // todo implement login
    } else {
      this.authService.signUp(email, password)
        .subscribe(
          responseData => {
            console.log(responseData);
          },
          error => {
            console.log(error);
          }
        );
    }
    form.reset();
  }

  public ngOnInit(): void {
  }

}
