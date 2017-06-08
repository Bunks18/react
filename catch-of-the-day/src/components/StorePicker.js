import React from 'react';
import {getFunName }from '../helpers';

class StorePicker extends React.Component {
  //each component needs at least one method
  render() {
    //you can only ever return one parent element
      return(
        <form className="store-selector">
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
        <button type="submit">Visit Store -></button>
        
        </form>
      )
  }
}

export default StorePicker;