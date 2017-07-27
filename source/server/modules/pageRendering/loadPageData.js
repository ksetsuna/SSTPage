import { matchPath } from 'react-router-dom'

import routerInfo from '../../../modules/routing'
import getDataProvider from '../dataProviderList'

const loadPageData = function(url) {
  const dataSet = {
    object: {},
    string: {}
  };

  routerInfo.some(route => {
    const isMatch = matchPath(url, route);
  
    if(isMatch && route.__id && route.dataProvider) {
      dataSet.object[route.dataProvider] = getDataProvider(route.dataProvider).data
      dataSet.string[route.dataProvider] = getDataProvider(route.dataProvider).dataString
    }

    return isMatch
  });

  return dataSet
}

export default loadPageData