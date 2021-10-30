import React from "react";
import BestHomeContext from "../context/context";

function useCategories() {
  const { categoriesList, isLoading } = React.useContext(BestHomeContext);

  return { categoriesList, isLoading };
}

export { useCategories };