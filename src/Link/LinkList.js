import React, { Component } from 'react';
import Link from './Link';
import './LinkList.css';
import $ from 'jquery';

class LinkList extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  getInitialState() {
    return { data: null };
  }

  determineSource() {
    if (!this.props.source) return this.props.route.source;
    else return this.props.source;
  }

  determineType() {
    if (!this.props.type) return this.props.route.type;
    else return this.props.type;
  }

  componentDidMount() {
    var src = this.determineSource();
    var type = this.determineType();

    $.get('https://newsapi.org/v1/articles?source=' + src + '&sortBy=' + type + '&apiKey=75068dfcd79b413186fa380de6150f1e').done(function(data) {
      this.setState({data: data});
    }.bind(this));
  }

  render() {
    if(this.state.data){
      var data = this.state.data;
      var rows = [];
      for( var i = 0; i < data.articles.length; i++){
        rows.push(<Link key={i.toString()} article={data.articles[i]}></Link>)
      }
      return <div className="LinkList">{rows}</div>;
    }
    return (
      <div className="LinkList">
      </div>
    );
  }
}

export default LinkList
