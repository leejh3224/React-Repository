import React, {Component} from 'react';
import SearchInput from 'grommet/components/SearchInput';
import '../css/SearchTab.css';

class SearchTab extends Component {
  constructor(props){
    super(props);
    this.state = {
      value : ""
    };
  }

  handleChange = (value) => {
    this.setState({value});
    this.props.onValueChange(value);
  }

  getArray = (obj) => {

    let arr = [];

    for(var i = 0; i < obj.length; i++){
      arr.push(obj[i].title);
    };

    return arr;
  }

  render(){

    return(
      <div className="searchBar">
        <SearchInput
            placeHolder='Search'
            value={this.state.value}
            onDOMChange={event => this.handleChange(event.target.value)}
            suggestions={this.getArray(this.props.pages)}
            dropAlign={{"top": "bottom"}}
            onSelect={({target, suggestion}, selected) => {
              this.handleChange(suggestion);
            }}
        />
      </div>
    );
  }
}

export default SearchTab;
