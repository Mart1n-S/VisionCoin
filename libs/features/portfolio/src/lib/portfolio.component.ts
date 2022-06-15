import { Component, OnInit } from '@angular/core';
import { Asset, Balance } from '@finastra/api-interfaces';
import { CryptoService } from '@finastra/services';

@Component({
  selector: 'finastra-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  balance?: Balance;

  assets?: Asset[];

  trending?: Asset[];

  watchlist?: Asset[];

  // displayedColumns: string[] = ['hash', 'label', 'quantity', 'symbol'];

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.cryptoService.getBalance().subscribe((res: Balance) => {
      this.balance = res;
    });

    this.cryptoService.getAssets().subscribe((res: Asset[]) => {
      this.assets = res;
    });

    this.cryptoService.getTrendings().subscribe((res: Asset[]) => {
      this.trending = res;
    });

    this.cryptoService.getWatchlist().subscribe((res: Asset[]) => {
      this.watchlist = res;
    });
  }

  handleClick(asset: Asset): void {
    console.log(asset);
  }
}
