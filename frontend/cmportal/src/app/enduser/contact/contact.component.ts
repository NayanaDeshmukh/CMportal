import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PortalService } from 'src/app/service/portal.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 contactform: FormGroup;
  constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private portalservice: PortalService
  ) {
    this.contactform = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      message: ['', [Validators.required]],
    })
  }
    ngOnInit(): void {
    }
  //Getter to access form control
  get cf() {
    return this.contactform.controls;
  }
  contact(){
    this.portalservice.createquery(this.contactform.value).subscribe(
      (res) => {
         alert("Message sent")
        console.log('message submitted successfully!')
        // this.ngZone.run(() => this.router.navigateByUrl('/listemployee'))
        this.contactform.reset();
      }, (error) => {
        alert('not sent')
        console.log(error);
      }); 

  }

}
