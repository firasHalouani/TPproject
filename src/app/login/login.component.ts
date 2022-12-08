import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { LocalstorageService } from '../service/localstorage.service';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
//import { LocalstorageService } from 'libs/products/src/lib/services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginFormGroup!: FormGroup;
  isSubmitted = false;
  authError = false;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private localstorage:LocalstorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._initLoginForm();
  }

  private _initLoginForm() {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if(this.loginFormGroup.invalid) return;

    this.auth.login(this.loginForm['email'].value,this.loginForm['password'].value).subscribe((user) =>{
      this.authError = false;
      this.router.navigate(['/produit'])
    },(error)=>{
      this.authError = true;
    });
  }

  get loginForm() {
    return this.loginFormGroup.controls;
  }
}

