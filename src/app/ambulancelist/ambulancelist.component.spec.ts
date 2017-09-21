import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulancelistComponent } from './ambulancelist.component';

describe('AmbulancelistComponent', () => {
  let component: AmbulancelistComponent;
  let fixture: ComponentFixture<AmbulancelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbulancelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulancelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
