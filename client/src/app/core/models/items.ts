interface IItem {
  id: string;
  title: string;
  price: IPrice;
  picture: string;
  condition: string;
  state_name: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}

interface IPrice {
  currency: string;
  amount: number;
  decimals: number;
}
