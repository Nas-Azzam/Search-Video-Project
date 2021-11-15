import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../Api/YoutubeApi'

const KEY = 'AIzaSyCN6e98GjAfa_d4E4mISSn8uCP6g5b1DvE'

export class App extends Component {
  state = { videos: [] }
  onInputSubmit = async (input) => {
    const response = await youtube.get('/search', {
      params: {
        q: input,
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        key: KEY,
      },
    })
    //   console.log(response)
    //   console.log(this.state.videos)
    this.setState({ videos: response.data.items })
  }
  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onInputSubmit} /> I have
        {this.state.videos.length} Videos.
      </div>
    )
  }
}

export default App
// AIzaSyCYRad2cwXgMqJS1rB5 - nhwknNir9O5f10
