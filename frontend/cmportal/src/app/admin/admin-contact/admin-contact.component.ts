import { Component, OnInit } from '@angular/core';
import { PortalService } from 'src/app/service/portal.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css']
})
export class AdminContactComponent implements OnInit {
  query:any=[]
  private roles: string[] = [];
  isLoggedIn = false;
  isAdmin = false;

  constructor(private portal:PortalService,private tokenStorageService: TokenStorageService) { 
    // this.readquery();
  }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.isAdmin = this.roles.includes('ROLE_ADMIN');
      if(this.isAdmin){
        this.readquery();
      }
    }
  }
  readquery(){
    this.portal.getqueries().subscribe((data) => {
      this.query = data;
     })
  }

}
