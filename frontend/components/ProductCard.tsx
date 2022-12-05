/* NextJS stuff */
import Image from "next/image";
import { useRouter } from "next/router";
/* my styles */
import styles from "./ProductCard.module.css";

type Props = {
  id: string;
  title: string;
  image: string;
  price: number;
  description?: string;
  rating: number;
  reviews: number;
};

const ProductCard = (props: Props) => {
  const router = useRouter();
  // handle click on Product Image
  const routeTo = (productId) => {
    router.push({
      pathname: `/products/${productId}`,
    });
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imgBx}>
          <Image
            onClick={() => routeTo(props.id)}
            className="img"
            src={props.image}
            alt="Product image"
            height={300}
            width={300}
          />
        </div>

        <div className={styles.contentBx}>
          <div className={styles.title}>
            <h2 onClick={() => routeTo(props.id)}>{props.title}</h2>
          </div>

          <div className={styles.rating}>
            <h2 className="font-medium text-zinc-100">{props.rating}⭐ </h2>
            <h4 className="font-medium text-amber-500">{props.reviews} </h4>
          </div>

          <div className={styles.price}>
            <h4 className="text-2xl font-bold text-gray-800">${props.price}</h4>
            {/* <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span> */}
          </div>
          <div className={styles.cartBtn}>
            {/* <a href="#">Add 🛒</a> */}
            <button
              className="snipcart-add-item"
              data-item-id={props.id}
              data-item-price={""+props.price}
              data-item-description={props.description}
              data-item-image={props.image}
              data-item-name={props.title}
            >
              Add 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
