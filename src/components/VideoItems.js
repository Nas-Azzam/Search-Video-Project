import './VideoItem.css'
import React from 'react'

const VideoItems = ({ vid, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(vid)} className='item video-Item'>
      <img
        className='ui image'
        src={vid.snippet.thumbnails.medium.url}
        alt={vid.snippet.description}
      />
      <div className='content'>
        <div className='header'>{vid.snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItems
