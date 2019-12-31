import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsGeneralComponent } from './cards-general.component';

describe('CardsGeneralComponent', () => {
  let component: CardsGeneralComponent;
  let fixture: ComponentFixture<CardsGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
