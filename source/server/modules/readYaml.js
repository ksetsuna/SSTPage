import fs from 'fs'
import { safeLoad } from 'js-yaml'

const readYaml = (location) => {
  let data, rawData, resolvedData;

  try { fs.statSync(location) } catch(e) { return {error: 'File not exists.'} }

  try { rawData = fs.readFileSync(location, 'utf8') } catch (e) { return {error: e.message} }

  try { data = safeLoad(rawData) } catch (e) { return {error: `Can't resolve ${location}.`}}
  
  return data
}

export default readYaml