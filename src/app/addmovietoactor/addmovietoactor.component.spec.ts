import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmovietoactorComponent } from './addmovietoactor.component';

describe('AddmovietoactorComponent', () => {
  let component: AddmovietoactorComponent;
  let fixture: ComponentFixture<AddmovietoactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmovietoactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmovietoactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
