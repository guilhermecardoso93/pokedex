import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Router } from "react-router-dom";
import Routes from "./Routes";

const queryClient = new QueryClient()

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </QueryClientProvider>
  );
};
