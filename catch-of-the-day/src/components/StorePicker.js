import React from 'react';
import {getFunName }from '../helpers';

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  //go to store
  goToStore(event){
    event.preventDefault();
    const storeId = this.storeInput.value;
    console.log(this.storeInput.value);
        //first grab the text from the box

    //transition from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`);
  }


  //each component needs at least one method
  render() {
    //you can only ever return one parent element
      return(
        <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please enter a store</h2>
        <input ref={(input) => { this.storeInput = input}} type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
        <button type="submit">Visit Store -></button>
        
        </form>
      )
  }
}


//tell react that the storepicker component is expecting a router
StorePicker.contextTypes= {
  router: React.PropTypes.object
}

export default StorePicker;