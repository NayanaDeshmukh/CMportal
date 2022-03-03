import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Portal } from 'src/app/model/portal';
import { PortalService } from 'src/app/service/portal.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-admin-editcompany',
  templateUrl: './admin-editcompany.component.html',
  styleUrls: ['./admin-editcompany.component.css']
})
export class AdminEditcompanyComponent implements OnInit {
  companyform: FormGroup;
  comp_data:Portal[];
  Industrydata: any = ['IT & Software', 'Pharma', 'Medical', 'Government', 'Hardware', 'Shipping', 'Energy', 'Engineering, Construction', 'Chemical', 'Electronics, Electrical Equipment', 'Wholesalers', 'Airlines', 'Banks & Finances', 'Other'];
  Countries: any[] = ['India 356','Afghanistan 004','Albania 008','Algeria 012', 'American Samoa 016','Andorra 020','Angola 024',
    'Anguilla 660','Antarctica 010','Antigua and Barbuda 028','Argentina 032','Armenia 051', 'Aruba 533','Australia 036',
    'Austria 040','Azerbaijan 031','Bahamas (the) 044','Bahrain 048', 'Bangladesh 050','Barbados 052','Indonesia 360'
  ];
  private roles: string[] = [];
  isLoggedIn = false;
  isAdmin = false;
 
  constructor(  public fb: FormBuilder,
    private router: Router,
    private actRoute:ActivatedRoute,
    private portalservice: PortalService,
    private tokenStorageService: TokenStorageService
  ) {
    this.comp_data=[]
    this.companyform = this.fb.group({ })
  }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.isAdmin = this.roles.includes('ROLE_ADMIN');
      if(this.isAdmin){
        this.updatecompany();
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.getcompany(id);
        this.companyform = this.fb.group({
          name: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
          addr: ['', [Validators.required]],
          city: ['', [Validators.required]],
          state: ['', [Validators.required]],
          country: ['', [Validators.required]],
          phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
          owner: ['', [Validators.required]],
          industry: ['', [Validators.required]],
          web:[''],
           desc:[''],
          capital:[''],
          zip:[''],
        })
      }
    }
    
  }
 //Getter to access form control
 get cf() {
  return this.companyform.controls;
}

industryname(e: any) {
  var element = e.target as HTMLSelectElement
  this.companyform?.get('industry')?.setValue(element.value, {
    onlySelf: true
  })
}

countryname(f: any) {
  var element = f.target as HTMLSelectElement
  this.companyform?.get('country')?.setValue(element.value, {
    onlySelf: true
  })
}

getcompany(id: any) {
  this.portalservice.getcompany(id).subscribe(data => {
    this.companyform.setValue({
      name: data['name'],
      email: data['email'],
      addr: data['addr'],
      city:data['city'],
      state:data['state'],
      country:data['country'],
      phone: data['phone'],
      owner:data['owner'],
      industry:data['industry'],
      web:data['web'],
       desc:data['desc'],
      capital:data['capital'],
      zip:data['zip'],
    });
  });
}

updatecompany() {
  this.companyform = this.fb.group({
    name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      addr: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      owner: ['', [Validators.required]],
      industry: ['', [Validators.required]],
      web:[''],
       desc:[''],
      capital:[''],
      zip:[''],
  })
}
onSubmit() {
  if(window.confirm('Are you sure?')){
   let id = this.actRoute.snapshot.paramMap.get('id');
   this.portalservice.updatecompany(id, this.companyform.value).subscribe(
     (res) => {
       this.router.navigateByUrl('/listcompany');
       console.log('updated')
     },(error) => {
       alert('not updated')
       console.log(error);
     });
   }
  }

}
