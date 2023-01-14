import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Marca } from 'src/app/models/marca.model';
import { Veiculo } from 'src/app/models/veiculo.model';
import { MarcaService } from 'src/app/marca/marca.service';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-veiculo-edit',
  templateUrl: './veiculo-edit.component.html',
  styleUrls: ['./veiculo-edit.component.scss']
})
export class VeiculoEditComponent {
  veiculoForm!: FormGroup

  submitted = false;
  public id?: number;
  veiculo?: Veiculo;
  updated = false;

  constructor(
    private veiculoService: VeiculoService,
    private marcaService: MarcaService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) { }

  marcas: Marca[] = [];

  createFrom() {
    this.veiculoForm = this.formBuilder.group({
      id: new FormControl(this.id),
      placa: new FormControl('', [Validators.required, Validators.minLength(3)]),
      cor: new FormControl('', [Validators.required, Validators.minLength(2)]),
      anoModelo: new FormControl('', [Validators.required]),
      marca: new FormBuilder()
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params['id']);
    this.veiculoService.buscarPorId(this.id!).subscribe(dados => {
      this.veiculo = dados;
    })
    this.marcaService.listarMarcas().subscribe(dados => {
      this.marcas = dados;
    });
    this.createFrom();
  }

  editVeiculoForm() {
    this.submitted = false;
    this.veiculoForm.reset();
  }

  compareMarcas(m1: Marca, m2: Marca) {
    return m1 && m2 && m1.sigla === m2.sigla;
  }

  update() {
    if (this.veiculoForm.valid) {
      const veiculo = this.veiculoForm.getRawValue() as Veiculo;
      this.veiculoService.update(this.id, this.veiculo).subscribe(
        () => (this.updated = true, this.submitted = true),
        (error) => console.log(error)
      );
    }
  }
}

