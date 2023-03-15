import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServerListComponent } from './components/server-list/server-list.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
