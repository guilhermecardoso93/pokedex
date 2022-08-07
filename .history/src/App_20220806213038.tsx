import React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import { Routes } from "./Routes";

export const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};
