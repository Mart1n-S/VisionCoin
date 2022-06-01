import { Component, /*Input,*/ OnInit } from '@angular/core';

@Component({
  selector: 'finastra-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent implements OnInit {

  // @Input() transaction!: Transaction;
  
  constructor() { }

  ngOnInit(): void {}

}
