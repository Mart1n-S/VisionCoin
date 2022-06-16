import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Balance } from '@finastra/api-interfaces';

export interface Action {
  icon: string;
  label: string;
  aria_label: string;
}

@Component({
  selector: 'finastra-balance-card',
  templateUrl: './balance-card.component.html',
  styleUrls: ['./balance-card.component.scss'],
})
export class BalanceCardComponent implements OnInit {
  @Input() balance!: Balance;
  @Output() navigationEvent = new EventEmitter<string>();

  actions: Action[] = [
    { icon: 'payments', label: 'Withdraw', aria_label: 'Payments icon' },
    { icon: 'account_balance_wallet', label: 'Deposit', aria_label: 'account_balance_wallet icon' },
    { icon: 'credit_card', label: 'Buy', aria_label: 'credit_card icon' },
    { icon: 'monetization_on', label: 'Sell', aria_label: 'monetization_on icon' },
  ];

  constructor() {}

  ngOnInit(): void {}

  handleClick(action: string): void {
    this.navigationEvent.emit(action);
  }
}
