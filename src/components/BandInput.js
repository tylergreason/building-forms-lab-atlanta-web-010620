// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {
  state = {
    name:''
  }

  handleInput = e => {
    this.setState({
      name:e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    this.props.addBand(this.state)
    this.setState({
      name:''
    })
  }

  render() {
    return(
      <div>
        <form
          onSubmit={(e) => this.handleSubmit(e)}
          >
          <input 
            type='text'
            value={this.state.name}
            onChange={(e) => this.handleInput(e)}
          />
          <input type="submit" />

        </form>
        Band Input
      </div>
    )
  }
}
const mapStateToProps = state =>{
  return {
      bands: state.bands
  }
}

// export default connect(mapStateToProps)(BandInput)
export default BandInput
