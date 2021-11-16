import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../Api/YoutubeApi'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

const KEY = 'AIzaSyDms4HG3XRKAjSJoR3wsLoUwuazQ8tRbLk'

export class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.onSelectVideo = this.onSelectVideo.bind(this)
  // }
  state = { videos: [], selectedVideo: '' }

  componentDidMount() {
    this.onInputSubmit(Math.random().toString(36).substr(2, 5))
  }

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
    // console.log(response)
    //   console.log(this.state.videos)
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    })
  }

  onVideoSelect = (videos) => {
    // this.setState({ selectedVideo: videos })
    this.setState({ selectedVideo: videos })
  }
  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onInputSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column ui'>
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
// AIzaSyCYRad2cwXgMqJS1rB5 - nhwknNir9O5f10
