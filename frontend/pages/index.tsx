import { NextPage } from "next";
/* WG generated hooks */
import { useQuery, withWunderGraph } from "../components/generated/nextjs";
/* my components */
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import Snipcart from "../components/Snipcart";
/* types */
import { result } from "../types/AllProductsResult";


const Home: NextPage = () => {
  const allProducts = useQuery.AllProducts({
    input: { a: { pageSize: 10 } },
  }).result as result; // type assertion because I explicitly don't want it checking for missing properties while coming from ResultLazy

  return (
    <div>
      <NavBar />
      <Snipcart />
      <div className="relative mx-auto flex flex-col items-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {allProducts.data ? (
            <>
              {allProducts.data.backend_products.data.map((product) => {
                return (

                  <ProductCard
                    id={product.id}
                    title={product.attributes.title}
                    image={product.attributes.image}
                    description={product.attributes.description}
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
        </div>
        {/* <div>
          <code className="text-white/80">
            {JSON.stringify(allProducts, null, 2)}
          </code>
        </div> */}
      </div>
    </div>
  );
};

export default withWunderGraph(Home);
