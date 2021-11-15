import React from 'react'
import VideoItems from './VideoItems'

const VideoList = ({ videos }) => {
  // props.videos

  const renderVideoList = videos.map((vid) => {
    return <VideoItems vid={vid} />
  })

  return <div className='ui relaxed divided list'>{renderVideoList}</div>
}

export default VideoList
