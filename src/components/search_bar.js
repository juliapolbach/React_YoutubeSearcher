import React, {Component} from 'react';


// class based component
class SearchBar extends Component {
  constructor(props){
    super (props);

    this.state = { term: '' };
  }

  render () {
    return (
      <div>
        <input onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

// functional component

// const SearchBar = () => {
//   return <input />;
// }

export default SearchBar;
