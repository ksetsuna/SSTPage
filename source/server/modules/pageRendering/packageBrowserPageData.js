const packageBrowserPageData = (pageData) => {
  let string
  
  string = Object.keys(pageData)
                 .map(key => `"${key}":${pageData[key]}`)
                 .join()

  return `{${string}}`
}

export default packageBrowserPageData