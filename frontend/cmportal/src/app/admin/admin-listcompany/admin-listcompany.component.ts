import { Component, OnInit } from '@angular/core';
import { PortalService } from 'src/app/service/portal.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-listcompany',
  templateUrl: './admin-listcompany.component.html',
  styleUrls: ['./admin-listcompany.component.css']
})
export class AdminListcompanyComponent implements OnInit {

  company:any=[]
  private roles: string[] = [];
  isLoggedIn = false;
  isAdmin = false;
  constructor(private portal:PortalService,private tokenStorageService: TokenStorageService,
    private router: Router) { 
    // this.readcompany();
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.isAdmin = this.roles.includes('ROLE_ADMIN');
      if(this.isAdmin){
        this.readcompany();
      }
    }
  }

  readcompany(){
    this.portal.getcompanies().subscribe((data) => {
      this.company = data;
     })
  }

  removecompany(comp: any, index: number) {
    if(window.confirm('Are you sure?')) {
        this.portal.deletecompany(comp._id).subscribe((data) => {
          this.company.splice(index, 1);
        }
      )    
    }
  }
  view(comp:any){
        this.router.navigate(['/cview',comp]);
    }
  

}
