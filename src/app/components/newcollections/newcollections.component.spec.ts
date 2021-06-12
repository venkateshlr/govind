import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcollectionsComponent } from './newcollections.component';

describe('NewcollectionsComponent', () => {
  let component: NewcollectionsComponent;
  let fixture: ComponentFixture<NewcollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
