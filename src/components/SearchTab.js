import React, {Component} from 'react';
import Search from 'grommet/components/Search';
import '../css/SearchTab.css';

class SearchTab extends Component {
  constructor(props){
    super(props);
    this.state = {
      value : ''
    };
  }

  handleChange = (value) => {
    this.setState({value});
    this.props.onValueChange(value);
  }

  toArray = (obj) => {
    var arr = [];
    for(var i in obj){
      arr.push(this.props.pages[i].title);
    };
    return arr;
  }

  render(){
    const BoxStyle = {
      width: '18vw',
      height: '14.9vh',
      float: 'right',
      verticalAlign: 'middle',
      backgroundColor: '#463366',
      color: '#ffffff'
    };

    return(
      <div className="searchBar">
        <Search placeHolder='Search'
        inline={true}
        iconAlign='start'
        size='large'
        value={this.state.value}
        onDOMChange={event => this.handleChange(event.target.value)}
        suggestions={this.toArray(this.props.pages)}
        dropAlign={{"top": "bottom"}}
        onSelect={({target, suggestion}, selected) => {
          this.handleChange(suggestion);
        }}
        className="search"
        />
      </div>
    );
  }
}

export default SearchTab;
