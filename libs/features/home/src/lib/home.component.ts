import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'finastra-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  navigations: any[] = [
    { icon: 'home', label: 'Home', aria_label: 'home icon' },
    { icon: 'trending_up', label: 'Market', aria_label: 'trending_up icon' },
    { icon: 'swap_horiz', label: 'Swap', aria_label: 'swap_horiz icon' },
    { icon: 'work_outline', label: 'Transactions', aria_label: 'work_outline icon' },
  ];

  constructor() {}

  ngOnInit(): void {}

  handleClick(action: string): void {
    console.log(action);
  }
}
