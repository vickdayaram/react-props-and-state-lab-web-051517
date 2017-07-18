import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map(petdata =>
          < Pet
          pet={petdata}
          onAdoptPet={this.props.onAdoptPet}
          isAdopted={this.props.adoptedPets.includes(petdata.id)}
          />)}
      </div>
    );
  }
}

export default PetBrowser;
