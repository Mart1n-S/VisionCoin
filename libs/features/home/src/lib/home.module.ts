import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AssetCardModule } from '@finastra/cdk/asset-card';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: HomeComponent }]),
    AssetCardModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
