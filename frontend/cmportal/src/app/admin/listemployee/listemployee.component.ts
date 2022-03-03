import { Component, OnInit } from '@angular/core';
import { PortalService } from 'src/app/service/portal.service';
import { employee } from 'src/app/model/portal';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  isAdmin = false;
employee:any=[]

  constructor(private portal:PortalService,private tokenStorageService: TokenStorageService,private router:Router) { 
  //  this.reademployee();
  }

ngOnInit(): void {
  this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.isAdmin = this.roles.includes('ROLE_ADMIN');
      if(this.isAdmin){
        this.reademployee();
      }
    }
  }

reademployee(){
  this.portal.getemployees().subscribe((data) =>{
  this.employee = data ;
})
}

removeemployee(emp: any, index: number) {
  if(window.confirm('Are you sure?')) {
      this.portal.deleteemployee(emp._id).subscribe((data) => {
        this.employee.splice(index, 1);
      }
    )    
  }
}

view(emp:any){
  this.router.navigate(['/eview',emp]);
}


}
