import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoAddComponent } from './veiculo-add.component';

describe('VeiculoAddComponent', () => {
  let component: VeiculoAddComponent;
  let fixture: ComponentFixture<VeiculoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculoAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiculoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
