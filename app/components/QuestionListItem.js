/**
 * Created by jwdn on 2016/12/9.
 */
import React, { Component } from 'react';

class  QuestionListItem extends Component {
  constructor(props){
    super(props);
  }
  addHandleClick(e) {
    this.props.vote(1);
    e.preventDefault();
    e.stopPropagation();
  }
  reduceHandleClick(e) {
    this.props.vote(-1);
    e.preventDefault();
    e.stopPropagation();
  }
  render() {
    return (
        <div className="media">
          <div className="media-left">
            <button className="btn btn-default" onClick={this.addHandleClick.bind(this)}>
              <span className="glyphicon glyphicon-chevron-up"> </span>
              <span className="vote-count">{ this.props.value.voteCount }</span>
            </button>
            <button className="btn btn-default" onClick= { this.reduceHandleClick.bind(this) }>
              <span className="glyphicon glyphicon-chevron-down"></span>
            </button>
          </div>
          <div className="media-body">
            <h4 className="media-heading">{ this.props.value.title }</h4>
            <p>{ this.props.value.description }</p>
          </div>
        </div>
    );
  }
}
export default QuestionListItem;
