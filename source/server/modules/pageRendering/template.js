const template =  ({ body, helmet, initialState }) => {
  return `
    <!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
        <link rel="stylesheet" href="/assets/bundle.css">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${helmet.script.toString()}
      </head>
      
      <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${body}</div>
        <script>window.__initialState = ${initialState};</script>
        <script type="text/javascript" src="/assets/bundle.js"></script>
      </body>
    </html>
  `;
};

export default template;
