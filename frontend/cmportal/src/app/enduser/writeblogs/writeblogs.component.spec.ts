import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteblogsComponent } from './writeblogs.component';

describe('WriteblogsComponent', () => {
  let component: WriteblogsComponent;
  let fixture: ComponentFixture<WriteblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteblogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
