import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public isLoginMode: boolean = true;

  constructor() { }

  public onSwitchAuthMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  public ngOnInit(): void {
  }

}
