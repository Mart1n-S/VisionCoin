export interface Asset {
  addresse: string;
  name: string;
  code: string;
  icon: string;
  quantity: number;
  USDvalue: number;
  h: number;
}

export interface Transaction {
  hash: string;
  label: string;
  quantity: number;
  symbol: string;
}
