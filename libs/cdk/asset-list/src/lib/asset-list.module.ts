import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { AssetListComponent } from './asset-list.component';

@NgModule({
  imports: [CommonModule, MatListModule, MatDividerModule],
  declarations: [AssetListComponent],
  exports: [AssetListComponent],
})
export class AssetListModule {}
