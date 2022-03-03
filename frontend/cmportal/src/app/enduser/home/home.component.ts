import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortalService } from 'src/app/service/portal.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  company:any=[];
  blog:any=[5];
  constructor(private portal:PortalService,private tokenStorageService: TokenStorageService,
    private router: Router) { 
     this.readcompany();
     this.readblog();
  }
  ngOnInit(): void {}

  readcompany(){
    this.portal.getcompanies().subscribe((data) => {
      this.company = data;
    })
  }
  readblog() {
         this.portal.getblogs().subscribe((data) => {
        this.blog = data;
      });
    }


  }
