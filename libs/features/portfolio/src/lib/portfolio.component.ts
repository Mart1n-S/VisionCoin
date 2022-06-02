import { Component, OnInit } from '@angular/core';
import { Asset, Transaction } from '@finastra/api-interfaces';

@Component({
  selector: 'finastra-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  assets: Asset[] = [
    {
      addresse: '0x986368273648623',
      name: 'Bitcoin',
      code: 'BTC',
      icon: '',
      quantity: 1.78,
      USDvalue: 12030.33,
      h: 0.02,
    },
    {
      addresse: '0x986368266486224',
      name: 'Etherum',
      code: 'ETH',
      icon: '',
      quantity: 0.998,
      USDvalue: 2030.33,
      h: 0.82,
    },
    {
      addresse: '0x986368273648678',
      name: 'BNB',
      code: 'bnb',
      icon: '',
      quantity: 10.28,
      USDvalue: 30.33,
      h: 3.2,
    },
  ];

  displayedColumns: string[] = ['hash', 'label', 'quantity', 'symbol'];

  transactions: Transaction[] = [
    { hash: '0x43JIHIEJANF13', label: 'Bitcoin', quantity: 1.5, symbol: 'BTC' },
    { hash: '0x2456TYHF7IYT5', label: 'Etherum', quantity: 2.5, symbol: 'ETH' },
    { hash: '0x78RE4TVSRE34R', label: 'BNB', quantity: 0.5, symbol: 'bnb' },
  ];

  constructor() {}

  ngOnInit(): void {}

  handleClick(asset: Asset): void {
    console.log(asset);
  }
}
