import fetch from 'isomorphic-fetch'

import Index from '../client/components/Index'
import MemberList from '../client/components/MemberList'
import PublicationList from '../client/components/PublicationList'
import NotFoundPage from '../client/components/NotFoundPage'

import configuration from '../../configuration'

const routes = [
  {
    __id: 'home',
    path: '/',
    component: Index,
    exact: true,
  },
  {
    __id: 'memberList',
    path: '/member',
    component: MemberList,
    dataProvider: 'memberList',
  },
  {
    __id: 'publicationList',
    path: '/publication',
    component: PublicationList,
    dataProvider: 'publicationList',
  },
  {
    __id: '404',
    path: '',
    component: NotFoundPage,
  }
]

export default routes