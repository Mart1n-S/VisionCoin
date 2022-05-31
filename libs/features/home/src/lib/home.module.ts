import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'demo', pathMatch: 'full' },
      { 
        path: 'demo',
        component: HomeComponent,
        children: [
          { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
          {
            path: 'portfolio',
            loadChildren: () => import('@finastra/features/portfolio').then((m) => m.PortfolioModule)
          }
        ]
      }
    ])
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
