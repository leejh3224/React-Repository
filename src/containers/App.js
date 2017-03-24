import React, {Component} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import SearchTab from '../components/SearchTab';
import PageList from '../components/PageList';
import '../css/App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      pages : []
    }
  }

  handleValueChange = (value) => {
    let url = `https://en.wikipedia.org/w/api.php?action=query&format=json&
        maxlag=2&origin=*&prop=info%7Cextracts&titles=${value}&
        generator=allpages&utf8=1&formatversion=2&inprop=url&exsentences=3&
        exlimit=5&exintro=1&explaintext=1&exsectionformat=plain&
        gapprefix=${value}&gaplimit=20`,
        page;

        axios.get(url).then((response) => {
            page = response.data.query.pages;
            this.setState({ pages : page });
            console.log('gettingData');
        }).catch((e) => {
            console.log('error happened', e);
        });
    }

  render(){
    return(
      <div className="app">
        <Header />
        <SearchTab
            onValueChange={this.handleValueChange}
            pages={this.state.pages} />
        <PageList
            pages={this.state.pages} />
      </div>
    );
  }
};

export default App;
