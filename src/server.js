import react from 'react';
import  { renderToString } from 'react-dom/server';
import express from 'express';
import Restaurant from './components/Restaurant';

const app = express()
 
app.get('/', (req, res) => {
  const content = renderToString(<Restaurant />);

  res.send(content);
})
 
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
