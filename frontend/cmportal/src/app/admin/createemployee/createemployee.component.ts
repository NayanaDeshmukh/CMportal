import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PortalService } from 'src/app/service/portal.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
  employeeform: FormGroup;
  // companydata:any=['IT'];
  statusdata: any = ['Married', 'Unmarried', 'Divorced', 'Widowed'];
  Countries: any[] = ['India 356','Afghanistan 004','Albania 008','Algeria 012', 'American Samoa 016','Andorra 020','Angola 024',
    'Anguilla 660','Antarctica 010','Antigua and Barbuda 028','Argentina 032','Armenia 051', 'Aruba 533','Australia 036',
    'Austria 040','Azerbaijan 031','Bahamas (the) 044','Bahrain 048', 'Bangladesh 050','Barbados 052','Indonesia 360'
  ];
  company:any=[] 
  private roles: string[] = [];
  isLoggedIn = false;
  isAdmin = false;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private portalservice: PortalService,
    private tokenStorageService: TokenStorageService
  ) {
    // this.readcompany();
    this.employeeform = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      dob: ['', [Validators.required]],
      status: ['', [Validators.required]],
      company: ['', [Validators.required]],
      designation:['', [Validators.required]],
      gender: ['', [Validators.required]],
      addr: [''],
      city: [''],
      state: [''],
      zip:[''],
       country: ['']   
    })
  }
  ngOnInit(): void {this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.isAdmin = this.roles.includes('ROLE_ADMIN');
      if(this.isAdmin){
        this.readcompany();
      }
    }
  }
//Getter to access form control
get ef() {
  return this.employeeform.controls;
}

readcompany(){
  this.portalservice.getcompanies().subscribe((data) => {
    this.company = data;
   })
}

maritalstatus(e: any){
  var element = e.target as HTMLSelectElement
  this.employeeform?.get('status')?.setValue(element.value, {
    onlySelf: true
  })
}

countryname(f: any) {
    var element = f.target as HTMLSelectElement
    this.employeeform?.get('country')?.setValue(element.value, {
      onlySelf: true
    })
  }
  
// companyname(g: any){
//   var element = g.target as HTMLSelectElement
//   this.employeeform?.get('company')?.setValue(element.value, {
//     onlySelf: true
//   })
// }

  onSubmit(){
    this.portalservice.createemployee(this.employeeform.value).subscribe(
      (res) => {
     //    alert("added")
        console.log('Employee record successfully created!')
        this.ngZone.run(() => this.router.navigateByUrl('/listemployee'))
      }, (error) => {
      //  alert('not added')
        console.log(error);
      }); 
  }


}
