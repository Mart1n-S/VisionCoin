import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TransactionsTableComponent } from './transactions-table.component';

@NgModule({
  imports: [CommonModule,
    MatTableModule],
  declarations: [
    TransactionsTableComponent
  ],
  exports: [TransactionsTableComponent],
})
export class TransactionsTableModule {};
