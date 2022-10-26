import { NextPage } from "next";
import Image from "next/image";
import { useQuery, withWunderGraph } from "../components/generated/nextjs";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";

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

type result = {
  status: string;
  data: queryData;
};

const Home: NextPage = () => {
  const allProducts = useQuery.AllProducts({
    input: { a: { pageSize: 10 } },
  }).result as result; // type assertion because I explicitly don't want it checking for missing properties while coming from ResultLazy

  const oneProduct = useQuery.ProductByID({
    input: { id: 1 },
  }).result as result;

  return (
    <div>
      <NavBar />
      <div className="relative mx-auto flex flex-col items-center">
        <div className="grid grid-cols-3 gap-4 p-4">
          {allProducts.data ? (
            <>
              {allProducts.data.backend_products.data.map((product) => {
                return (
                  // <div>
                  //   <Image
                  //     src={product.attributes.image}
                  //     alt="Picture of product"
                  //     width={300}
                  //     height={300}
                  //   />
                  // </div>
                  <ProductCard
                    id={product.id}
                    title={product.attributes.title}
                    image={product.attributes.image}
                    price={product.attributes.price}
                    rating={product.attributes.review_score}
                    reviews={product.attributes.review_count}
                  />
                );
              })}
            </>
          ) : (
            <>
              <span> Loading...</span>
            </>
          )}

          {/* <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
          <div>07</div>
          <div>08</div>
          <div>09</div> */}
        </div>
        <div>
          <code className="text-white/80">
            {JSON.stringify(oneProduct, null, 2)}
          </code>
        </div>
      </div>
    </div>
  );
};

export default withWunderGraph(Home);
