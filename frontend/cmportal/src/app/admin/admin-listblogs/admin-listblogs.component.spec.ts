import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListblogsComponent } from './admin-listblogs.component';

describe('AdminListblogsComponent', () => {
  let component: AdminListblogsComponent;
  let fixture: ComponentFixture<AdminListblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListblogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
