import path from 'path'

import dataProvider from '../dataProvider'
import configuration from '../../../../configuration'

let journalListProvider = new dataProvider({
  name: 'Journal list',
  location: path.join(configuration.path.data, 'configurations', 'journals.yaml'),
  init: true,
  watch: true
});

export default journalListProvider