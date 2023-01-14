import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Marca } from 'src/app/models/marca.model';
import { MarcaService } from '../marca.service';

@Component({
  selector: 'app-marca-add',
  templateUrl: './marca-add.component.html',
  styleUrls: ['./marca-add.component.scss']
})
export class MarcaAddComponent {
    marcaForm!: FormGroup

    submitted = false;

    constructor(
      private marcaService: MarcaService,
      private formBuilder: FormBuilder,
      private router: Router
    ) { }

    marcas: Marca[] = [];

    ngOnInit(): void {
      this.marcaForm = this.formBuilder.group({
        sigla: new FormControl('', [Validators.required, Validators.minLength(2)]),
        descricao: new FormControl('', [Validators.required, Validators.minLength(2)]),
      })
      this.marcaService.listarMarcas().subscribe(dados => {
        console.log(dados)
        this.marcas = dados;
      });
    }
    save() {
      if (this.marcaForm.valid) {
        const curso = this.marcaForm.getRawValue() as Marca;
        this.marcaService.save(curso).subscribe(
          () => (this.submitted = true),
          (error) => console.log(error)
        );
      }
    }
    addMarcaForm() {
      window.location.reload();
      this.submitted = false;
      this.marcaForm.reset();
    }

    deleteMessage = false;

    delete(id?: number) {
      this.marcaService.delete(id!).subscribe(dado => {
        console.log(dado);
        this.deleteMessage = true;
        this.marcaService.listarMarcas().subscribe(dados => {
          this.marcas = dados;
        });
      },
        error => console.log(error)
      );
    }
    updateMarca(id?: number) {
      this.router.navigate(['edit-marca', id]);
    }
}
