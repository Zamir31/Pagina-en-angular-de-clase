import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacesRedesSocialesComponent } from './enlaces-redes-sociales.component';

describe('EnlacesRedesSocialesComponent', () => {
  let component: EnlacesRedesSocialesComponent;
  let fixture: ComponentFixture<EnlacesRedesSocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlacesRedesSocialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnlacesRedesSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
