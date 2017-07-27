import path from 'path'

import dataProvider from '../dataProvider'
import configuration from '../../../../configuration'

let publicationDetailProvider = query => new dataProvider({
  name: 'Publication detail',
  location: path.join(configuration.path.data, 'publications', `${query.id}.yaml`),
  init: true
});

export default publicationDetailProvider