import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditcompanyComponent } from './admin-editcompany.component';

describe('AdminEditcompanyComponent', () => {
  let component: AdminEditcompanyComponent;
  let fixture: ComponentFixture<AdminEditcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditcompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
