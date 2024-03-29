import "./ProductItem.scss";
import { Link } from "react-router-dom";
import { addWithThunk } from "../../../../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { selectUserId } from "../../../../redux/authSlice";
import { IBook } from "../../../../types/types";

function ProductItem(props: IBook) {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUserId);

  function shortenTitle(title: string) {
    if (title.length > 25) {
      return title.substring(0, 28) + "...";
    }
    return title;
  }

  const handleAddToCart = () => {
    if (user) {
      dispatch(
        addWithThunk({
          id: props.id,
          title: props.title,
          img: props.img,
          price: props.price,
        })
      );
    } else {
      alert("You must be logged in!");
    }
  };

  return (
    <article className="product-item">
      <Link to={`/product/${props.id}`}>
        <div className="product-item__img-container">
          <img className="product-item__img" src={props.img} alt="" />
        </div>
        <p className="product-item__title">{shortenTitle(props.title)}</p>
        <p className="product-item__price">{props.price} PLN</p>
      </Link>
      <button onClick={handleAddToCart} className="product-item__button">
        Add to basket 🛒
      </button>
    </article>
  );
}

export default ProductItem;
