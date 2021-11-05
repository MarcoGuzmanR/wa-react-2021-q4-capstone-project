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
  const [cartTotal, setCartTotal] = React.useState(0);

  React.useEffect(() => {
    if (isLoading) {
      return;
    }

    setCategoriesList(data.results);
    setCategoriesMap(getCategoriesMap(data.results));
  }, [data, isLoading]);

  const contextValues = {
    cartList,
    cartTotal,
    categoriesList,
    categoriesMap,
    isLoading,
    setCartList,
    setCartTotal
  };

  return (
    <BestHomeContext.Provider value={contextValues}>
      {props.children}
    </BestHomeContext.Provider>
  );
}

export default BestHomeProvider; 