import { Component, Input, OnInit } from '@angular/core';
import { Asset } from '@finastra/api-interfaces';

@Component({
  selector: 'finastra-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss'],
})
export class AssetListComponent implements OnInit {
  @Input() assets!: Asset[];

  constructor() {}

  ngOnInit(): void {}
}
