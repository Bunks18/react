import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match} from 'react-router';


import App from './components/App';


//import css
import './css/style.css';
//import component
import StorePicker from './components/StorePicker';


const Root = () => {
  return(
    <BrowserRouter>
    <div>
      <Match exactly pattern="/" component={StorePicker} />
      <Match exactly pattern="/store/:storeId" component={App} />

    </div>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector('#main'));