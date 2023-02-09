import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Error from "./pages/404";
import { AppProvider } from "./context";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="bg-gray-100">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="recipe/:id" element={<Recipe />} />
                <Route path="*" element={<Error />} />
              </Route>
            </Routes>
          </AppProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
