import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListcompanyComponent } from './admin-listcompany.component';

describe('AdminListcompanyComponent', () => {
  let component: AdminListcompanyComponent;
  let fixture: ComponentFixture<AdminListcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListcompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
