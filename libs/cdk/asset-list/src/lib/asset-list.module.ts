import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { AssetListComponent } from './asset-list.component';

@NgModule({
  imports: [CommonModule, MatListModule],
  declarations: [AssetListComponent],
  exports: [AssetListComponent],
})
export class AssetListModule {}
