type Order = {
    number: string;
    name: string;
    price: number;
    transactionId: string;
    authorizationId: string;
    paymentMethod: string;
    merchantId: string;
    key: string;
    status: string;
    externalOrderId: string;
    serviceFee: number;
    totalPrice: number;
    paypalAccount: string;
    claimedKey: string;
    claimedDate: string;
    claimedIP: string;
    product: Product;
};

type Product = {
  title: string;
  price: number;
}

type User = {
  email: string;
  orders: Order[];
  status: string;
  role: string;
}

export type { Order, Product, User };
export default User;