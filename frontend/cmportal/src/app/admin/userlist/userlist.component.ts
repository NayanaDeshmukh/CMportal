import { Component, OnInit } from '@angular/core';
import { PortalService } from 'src/app/service/portal.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  user:any=[]
  private roles: string[] = [];
  isLoggedIn = false;
  isAdmin = false;
  constructor(private portal:PortalService, private tokenStorageService: TokenStorageService) { 
    // this.readuser();
  }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.isAdmin = this.roles.includes('ROLE_ADMIN');
      if(this.isAdmin){
        this.readuser();
      }
    }
  }
  readuser(){
    this.portal.getusers().subscribe((data) => {
      this.user = data;
     })
  }

  removeuser(us: any, index: number) {
    if(window.confirm('Are you sure?')) {
        this.portal.deleteuser(us._id).subscribe((data) => {
          this.user.splice(index, 1);
        }
      )    
    }
  }

}
