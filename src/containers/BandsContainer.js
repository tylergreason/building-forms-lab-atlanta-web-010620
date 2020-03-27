import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  state = {
    bands:[]
  }

  renderBands = (bands, index) => {
    return bands.map(band => <li key={index}>{band.name}</li>)
  }


  render() {
    return(
      <div>
        <BandInput 
          addBand={this.props.addBand}
          />
          {this.renderBands(this.props.bands)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands:state.bands
  }
}

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
