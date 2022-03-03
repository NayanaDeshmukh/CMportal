import { Component, OnInit } from '@angular/core';
import { PortalService } from 'src/app/service/portal.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blog: any = []
  private roles: string[] = [];
  isLoggedIn = false;
  isuser = false;
  username?: string;
  location = "";
  isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
  }
  
  constructor(private portal: PortalService, private tokenStorageService: TokenStorageService) {
    this.readblog();
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.isuser = this.roles.includes('ROLE_USER');
      this.username = user.username;
      if (this.username) {
        this.readblog();
      }
    }
  }


  readblog() {
    if (!this.username) {
      this.portal.getblogs().subscribe((data) => {
        this.blog = data;
      });
    } else {
      this.portal.getblogsByUsername(this.username).subscribe((data) => {
        this.blog = data;
      });
    }
  }
  removeblog(comp: any, index: number) {
    if (window.confirm('Are you sure?')) {
      this.portal.deleteblog(comp._id).subscribe((data) => {
        this.blog.splice(index, 1);
      }
      )
    }
  }
search(searchVal: any){
  alert(searchVal);
  this.portal.findblogByContain(searchVal).subscribe((data) => {
    this.blog = data;
});
}

}
