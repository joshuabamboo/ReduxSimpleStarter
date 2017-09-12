import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => { // equivalent to const video = props.video
  const videoUrl = video.snippet.thumbnails.default.url
  return (
    <li onClick={ () => onVideoSelect(video)} className='list-group-item'>
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={videoUrl} />
        </div>
        <div className='media-body'>
          <div className='media-heading'>
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  )
}

// why does {video} error when using class Component but works fine above?
// TypeError: Cannot read property 'video' of undefined
// class VideoListItem extends React.Component {
//   render({video}){ // equivalent to const video = props.video
//     return (
//       <li className='list-group-item'>
        
//       </li>
//     )
//   }
// }


export default VideoListItem