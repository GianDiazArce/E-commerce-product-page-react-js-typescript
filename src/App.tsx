import { CssBaseline } from "@mui/material";
import React from "react";
import { ShopCartProvider } from "./components/context/ShopCartContext";
import { HomePage } from "./pages/HomePage";

const AppState = ({children}: any) => {
    return <ShopCartProvider>{children}</ShopCartProvider>
}

const App = () => {
    return (
        <>
            <AppState>
                <CssBaseline />
                <HomePage />
            </AppState>
        </>
    );
};

export default App;
