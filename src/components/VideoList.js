import React from 'react'
import VideoItems from './VideoItems'

const VideoList = ({ videos, onVideoSelect }) => {
  // props.videos

  const renderVideoList = videos.map((vid) => {
    return (
      <VideoItems
        key={vid.id.videoId}
        onVideoSelect={onVideoSelect}
        vid={vid}
      />
    )
  })

  return <div className='ui relaxed divided list'>{renderVideoList}</div>
}

export default VideoList
