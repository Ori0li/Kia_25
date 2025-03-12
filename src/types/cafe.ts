type Beverage = "coffee" | "nonCoffee" | "ade" | "tea";
type Food = "bakery" | "cookie";

type OperationTime = {
  open?: string;
  close?: string;
};
type Open24Hour = Omit<OperationTime, keyof OperationTime>;
type RegularOperation = Required<OperationTime>;

type Unit = { id: number; name: string };

type WithUnit<T> = Unit & T;
type Item = {
  price: number;
  stocks: number;
  category: Beverage | Food;
};
type CafeItem = WithUnit<Item>;
type Staff = {
  rank: "Manager" | "PartTime" | "Owner";
  wage: number;
};
type Empolyee = WithUnit<Staff>;
type Branch = {
  operation: Open24Hour | RegularOperation;
  empolyees: Empolyee[];
  menu: CafeItem[];
};
type Spot = WithUnit<Branch>;
