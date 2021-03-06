import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import SampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
  constructor(){
    super();

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    
    this.state = {
      fishes: {},
      order: {}
    }
  }


  addFish(fish){
    //update our state
    //make a copy
    const fishes = {...this.state.fishes};
    //add in our new fish
    const timestamp = Date.now();
    //ask emmanuel, about this line
    fishes[`fish-${timestamp}`] = fish;
    //set state
    this.setState({ fishes })
  }

  loadSamples(){
    this.setState({
      fishes: SampleFishes
    });
  }
  render(){
    return(
      <div className="catch-of-the-day">
        <div className="menu">
        <Header tagline="Anything else" />
        <ul className="list-of-fishes">
        {Object.keys(this.state.fishes)
          .map(key => <Fish key={key} details={this.state.fishes[key]} />)
        }
        </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;