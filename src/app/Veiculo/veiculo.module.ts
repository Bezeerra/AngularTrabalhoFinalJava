import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VeiculoAddComponent } from './veiculo-add/veiculo-add.component';
import { VeiculoEditComponent } from './veiculo-edit/veiculo-edit.component';


@NgModule({
    imports: [ CommonModule,FormsModule, ReactiveFormsModule ],
    declarations: [ VeiculoAddComponent, VeiculoEditComponent ],
    exports: [VeiculoAddComponent, VeiculoEditComponent],
})
export class VeiculoModule{}