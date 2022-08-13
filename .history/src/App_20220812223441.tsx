import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Router } from "react-router-dom";
import { FavoriteProvider } from "./favorites/contexts/FavoriteContext";
import {Routes} from "./Routes";

const queryClient = new QueryClient();

import './App.module.scss'

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoriteProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </FavoriteProvider>
    </QueryClientProvider>
  );
};
