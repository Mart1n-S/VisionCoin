import { Component, Input, OnInit } from '@angular/core';
import { Asset } from '@finastra/api-interfaces';

@Component({
  selector: 'finastra-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss'],
})
export class WatchlistComponent implements OnInit {
  @Input() watchlist!: Asset[];

  constructor() {}

  ngOnInit(): void {}

  bookMark(code: string) {
    console.log(code);
  }
}
