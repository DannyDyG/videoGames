import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargadosComponent } from './descargados.component';

describe('DescargadosComponent', () => {
  let component: DescargadosComponent;
  let fixture: ComponentFixture<DescargadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescargadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescargadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
