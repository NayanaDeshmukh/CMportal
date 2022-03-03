import { Component, OnInit } from '@angular/core';
import { PortalService } from 'src/app/service/portal.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-admin-listblogs',
  templateUrl: './admin-listblogs.component.html',
  styleUrls: ['./admin-listblogs.component.css']
})
export class AdminListblogsComponent implements OnInit {
  
  blog:any=[]
  private roles: string[] = [];
  isLoggedIn = false;
  isAdmin = false;
  isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
  }
  constructor(private portal:PortalService,private tokenStorageService: TokenStorageService) { 
    // this.readblog();
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.isAdmin = this.roles.includes('ROLE_ADMIN');
      if(this.isAdmin){
        this.readblog();
      }
    }

  }

  readblog(){
    this.portal.getblogs().subscribe((data) => {
      this.blog = data;
     })
  }

  removeblog(comp: any, index: number) {
    if(window.confirm('Are you sure?')) {
        this.portal.deleteblog(comp._id).subscribe((data) => {
          this.blog.splice(index, 1);
        }
      )    
    }
  }


}
