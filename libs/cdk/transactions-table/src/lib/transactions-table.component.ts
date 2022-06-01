import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '@finastra/api-interfaces';

const transactions: Transaction[] = [
  {position: 1, name: 'Bitcoin', quantity: 1.5, code: 'BTC'},
  {position: 2, name: 'Etherum', quantity: 0.2, code: 'ETH'},
  {position: 3, name: 'BNB', quantity: 1.90, code: 'bnb'},
];

@Component({
  selector: 'finastra-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
// @Component({
//   selector: 'table-basic-example',
//   styleUrls: ['table-basic-example.css'],
//   templateUrl: 'table-basic-example.html',
// })
export class TransactionsTableComponent implements OnInit {

   @Input() transaction!: Transaction;
  
  constructor() { }

  ngOnInit(): void {}

}

export class TableBasicExample {
  displayedColumns: string[] = ['position', 'name', 'quantity', 'code'];
  dataSource = transactions;

  // @Input() transaction!: Transaction;
  
  // constructor() { }

  // ngOnInit(): void {}
}
