import {
    Avatar,
    Box,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Popover,
    SwipeableDrawer,
    Divider,
    Button,
    ListItemAvatar,
    Badge,
} from "@mui/material";
import { useContext, useState } from "react";
import "./navbar.css";
import { styled } from "@mui/styles";
import { ShopCartContext } from "../../context/ShopCartContext";

const MenuIcon = () => {
    return (
        <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
                fill="#69707D"
                fillRule="evenodd"
            />
        </svg>
    );
};

const CloseIcon = () => {
    return (
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D"
                fillRule="evenodd"
            />
        </svg>
    );
};

const DeleteIcon = () => {
    return (
        <svg
            width="14"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <path
                    d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                    id="a"
                />
            </defs>
            <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
        </svg>
    );
};

interface IShopCart {
    open: boolean;
    archor: HTMLButtonElement | null;
}

const ButtonCart = styled(Button)({
    backgroundColor: "hsl(26, 100%, 55%)",
    textTransform: "none",
    width: "90%",
    display: "block",
    margin: "0 auto",

    "&:hover": {
        backgroundColor: "hsl(26, 100%, 55%)",
        opacity: ".7",
    },
});

export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openShopCart, setOpenShopCart] = useState<IShopCart>({
        open: false,
        archor: null,
    });

    const { shopCart, deleteItem } = useContext(ShopCartContext);

    const toggleDrawer =
        (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setOpenMenu(open);
        };

    const list = (anchor: string = "left") => (
        <Box
            sx={{
                width: 250,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem>
                    <IconButton onClick={toggleDrawer(false)}>
                        <CloseIcon />
                    </IconButton>
                </ListItem>
            </List>
            <List className="drawer__list">
                {["Collections", "Men", "Women", "About", "Contact"].map(
                    (text) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                )}
            </List>
        </Box>
    );

    const handleShopButtonClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        setOpenShopCart({
            archor: e.currentTarget,
            open: true,
        });
    };

    const handleClose = () => {
        setOpenShopCart({
            open: false,
            archor: null,
        });
    };

    return (
        <div className="nav">
            <div className="nav__container">
                <IconButton className="nav__menu" onClick={toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
                <SwipeableDrawer
                    anchor={"left"}
                    open={openMenu}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    {list("left")}
                </SwipeableDrawer>
                <figure className="nav__logo">
                    <img src="/assets/images/logo.svg" alt="sneakers-logo" />
                </figure>
                <ul className="nav__items">
                    <li className="nav__item">
                        <a className="nav__link" href="https://www.google.com">
                            Collections
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="https://www.google.com">
                            Men
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="https://www.google.com">
                            Women
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="https://www.google.com">
                            About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="https://www.google.com">
                            Contact
                        </a>
                    </li>
                </ul>

                <ul className="nav__actions">
                    <IconButton
                        aria-describedby="simple-popover"
                        onClick={handleShopButtonClick}
                    >
                        <Badge
                            color="secondary"
                            badgeContent={shopCart[0]?.quantity || 0}
                            sx={{
                                "& .MuiBadge-badge": {
                                    color: "white",
                                },
                            }}
                        >
                            <img src="/assets/images/icon-cart.svg" alt="" />
                        </Badge>
                    </IconButton>
                    <Popover
                        id={"simple-popover"}
                        open={openShopCart.open}
                        anchorEl={openShopCart.archor}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                        }}
                        className="shopCart"
                        PaperProps={{
                            style: { width: "300px", padding: "10px 0" },
                        }}
                    >
                        <h3 className="shopCart__title">Cart</h3>
                        <Divider />
                        {shopCart.length === 0 ? (
                            <h2 className="shopCart__title">
                                El carro esta vacio
                            </h2>
                        ) : (
                            <List>
                                {shopCart.map((item) => (
                                    <ListItem
                                        key={item.id}
                                        secondaryAction={
                                            <IconButton
                                                edge="end"
                                                aria-label="delete"
                                                className="shopCart__deleteIcon"
                                                onClick={() =>
                                                    deleteItem(item.id)
                                                }
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        }
                                    >
                                        <ListItemAvatar>
                                            <Avatar
                                                variant="square"
                                                src={item.img}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={item.name}
                                            secondary={
                                                <p>
                                                    {`$${item.price.toFixed(
                                                        2
                                                    )} x ${item.quantity}`}{" "}
                                                    <b>
                                                        ${item.total.toFixed(2)}
                                                    </b>
                                                </p>
                                            }
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        )}
                        <ButtonCart
                            variant="contained"
                            className="shopCart__button"
                        >
                            Checkout
                        </ButtonCart>
                    </Popover>
                    <Avatar
                        alt="avatar"
                        src="/assets/images/image-avatar.png"
                        className="nav__avatar"
                    />
                </ul>
            </div>
        </div>
    );
};
