import { Button, MantineProvider } from "@mantine/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      // theme={{
      //   /** Put your mantine theme override here */
      //   colorScheme: "light",
      // }}
    >
      <App />
    </MantineProvider>
  </StrictMode>
);
