import React, { Component } from 'react'

export class SearchBar extends Component {
  state = { input: '' }

  OnInputChange = (e) => {
    this.setState({ input: e.target.value })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state.input)
    // make sure we call and callback drom paren component
    this.props.onFormSubmit(this.state.input)
  }

  render() {
    return (
      <div className='search-bar ui segment'>
        {/* when for submit */}
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Search for Video</label>
            <input
              type='search'
              value={this.state.input}
              placeholder='Search for Video'
              onChange={this.OnInputChange}
            ></input>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
