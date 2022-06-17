import { Component, Input, OnInit } from '@angular/core';
import { Asset } from '@finastra/api-interfaces';

@Component({
  selector: 'finastra-trending-list',
  templateUrl: './trending-list.component.html',
  styleUrls: ['./trending-list.component.scss'],
})
export class TrendingListComponent implements OnInit {
  @Input() trending!: Asset[];

  constructor() {}

  ngOnInit(): void {}
}
