import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicslistComponent } from './comicslist.component';

describe('ComicslistComponent', () => {
  let component: ComicslistComponent;
  let fixture: ComponentFixture<ComicslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
