export type productAttributes = {
  title: string;
  price: number;
  image: string;
  description: string;
  review_score: number;
  review_count: number;
};

export type product = {
  id: string;
  attributes: productAttributes;
};

export type products = {
  data: product[];
};

export type queryData = {
  backend_products: products;
  refetching: boolean;
};

export type result = {
  status: string;
  data: queryData;
};
