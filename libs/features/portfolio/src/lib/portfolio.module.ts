import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AssetCardModule } from '@finastra/cdk/asset-card';
import { BalanceCardModule } from '@finastra/cdk/balance-card';
import { TransactionsTableModule } from '@finastra/cdk/transactions-table';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PortfolioComponent,
      },
    ]),
    AssetCardModule,
    TransactionsTableModule,
    BalanceCardModule,
  ],
  declarations: [PortfolioComponent],
})
export class PortfolioModule {}
