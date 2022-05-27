import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AssetCardComponent } from './asset-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    AssetCardComponent
  ],
  exports: [AssetCardComponent],
})
export class AssetCardModule {}
