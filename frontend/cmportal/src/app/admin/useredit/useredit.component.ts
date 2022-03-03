import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/model/portal';
import { PortalService } from 'src/app/service/portal.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  isAdmin = false;
  userform: FormGroup;
  user_data:user[];
  constructor(public fb: FormBuilder,
    private router: Router,
    private actRoute:ActivatedRoute,
    private portalservice: PortalService,
    private tokenStorageService: TokenStorageService
  ) {
    this.user_data=[]
    this.userform = this.fb.group({}) 
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.isAdmin = this.roles.includes('ROLE_ADMIN');
      if(this.isAdmin){
        this.updateuser();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getuser(id);
    this.userform = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      username:['',[Validators.required]],
      gender: ['', [Validators.required]],
      password: ['', [Validators.required]],
    }) 
      }
    }
   
  }

  getuser(id: any) {
    this.portalservice.getuser(id).subscribe(data => {
      this.userform.setValue({
        fname: data['fname'],
        lname: data['lname'],
        email: data['email'],
        username:data['username'],
        gender:data['gender'],
        password:data['password'],
      });
    });
  }

  updateuser() {
    this.userform = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      username:['',[Validators.required]],
      gender: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

//Getter to access form control
get ul() {
  return this.userform.controls;
}

editto(){
  if(window.confirm('Are you sure?')){
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.portalservice.updateuser(id, this.userform.value).subscribe(
      (res) => {
        this.router.navigateByUrl('/listuser');
        console.log('updated')
      },(error) => {
        alert('not updated')
        console.log(error);
      });
    }
}




}
