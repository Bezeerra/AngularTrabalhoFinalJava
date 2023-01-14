import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { MarcaAddComponent } from "./marca-add/marca-add.component";
import { MarcaEditComponent } from './marca-edit/marca-edit.component';

@NgModule({
imports: [ CommonModule,FormsModule, ReactiveFormsModule ],
declarations: [ MarcaAddComponent, MarcaEditComponent ],
exports: [ MarcaAddComponent, MarcaEditComponent ],
})
export class MarcaModule{}