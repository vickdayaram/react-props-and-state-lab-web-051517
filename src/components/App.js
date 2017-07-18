import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  updateFilterTypeState = (value) =>{
    this.setState({
      filters: {
        ...this.state.filters,
        type: value
      }
    })
  }


  updatePetID = (value) =>{
    this.setState({
      adoptedPets: [...this.state.adoptedPets, value]
    })
  }



  fetchPets = () => {
    let url = ""
      if(this.state.filters.type === 'all'){
      url = "/api/pets"
      } else {
        url = "/api/pets?type=" + this.state.filters.type
      }
    fetch(url)
    .then(res => res.json())
    .then(json => json)
  }



  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.updateFilterTypeState} onFindPetsClick={this.fetchPets} filters={this.state.filters}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.updatePetID}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
