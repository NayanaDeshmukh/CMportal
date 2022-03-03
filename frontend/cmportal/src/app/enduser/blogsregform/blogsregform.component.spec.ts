import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsregformComponent } from './blogsregform.component';

describe('BlogsregformComponent', () => {
  let component: BlogsregformComponent;
  let fixture: ComponentFixture<BlogsregformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsregformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsregformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
