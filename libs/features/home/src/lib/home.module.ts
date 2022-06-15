import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'demo', pathMatch: 'full' },
      {
        path: 'demo',
        component: HomeComponent,
        children: [
          { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
          {
            path: 'portfolio',
            loadChildren: () =>
              import('@finastra/features/portfolio').then((m) => m.PortfolioModule),
          },
        ],
      },
    ]),
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
