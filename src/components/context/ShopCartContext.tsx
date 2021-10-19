import React, { createContext, useState } from "react";

type IShopCartContext = {
    shopCart: ShopCartItem[];
    addItem: (item: ShopCartItem) => void;
    editQuantity: (quantity: number, itemId: string) => "Error" | undefined;
    deleteItem: (itemId: string) => void;
};

export const ShopCartContext = createContext({} as IShopCartContext);

interface ShopCartItem {
    id: string;
    name: string;
    img?: string;
    price: number;
    quantity: number;
    total: number;
}

export const ShopCartProvider = ({ children }: any) => {
    const [shopCart, setShopCart] = useState<ShopCartItem[]>([]);

    const addItem = (item: ShopCartItem) => {
        const itemFound = shopCart.find(
            (shopCartItem) => shopCartItem.id === item.id
        );
        if (itemFound) {
            setShopCart([
                ...shopCart.map((shopCartItem) =>
                    shopCartItem.id === item.id
                        ? {
                              ...item,
                          }
                        : shopCartItem
                ),
            ]);
        } else {
            setShopCart([...shopCart, item]);
        }
    };

    const editQuantity = (quantity: number, itemId: string) => {
        const itemQuantity = shopCart.find((item) => item.id === itemId);
        if (!itemQuantity) {
            return "Error";
        }
        setShopCart([
            ...shopCart,
            {
                ...itemQuantity,
                quantity,
                total: itemQuantity.price * quantity,
            },
        ]);
    };

    const deleteItem = (itemId: string) => {
        setShopCart([...shopCart.filter((item) => item.id !== itemId)]);
    };

    return (
        <ShopCartContext.Provider
            value={{
                shopCart,
                addItem,
                editQuantity,
                deleteItem,
            }}
        >
            {children}
        </ShopCartContext.Provider>
    );
};
