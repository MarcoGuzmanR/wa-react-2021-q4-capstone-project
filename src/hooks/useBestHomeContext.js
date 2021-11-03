import React from "react";
import BestHomeContext from "../context/context";

function useCategories() {
  const { categoriesList, categoriesMap, isLoading } = React.useContext(BestHomeContext);

  return { categoriesList, categoriesMap, isLoading };
}

function useShoppingCart() {
  const { cartList, setCartList } = React.useContext(BestHomeContext);

  return { cartList, setCartList };
}

export {
  useCategories,
  useShoppingCart
};