import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '@finastra/api-interfaces';

@Component({
  selector: 'finastra-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss'],
})
export class TransactionsTableComponent implements OnInit {
  @Input() transactions?: Transaction[];
  @Input() displayedColumns?: string[];

  constructor() {}

  ngOnInit(): void {}
}
