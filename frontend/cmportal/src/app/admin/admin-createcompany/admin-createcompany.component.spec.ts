import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreatecompanyComponent } from './admin-createcompany.component';

describe('AdminCreatecompanyComponent', () => {
  let component: AdminCreatecompanyComponent;
  let fixture: ComponentFixture<AdminCreatecompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreatecompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreatecompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
