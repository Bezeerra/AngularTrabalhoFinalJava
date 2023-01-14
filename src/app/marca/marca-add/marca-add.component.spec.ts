import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaAddComponent } from './marca-add.component';

describe('MarcaAddComponent', () => {
  let component: MarcaAddComponent;
  let fixture: ComponentFixture<MarcaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcaAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
