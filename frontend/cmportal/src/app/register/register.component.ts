import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { PortalService } from '../service/portal.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // regform: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  regform: any = {
    username: null,
    email: null,
    password: null
  };
  constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private portalservice: PortalService
  ) {
    this.regform = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }
  ngOnInit(): void {
  }
  //Getter to access form control
  get rg() {
    return this.regform.controls;
  }
  onSubmit(): void {
    // const { username, email, password } = this.regform;
    this.portalservice.register(this.regform.value).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        alert("created")
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        alert("not created")
      }
    );
  }
}
