import { Component, OnInit } from '@angular/core';
import { Asset } from '@finastra/api-interfaces';

@Component({
  selector: 'finastra-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  assetActive?: Asset;

  assets: Asset[] = [
    {
      "addresse": "0x986368273648623",
      "name": "Bitcoin",
      "code": "BTC",
      "icon": "",
      "quantity": 1.78,
      "USDvalue": 12030.33,
      "h": 0.02
    },
    {
      "addresse": "0x986368266486224",
      "name": "Etherum",
      "code": "ETH",
      "icon": "",
      "quantity": 0.998,
      "USDvalue": 2030.33,
      "h": 0.82
    },
    {
      "addresse": "0x986368273648678",
      "name": "BNB",
      "code": "BNB",
      "icon": "",
      "quantity": 10.28,
      "USDvalue": 30.33,
      "h": 3.2
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick(asset: Asset): void {
    this.assetActive = asset;
  }

}
