import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EhrazLibComponent } from './ehraz-lib.component';

describe('EhrazLibComponent', () => {
  let component: EhrazLibComponent;
  let fixture: ComponentFixture<EhrazLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EhrazLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EhrazLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
