
type categoryAttributes = {
  name: string;
};

type category = {
  data: {
    id: string;
    attributes: categoryAttributes;
  };
};

type productAttributes = {
  title: string;
  price: number;
  image: string;
  description: string;
  review_score: number;
  review_count: number;
  category: category;
};

type product = {
  id: string;
  attributes: productAttributes;
};

type products = {
  data: product[];
};

type queryData = {
  backend_products: products;
  refetching: boolean;
};

export type result = {
  status: string;
  data: queryData;
};
