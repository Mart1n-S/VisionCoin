import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AssetCardComponent } from './asset-card.component';

@NgModule({
  imports: [CommonModule,
    MatCardModule],
  declarations: [
    AssetCardComponent
  ],
  exports: [AssetCardComponent],
})
export class AssetCardModule {}
