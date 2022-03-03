import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { blog } from 'src/app/model/portal';
import { PortalService } from 'src/app/service/portal.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
@Component({
  selector: 'app-blogsedit',
  templateUrl: './blogsedit.component.html',
  styleUrls: ['./blogsedit.component.css']
})
export class BlogseditComponent implements OnInit {
  blog_data:blog[];
  writeblog: FormGroup;
  private roles: string[] = [];
  isLoggedIn = false;
  isuser= false;
  username?: string;
  constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute:ActivatedRoute,
    private portalservice: PortalService,
    private tokenStorageService: TokenStorageService
  ) {
    this.blog_data=[]
    this.writeblog = this.fb.group({})
      // title: ['', [Validators.required]],
      // description: ['', [Validators.required]],
      //  wby: this.tokenStorageService.getUser().username,
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
        this.isuser = this.roles.includes('ROLE_USER');
        this.username = user.username;
        if(this.username){
           this.updateblog();
         let id = this.actRoute.snapshot.paramMap.get('id');
           this.getblog(id);
           this.writeblog = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
       wby: this.tokenStorageService.getUser().username,
    })
        }
      }
  }
//Getter to access form control
get wb() {
  return this.writeblog.controls;
}

getblog(id:any){
  this.portalservice.getblog(id).subscribe(data => {
    this.writeblog.setValue({
      title:data['title'],
      description:data['description'],
      wby:data['wby'],
    });
  });
}

updateblog() {
  this.writeblog = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
     wby: this.tokenStorageService.getUser().username,
  })
}

editblog(){
  if(window.confirm('Are you sure?')){
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.portalservice.updateblog(id, this.writeblog.value).subscribe(
      (res) => {
        this.router.navigateByUrl('/blogs');
        console.log('updated and Publish ')
      },(error) => {
        alert('not updated')
        console.log(error);
      });
}

}
}