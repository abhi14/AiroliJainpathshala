import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiyamComponent } from './niyam.component';

describe('NiyamComponent', () => {
  let component: NiyamComponent;
  let fixture: ComponentFixture<NiyamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiyamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiyamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
