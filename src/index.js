import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC8o747y18hH9eIlly1s8tWExIsOMfrb-g';

class App extends Component {
  constructor(props){
    super (props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

    this.videoSearch('Rick & Morty');

  }

  videoSearch(term){
    YTSearch({key:API_KEY, term : term}, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    //throlling
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Paint component into de DOM

ReactDOM.render(<App />, document.querySelector('.container'));
