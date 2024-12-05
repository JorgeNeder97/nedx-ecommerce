import { Route, Routes } from "react-router-dom";
import { Home } from "#pages/Home.tsx";
import { Products } from "#pages/Products.tsx";

export const MainApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
        </Routes>
    );
};
