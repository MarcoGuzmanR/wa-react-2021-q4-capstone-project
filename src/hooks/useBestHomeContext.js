import React from "react";
import BestHomeContext from "../context/context";

function useCategories() {
  const { categoriesList, categoriesMap, isLoading } = React.useContext(BestHomeContext);

  return { categoriesList, categoriesMap, isLoading };
}

function useShoppingCart() {
  const {
    cartList,
    cartTotal,
    setCartList,
    setCartTotal
  } = React.useContext(BestHomeContext);

  return {
    cartList,
    cartTotal,
    setCartList,
    setCartTotal
  };
}

export {
  useCategories,
  useShoppingCart
};