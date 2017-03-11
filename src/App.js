import React, { Component } from 'react';
import LinkList from './Link/LinkList';

class App extends Component {
  render() {
      return (
        <div className="Newspage">
          <div id="check">
            <div id="side"><LinkList source={'bbc-news'} type="top"></LinkList></div>
          </div>
        </div>
      );
    }
}

export default App;
