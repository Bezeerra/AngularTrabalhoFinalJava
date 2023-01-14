import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Marca } from 'src/app/models/marca.model';
import { MarcaService } from '../marca.service';

@Component({
  selector: 'app-marca-edit',
  templateUrl: './marca-edit.component.html',
  styleUrls: ['./marca-edit.component.scss']
})
export class MarcaEditComponent {
  marcaForm!: FormGroup 

  submitted = false;
  public id?: number;
  marca?: Marca;
  updated = false;

  constructor(
    private marcaService: MarcaService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) { }

  createFrom() {
    this.marcaForm = this.formBuilder.group({
      id: new FormControl(this.id),
      sigla: new FormControl('', [Validators.required, Validators.minLength(3)]),
      descricao: new FormControl('', [Validators.required, Validators.minLength(2)]),
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params['id']);
    this.marcaService.buscarPorId(this.id!).subscribe(dados => {
      this.marca = dados;
    })
    this.createFrom();
  }

  editMarcaForm() {
    this.submitted = false;
    this.marcaForm.reset();
  }

  update() {
    if (this.marcaForm.valid) {
      const marca = this.marcaForm.getRawValue() as Marca;
      this.marcaService.update(this.id, this.marca).subscribe(
        () => (this.updated = true, this.submitted = true),
        (error) => console.log(error)
      );
    }
  }
}
