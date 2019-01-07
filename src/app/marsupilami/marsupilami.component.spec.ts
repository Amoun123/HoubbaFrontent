import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsupilamiComponent } from './marsupilami.component';

describe('MarsupilamiComponent', () => {
  let component: MarsupilamiComponent;
  let fixture: ComponentFixture<MarsupilamiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsupilamiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsupilamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
