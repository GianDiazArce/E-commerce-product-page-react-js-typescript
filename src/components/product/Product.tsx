import React, { useContext, useState } from "react";
import { Button, IconButton } from "@mui/material";
import "./product.css";
import { styled } from "@mui/styles";
import { ShopCartContext } from "../../context/ShopCartContext";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { getImageNum } from "../../helpers/getImageNum";

const ButtonCart = styled(Button)({
    backgroundColor: "hsl(26, 100%, 55%)",
    textTransform: "none",

    "&:hover": {
        backgroundColor: "hsl(26, 100%, 55%)",
        opacity: ".7",
    },

    "@media screen and (max-width: 600px)": {
        width: "90%",
        display: "flex",
        margin: "0 auto",
    },
});

const CartIcon = () => {
    return (
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#ffffff"
                fillRule="nonzero"
            />
        </svg>
    );
};

type PhotoGallery = "product-1" | "product-2" | "product-3" | "product-4";

export const Product = () => {
    const [quantity, setQuantity] = useState(0);

    const [currentPhoto, setCurrentPhoto] = useState<PhotoGallery>("product-1");
    const { addItem } = useContext(ShopCartContext);

    const productItem = {
        name: "Fall Limited Edition Sneakers",
        price: 125,
    };

    const handleAddToShopCart = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        const shopCartItem = {
            id: "1",
            name: "Fall limited edition",
            img: "/assets/images/image-product-1.jpg",
            price: productItem.price,
        };
        addItem({
            ...shopCartItem,
            quantity,
            total: quantity * shopCartItem.price,
        });
    };

    const handleNextImage = () => {
        const index = getImageNum(currentPhoto);

        index <= 4 && setCurrentPhoto(`product-${index + 1}` as PhotoGallery);
    };
    const handlePrevImage = () => {
        const index = getImageNum(currentPhoto);

        index >= 1 && setCurrentPhoto(`product-${index - 1}` as PhotoGallery);
    };

    return (
        <div className="product">
            <div className="product__images">
                <figure className="product__figure">
                    <img
                        src={`/assets/images/image-${currentPhoto}.jpg`}
                        alt="product-1"
                        className="product__img"
                    />
                </figure>
                <div className="product__gallery">
                    <figure
                        className={`product__galleryImage ${
                            currentPhoto === "product-1" &&
                            "product__galleryImage--active"
                        }`}
                        onClick={() => setCurrentPhoto("product-1")}
                    >
                        <img
                            src="/assets/images/image-product-1-thumbnail.jpg"
                            className="product__img"
                            alt=""
                        />
                    </figure>
                    <figure
                        className={`product__galleryImage ${
                            currentPhoto === "product-2" &&
                            "product__galleryImage--active"
                        }`}
                        onClick={() => setCurrentPhoto("product-2")}
                    >
                        <img
                            src="/assets/images/image-product-2-thumbnail.jpg"
                            className="product__img"
                            alt=""
                        />
                    </figure>
                    <figure
                        className={`product__galleryImage ${
                            currentPhoto === "product-3" &&
                            "product__galleryImage--active"
                        }`}
                        onClick={() => setCurrentPhoto("product-3")}
                    >
                        <img
                            src="/assets/images/image-product-3-thumbnail.jpg"
                            className="product__img"
                            alt=""
                        />
                    </figure>
                    <figure
                        className={`product__galleryImage ${
                            currentPhoto === "product-4" &&
                            "product__galleryImage--active"
                        }`}
                        onClick={() => setCurrentPhoto("product-4")}
                    >
                        <img
                            src="/assets/images/image-product-4-thumbnail.jpg"
                            className="product__img"
                            alt=""
                        />
                    </figure>
                </div>
                <div className="btn__controller btn__right">
                    <IconButton
                        onClick={handleNextImage}
                        disabled={currentPhoto === "product-4"}
                        sx={{
                            backgroundColor: "white",
                            "&:hover": {
                                background: "rgba(255, 255, 255, .3)",
                            },
                        }}
                    >
                        <ArrowForwardIosOutlinedIcon />
                    </IconButton>
                </div>
                <div className="btn__controller btn__left">
                    <IconButton
                        onClick={handlePrevImage}
                        disabled={currentPhoto === "product-1"}
                        sx={{
                            backgroundColor: "white",
                            "&:hover": {
                                background: "rgba(255, 255, 255, .3)",
                            },
                        }}
                    >
                        <ArrowBackIosOutlinedIcon />
                    </IconButton>
                </div>
            </div>
            <div className="product__texts">
                <span className="product__company">SNEAKER COMPANY</span>
                <h1 className="product__title">{productItem.name}</h1>
                <p className="product__paragraph">
                    These low-profile sneakers are your perfect casual wear
                    companion. Featuring a durable rubber outer sole, they'll
                    withstand everything the weather can offer.
                </p>
                <div className="product__prices">
                    <div className="product__promo">
                        <span className="product__price">
                            ${productItem.price.toFixed(2)}
                        </span>
                        <span className="product__offer">50%</span>
                    </div>
                    <span className="product__lastPrice">$250.00</span>
                </div>
                <div className="product__actions">
                    <div className="product__quantities">
                        <button
                            className="product__btn minusQuantity"
                            onClick={() => {
                                setQuantity(
                                    quantity <= 0 ? quantity : quantity - 1
                                );
                            }}
                        >
                            -
                        </button>
                        <input
                            className="product__quantity"
                            type="number"
                            name="quantity"
                            value={quantity}
                            onChange={(e) => {
                                setQuantity(parseInt(e.target.value));
                            }}
                        />
                        <button
                            className="product__btn plusQuantity"
                            onClick={() => {
                                setQuantity(quantity + 1);
                            }}
                        >
                            +
                        </button>
                    </div>
                    <ButtonCart
                        variant="contained"
                        className="product__button"
                        startIcon={<CartIcon />}
                        onClick={handleAddToShopCart}
                        sx={{ color: "white" }}
                    >
                        Add to cart
                    </ButtonCart>
                </div>
            </div>
        </div>
    );
};
