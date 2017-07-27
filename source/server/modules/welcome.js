import clear from 'clear'
import colors from 'colors/safe'

const asiciiArt = `
             ____________________                 
            / ___/ ___/_  __/ __ \\____ _____ ____ 
            \\__ \\\\__ \\ / / / /_/ / __ \`/ __ \`/ _ \\
           ___/ /__/ // / / ____/ /_/ / /_/ /  __/
          /____/____//_/ /_/    \\__,_/\\__, /\\___/
                                     /____/    
`
const AuthorInfo = `
  SSTPage application, developed by Losses Don from Losses Territory Studio.
  Contact me at admin@qzworld.net.
==============================================================================
`

clear()
console.log(colors.green(asiciiArt))
console.log(colors.green(AuthorInfo))
