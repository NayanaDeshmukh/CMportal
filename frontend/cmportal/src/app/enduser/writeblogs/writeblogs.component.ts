import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PortalService } from 'src/app/service/portal.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-writeblogs',
  templateUrl: './writeblogs.component.html',
  styleUrls: ['./writeblogs.component.css']
})
export class WriteblogsComponent implements OnInit {
writeblog: FormGroup;
private roles: string[] = [];
isLoggedIn = false;
isuser= false;
username?: string;
tdate:string=new Date().toDateString();
constructor(public fb: FormBuilder,
  private router: Router,
  private ngZone: NgZone,
  private portalservice: PortalService,
  private tokenStorageService: TokenStorageService
) {
  this.writeblog = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
     wby: this.tokenStorageService.getUser().username,
      date:this.tdate,
  })
}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
        this.username = user.username;
        this.isuser = this.roles.includes('ROLE_USER');
        if(this.isuser){
          // this.readuser();
         
        }
      }
  }
//Getter to access form control
get wb() {
  return this.writeblog.controls;
}

publish(){
  this.portalservice.createblog(this.writeblog.value).subscribe(
    (res) => {
       alert("created")
      console.log('Blog added successfully!')
      // this.ngZone.run(() => this.router.navigateByUrl('/listemployee'))
      this.writeblog.reset();
      this.router.navigateByUrl("/blogs");
    }, (error) => {
      alert('not added')
      console.log(error);
    }); 
}

}
