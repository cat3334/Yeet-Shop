import { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import { logout, selectUser } from "../../redux/authSlice";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectCartItems, selectItemsCount } from "../../redux/cartSlice";
import Modal from "../Modal/Modal";
import Cart from "../Cart/Cart";
import LogIn from "../LogIn/LogIn";
import Button from "../Button/Button";

function Header() {
  const [modalContent, setModalContent] = useState("");
  const [showModal, setShowModal] = useState(false);

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const cartItems = useAppSelector(selectCartItems);
  const cartItemsCount = useAppSelector(selectItemsCount);
  console.log(cartItems);

  const openModal = (feature: string) => {
    setModalContent(feature);
    setShowModal(true);
  };

  return (
    <header className="header">
      <Link className="header__logo" to="/">
        <p>YeetShop</p>
      </Link>
      <Button className="header__favs">Wishes ✰</Button>
      {user && (
        <Button onClick={() => openModal("cart")}>Cart {cartItemsCount}</Button>
      )}
      {showModal && modalContent === "cart" && (
        <Modal showModal={showModal} closeModal={() => setShowModal(false)}>
          <Cart closeModal={() => setShowModal(false)} />
        </Modal>
      )}

      {!user ? (
        <Button onClick={() => openModal("login")}>Log In</Button>
      ) : (
        <Button onClick={() => dispatch(logout())}>Log out</Button>
      )}
      {showModal && modalContent === "login" && (
        <Modal showModal={showModal} closeModal={() => setShowModal(false)}>
          <LogIn handleClose={() => setShowModal(false)} />
        </Modal>
      )}

      {!user && (
        <Button
          onClick={() => openModal("signup")}
          // className="header__register"
        >
          Register
        </Button>
      )}
      {showModal && modalContent === "signup" && (
        <Modal showModal={showModal} closeModal={() => setShowModal(false)}>
          <SignUp handleClose={() => setShowModal(false)} />
        </Modal>
      )}
    </header>
  );
}

export default Header;
