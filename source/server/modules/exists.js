import fs from 'fs'

const exists = (location) => {
  try { fs.statSync(location) } catch(e) { return false }
  return true
}

export default exists