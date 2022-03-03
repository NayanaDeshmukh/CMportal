import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { PortalService } from 'src/app/service/portal.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
 userlogin: FormGroup;
 roles: string[] = [];
 isLoggedIn = false;
 isLoginFailed = false;
 errorMessage = '';
  constructor(    
    public fb: FormBuilder, 
    private router:Router,
     private ngZone: NgZone,
     private portalservice:PortalService,
     private tokenStorage:TokenStorageService,
     private appComponent:AppComponent
 ) { 
  this.userlogin = this.fb.group({
    username: ['', [Validators.required]],
   password:['',[Validators.required]]
    // password: ['', [Validators.required, Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$')]],  
  })

 }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

// Getter to access form control
get myForm()
{
  return this.userlogin.controls;
}
signin()
{
  // const { username, password } = this.userlogin;
  this.portalservice.login(this.userlogin.value).subscribe(
    data => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);
      //alert("Logged In")
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
     // alert(this.roles)
      this.reloadPage();
      // this.router.navigateByUrl('/home')
    },
    err => {
     // alert("no")
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
  );
  // if (this.tokenStorage.getToken()) {
  //   this.isLoggedIn = true;
  //   this.roles = this.tokenStorage.getUser().roles;
  //   this.router.navigateByUrl('/blogs');
  // }
}
reloadPage(): void {
this.appComponent.updateHeader();
 window.location.reload();
//  if(this.roles.toString() == "ROLE_ADMIN")
//  this.router.navigateByUrl('/listcompany')
//  if(this.roles.toString() == "ROLE_USER")
//  this.router.navigateByUrl('/blogs')
 // this.router.navigateByUrl('/blogs')
}

}

