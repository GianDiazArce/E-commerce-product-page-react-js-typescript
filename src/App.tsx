import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { ShopCartProvider } from "./context/ShopCartContext";
import { HomePage } from "./pages/HomePage";
import { theme } from "./components/theme/theme";

const AppState = ({ children }: any) => {
    return (
        <ShopCartProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ShopCartProvider>
    );
};

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
