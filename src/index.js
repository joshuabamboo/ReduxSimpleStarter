import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoListItem from './components/video_list_item'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyCPxpFdZzZ1xG1flsfrRZrn96SoL4YyvJo'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('lil uzi vert')
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
        videos: videos, 
        selectedVideo: videos[0]
      })
    })
  }

  render(){
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoList 
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        />
        <VideoDetail video={this.state.selectedVideo}/> //note: prop name has to match prop name in corresponding component
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))


// functional component example
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   )
// }