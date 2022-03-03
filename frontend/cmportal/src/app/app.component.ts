import { Component } from '@angular/core';
import { TokenStorageService } from './service/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmportal';

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showuserBoard = false;
  username?: string;
  constructor(private tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {    
    this.updateHeader();
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();

  }

  //update header 
  updateHeader(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showuserBoard = this.roles.includes('ROLE_USER');
      this.username = user.username;
    }
  }

}
