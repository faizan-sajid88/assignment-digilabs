import React, { Component } from 'react';

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to 
// keep file size down
import { CountryDropdown, RegionDropdown, } from 'react-country-region-selector';


class Location extends Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }

  render () {
    const { country, region } = this.state;
    return (
      <div className='location-component'>
        <CountryDropdown
        classes='country-select'
          value={country}
          onChange={(val) => this.selectCountry(val)} />
        <RegionDropdown
        classes='city-select'
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)} />
      </div>
    );
  }
}
export default Location