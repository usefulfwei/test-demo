/**
 * Created by jwdn on 2016/12/9.
 */
import React, { Component } from 'react';
import QuestionListItem from './QuestionListItem';
import QuestionForm from './QuestionForm';
import QuestionsData from '../data/QuestionsData.json';

class QuestionsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      QuestionsData: QuestionsData,
      showQuestionForm: false
    }
  }
  saveQuestion(newQuestion) {
    newQuestion.id = this.state.QuestionsData.length+1;
    let QuestionsData = this.state.QuestionsData.concat(newQuestion);
    this.setState({
      QuestionsData: QuestionsData,
      showQuestionForm:false
    })
  }
  handleClick() {
    console.log('click');
    this.setState({
      showQuestionForm: !this.state.showQuestionForm
    });
  }
  vote(index) {
    return (operation) => {
      let QuestionsData = this.state.QuestionsData;
      QuestionsData[index].voteCount += operation;
      QuestionsData = this.sortVote(QuestionsData);
      this.setState({
        QuestionsData: QuestionsData
      })
    }
  }
  hideQuestionForm() {
    this.setState({
      showQuestionForm: false
    })
  }
  sortVote(QuestionsData) {
    QuestionsData.sort((a,b)=>{
      return b.voteCount - a.voteCount;
    })
    return QuestionsData;
  }
  render() {
    let QuestionLists = [],
        QuestionsData = this.state.QuestionsData;
    QuestionsData.forEach((value,key) => {
      QuestionLists.push(<QuestionListItem key={key} value={value} vote={this.vote(key)} />)
    })
    return (
        <div>
          <div className="jumbotron text-center">
            <div className="container">
              <h1>React Questions & Answers</h1>
              <button id="add-question-btn" className="btn btn-success" onClick={this.handleClick.bind(this)}>添加问题</button>
            </div>
          </div>
          <div className="main container">
            <QuestionForm shown={this.state.showQuestionForm} saveQuestion={this.saveQuestion.bind(this)} hideQuestionForm={ this.hideQuestionForm.bind(this)}/>
            <div id="questions">
              {QuestionLists}
            </div>
          </div>
        </div>
    )
  }
}
export default QuestionsApp;