import React from "react";
import BestHomeContext from "../context/context";

function useCategories() {
  const { categoriesList, categoriesMap, isLoading } = React.useContext(BestHomeContext);

  return { categoriesList, categoriesMap, isLoading };
}

export { useCategories };