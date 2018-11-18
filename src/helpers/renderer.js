import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import Restaurant from '../components/Restaurant';

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <Restaurant />
    </Provider>
  );

  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
  `;
}
