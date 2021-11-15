import './VideoItem.css'
import React from 'react'

const VideoItems = ({ vid }) => {
  return (
    <div className='item video-Item'>
      <img className='ui image' src={vid.snippet.thumbnails.medium.url} />
      <div className='content'>
        <div className='header'>{vid.snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItems
