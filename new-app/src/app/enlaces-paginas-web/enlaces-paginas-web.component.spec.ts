import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacesPaginasWebComponent } from './enlaces-paginas-web.component';

describe('EnlacesPaginasWebComponent', () => {
  let component: EnlacesPaginasWebComponent;
  let fixture: ComponentFixture<EnlacesPaginasWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlacesPaginasWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnlacesPaginasWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
