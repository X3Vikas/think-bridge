import { ThrowStmt } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: `app-login`,
  templateUrl: `./login.component.html`,
  styleUrls: [`./login.component.scss`]
})
export class LoginComponent {
  isSignup = false;
  loginForm: FormGroup;
  loginFormSubmitted = false;
  loginFormSubmitting = false;
  name = 'admin';
  password = 'admin';
  error = false;

  constructor(
    private _FormBuilder: FormBuilder,
    private _Router: Router
  ) {
    this.loginForm = this._FormBuilder.group({
      name: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }
  singup() {
    this.isSignup = true;

  }

  login() {
    this.isSignup = false;

  }
  loginFormSubmit() {

    this.loginFormSubmitted = true;
    if (this.loginForm.valid) {
      if (this.loginForm.controls.name.value === this.name && this.loginForm.controls.password.value === this.password) {
        this.error = false;

        this.loginFormSubmitting = false;
        this._Router.navigate([`dashboard`]);
      } else {
        this.error = true;

      }

    }
  }
}
