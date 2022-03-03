import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PortalService } from 'src/app/service/portal.service';

@Component({
  selector: 'app-blogsregform',
  templateUrl: './blogsregform.component.html',
  styleUrls: ['./blogsregform.component.css']
})
export class BlogsregformComponent implements OnInit {
  // userform: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  userform: any = {
    username: null,
    email: null,
    password: null
  };
  constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private portalservice: PortalService
  ) {
    this.userform = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      username: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      password:['', [Validators.required]],
    })
  }
  ngOnInit(): void {
  }
//Getter to access form control
get ul() {
  return this.userform.controls;
}

sendto(){
  
    this.portalservice.register(this.userform.value).subscribe(
    data => {
      console.log(data);
      this.isSuccessful = true;
      this.isSignUpFailed = false;
      //alert("created");
      this.router.navigateByUrl('/userlogin');

    },
    err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
      alert("not created")
    }
    // this.portalservice.createuser(this.userform.value).subscribe(
    // (res) => {
    //   //  alert("added")
    //   console.log('User record successfully created!')
    //   // this.ngZone.run(() => this.router.navigateByUrl('/blogswrite'))
    //   this.router.navigateByUrl('/blogswrite')
    // }, (error) => {
    //   // alert('not added')
    //   console.log(error);
    // }
    ); 
}


}
