const sendApiData = (req, res, provider) => {
  res.setHeader("Content-Type", "application/json");
    
  if(provider.data.error)
    res.status(500).send(provider.dataString);
  else
    res.send(provider.dataString);
}


export default sendApiData