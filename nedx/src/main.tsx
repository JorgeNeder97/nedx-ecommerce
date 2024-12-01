import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./normalize.css";
import { MainApp } from "./MainApp.tsx";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <StrictMode>
            <MainApp />
        </StrictMode>
    </BrowserRouter>
);
