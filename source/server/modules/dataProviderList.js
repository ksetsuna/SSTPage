import path from 'path'

import configuration from '../../../configuration'

import journalListProvider from './dataProvider/journalListProvider'
import publicationListProvider from './dataProvider/publicationListProvider'
import publicationDetailProvider from './dataProvider/publicationDetailProvider'
import memberListProvider from './dataProvider/memberListProvider'


const providerList = {
  journalList: journalListProvider,
  publicationList: publicationListProvider,
  publicationDetail: publicationDetailProvider,
  memberList: memberListProvider,
}

const getDataProvider = (name, query) => {
  if (typeof(providerList[name]) !== 'function' && query)
    throw new TypeError(`The provider ${name} do not accept query!`);
  if(!providerList[name])
    throw new Error(`Provider ${name} not exists!`);
  
  if(query) return providerList[name](query)
  
  return providerList[name]
}

export default getDataProvider