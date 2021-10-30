import React from 'react';
import BestHomeContext from './context';

import { useCustomResponseAPI } from '../hooks/useCustomResponseAPI';

const propsCall = {
  documentType: 'category',
  pageSize: 30
};

function BestHomeProvider(props) {
  const { data, isLoading } = useCustomResponseAPI(propsCall);
  const [categoriesList, setCategoriesList] = React.useState([]);

  React.useEffect(() => {
    if (isLoading) {
      return;
    }

    setCategoriesList(data.results);
  }, [data, isLoading]);

  const contextValues = {
    categoriesList,
    isLoading
  };

  return (
    <BestHomeContext.Provider value={contextValues}>
      {props.children}
    </BestHomeContext.Provider>
  );
}

export default BestHomeProvider; 