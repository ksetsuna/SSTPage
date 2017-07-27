import path from 'path'

import dataProvider from '../dataProvider'
import configuration from '../../../../configuration'

let memberListProvider = new dataProvider({
  name: 'Member list',
  location: path.join(configuration.path.data, 'members'),
  init: true,
  watch: true
});

export default memberListProvider