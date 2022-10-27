/* WG generated hooks */
import { useQuery, withWunderGraph } from "../../components/generated/nextjs";
/* NextJS stuff */
import Image from "next/image";
import { useRouter } from "next/router";
/* my components */
import NavBar from "../../components/NavBar";
/* types */
import { result } from "../../types/OneProductResult";
// /* types */
// type categoryAttributes = {
//   name: string;
// };

// type category = {
//   data: {
//     id: string;
//     attributes: categoryAttributes;
//   };
// };

// type productAttributes = {
//   title: string;
//   price: number;
//   image: string;
//   description: string;
//   review_score: number;
//   review_count: number;
//   category: category;
// };

// type product = {
//   id: string;
//   attributes: productAttributes;
// };

// type products = {
//   data: product[];
// };

// type queryData = {
//   backend_products: products;
//   refetching: boolean;
// };

// type result = {
//   status: string;
//   data: queryData;
// };

type Props = {};

const Product = (props: Props) => {
  const router = useRouter();
  const { id  } = router.query;
  const productId: string = id as string;

  const oneProduct = useQuery.ProductByID({
    input: { id: productId },
  }).result as result;

  const data = oneProduct.data?.backend_products?.data[0].attributes;

  return (
    <div>
      <NavBar />
      <div>
        <div className="items-center">
          <div className="grid grid-cols-2 gap-0 p-4">
            <div className="content-center">
              <Image
                src={data?.image}
                alt="Picture of product"
                width={400}
                height={400}
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-zinc-100">
                {data?.title}
              </h1>
              
              <h2 className="text-2xl p-2 font-bold bg-amber-500 text-black mt-2 mb-2 ">
                ${data?.price}
              </h2>
              <h2 className="text-lg text-neutral-400 mt-2 mb-2 ">
                {data?.description}
              </h2>
              <h3 className="text-xl text-zinc-100 mt-2 mb-2 ">
                {data?.review_score} ⭐
              </h3>
              <h3 className="text-lg text-zinc-100 mt-2 mb-2 ">
                {data?.review_count} reviews
              </h3>
              {/* <div className="flex flex-row">
                <h3 className="w-fit pt-1 pb-1 pl-2 pr-1 rounded-l-lg bg-zinc-50 text-lg font-bold text-black mt-2 mb-2 ">
                  in
                </h3>
                <h3 className="w-fit p-1 rounded-r-lg  text-lg bg-cyan-200 text-gray-800 mt-2 mb-2 ">
                  {data?.category.data.attributes.name}
                </h3>
              </div> */}
              

              <button
                className="p-3 text-xl font-bold bg-zinc-100 text-black mt-2 mb-2 snipcart-add-item"
                data-item-id={oneProduct.data?.backend_products?.data[0].id}
                data-item-price={"" + data?.price}
                data-item-description={data?.description}
                data-item-image={data?.image}
                data-item-name={data?.title}
              >
                Add To Cart 🛒
              </button>
            </div>
          </div>
          <hr />
          {/* <code className="text-white/80">
            {JSON.stringify(oneProduct, null, 2)}
          </code> */}
        </div>
      </div>
    </div>
  );
};

export default withWunderGraph(Product);
