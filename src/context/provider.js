import React from 'react';
import BestHomeContext from './context';

import { useCustomResponseAPI } from '../hooks/useCustomResponseAPI';

function getCategoriesMap(categories) {
  const categoriesMap = new Map();

  categories.map(({id, data}) => categoriesMap.set(id, data.name));

  return categoriesMap;
}

const propsCall = {
  documentType: 'category',
  pageSize: 30
};

function BestHomeProvider(props) {
  const { data, isLoading } = useCustomResponseAPI(propsCall);
  const [categoriesList, setCategoriesList] = React.useState([]);
  const [categoriesMap, setCategoriesMap] = React.useState();
  const [cartList, setCartList] = React.useState([]);

  React.useEffect(() => {
    if (isLoading) {
      return;
    }

    setCategoriesList(data.results);
    setCategoriesMap(getCategoriesMap(data.results));
  }, [data, isLoading]);

  const contextValues = {
    cartList,
    categoriesList,
    categoriesMap,
    isLoading,
    setCartList
  };

  return (
    <BestHomeContext.Provider value={contextValues}>
      {props.children}
    </BestHomeContext.Provider>
  );
}

export default BestHomeProvider; 