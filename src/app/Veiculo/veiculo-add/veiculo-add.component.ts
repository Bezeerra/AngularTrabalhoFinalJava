import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Marca } from "src/app/models/marca.model";
import { Veiculo } from "src/app/models/veiculo.model";
import { MarcaService } from "src/app/marca/marca.service";
import { VeiculoService } from "../veiculo.service";

@Component({
    selector: 'veiculo-create',
    templateUrl: './veiculo-add.component.html'
})
export class VeiculoAddComponent{
    veiculoForm!: FormGroup

    submitted = false;

    constructor(
      private veiculoService: VeiculoService,
      private marcaService: MarcaService,
      private formBuilder: FormBuilder,
      private router: Router
    ) { }

    veiculos: Veiculo[] = [];
    marcas: Marca[] = []

    ngOnInit(): void {
      this.veiculoForm = this.formBuilder.group({
        placa: new FormControl('', [Validators.required, Validators.minLength(3)]),
        cor: new FormControl('', [Validators.required, Validators.minLength(2)]),
        anoModelo: new FormControl('', [Validators.required]),
        marca: new FormBuilder()
      })
      this.veiculoService.listarVeiculos().subscribe(dados => {
        console.log(dados)
        this.veiculos = dados;
      });
      this.marcaService.listarMarcas().subscribe(dados => {
        this.marcas = dados;
      })
    }
    save() {
      if (this.veiculoForm.valid) {
        const curso = this.veiculoForm.getRawValue() as Veiculo;
        this.veiculoService.save(curso).subscribe(
          () => (this.submitted = true),
          (error) => console.log(error)
        );
      }
    }
    addMarcaForm() {
      window.location.reload();
      this.submitted = false;
      this.veiculoForm.reset();
    }

    deleteMessage = false;

    delete(id?: number) {
      this.veiculoService.delete(id!).subscribe(dado => {
        console.log(dado);
        this.deleteMessage = true;
        this.veiculoService.listarVeiculos().subscribe(dados => {
          this.veiculos = dados;
        });
      },
        error => console.log(error)
      );
    }
    updateVeiculo(id?: number) {
      this.router.navigate(['edit-veiculo', id]);
    }
}