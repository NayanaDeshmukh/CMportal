import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PortalService } from 'src/app/service/portal.service';

@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.css']
})
export class UsercreateComponent implements OnInit {

  public c1:any;
  public c2:any;
  public c3:any;
  public c4:any;
  public c5:any;
  public c6:any;
  public c7:any;
  public c8:any;
  public c9:any;
  public c10:any;
  public c11:any;
  public c12:any;
  public c13:any;
  public c14:any;
  company: any;
 

  constructor(private route: ActivatedRoute,
    private portal:PortalService,
    private router:Router) { }

  ngOnInit(): void {
  
      let id1 = this.route.snapshot.paramMap.getAll('_id')
      this.c1= id1;
      let id2 = this.route.snapshot.paramMap.getAll('name')
      this.c2= id2;
      let id3 = this.route.snapshot.paramMap.getAll('owner')
      this.c3= id3;
      let id4 = this.route.snapshot.paramMap.getAll('email')
      this.c4= id4;
      let id5 = this.route.snapshot.paramMap.getAll('phone')
      this.c5= id5;
      let id6 = this.route.snapshot.paramMap.getAll('web')
      this.c6= id6;
      let id7 = this.route.snapshot.paramMap.getAll('addr')
      this.c7= id7;
      let id8 = this.route.snapshot.paramMap.getAll('city')
      this.c8= id8;
      let id9 = this.route.snapshot.paramMap.getAll('state')
      this.c9= id9;
      let id10 = this.route.snapshot.paramMap.getAll('country')
      this.c10= id10;
      let id11 = this.route.snapshot.paramMap.getAll('zip')
      this.c11= id11;
      let id12 = this.route.snapshot.paramMap.getAll('industry')
      this.c12= id12;
      let id13 = this.route.snapshot.paramMap.getAll('capital')
      this.c13= id13;
      let id14 = this.route.snapshot.paramMap.getAll('desc')
      this.c14= id14;
  }
  removecompany(index:number) {
    if(window.confirm('Are you sure?')) {
        this.portal.deletecompany(this.c1).subscribe((data) => {
          this.company.splice(index, 1);
        }
      );
      this.router.navigateByUrl('/listcompany');
    }
  }

  closecompany(index:number) {
      this.router.navigateByUrl('/listcompany');
  }
}
