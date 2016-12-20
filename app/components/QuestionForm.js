/**
 * Created by jwdn on 2016/12/9.
 */
import React, { Component } from 'react';

class QuestionForm extends Component {
  constructor(props){
    super(props)
  }
  handleSubmit(e) {
    let newQuestion = {
      title: this.refs.qtitle.value,
      description: this.refs.qdesc.value,
      voteCount: 0
    };
    this.refs.qtitle.value = '';
    this.refs.qdesc.value = '';
    if(!newQuestion.title) return;
    this.props.saveQuestion(newQuestion);
    e.preventDefault();
    e.stopPropagation();
  }
  render() {
    var styleObj = {
      "display": this.props.shown ? 'block' : 'none'
    };
    var styleDesc = {
      "marginRight": -9, "width": 770, "height": 74
    };
    console.log(styleObj);
    return (
        <div name="addQuestion" className="clearfix questionForm" style={ styleObj }>
          <div className="form-group">
            <label htmlFor="qtitle">问题</label>
            <input type="text" className="form-control" id="qtitle" placeholder="您的问题的标题" ref="qtitle"/>
          </div>
          <textarea className="form-control" rows="3" placeholder="问题的描述" style={styleDesc} ref="qdesc"></textarea>
          <button className="btn btn-success pull-right" onClick={ this.handleSubmit.bind(this)}>提交</button>
          <button className="btn btn-default pull-right" onClick={ this.props.hideQuestionForm }>取消</button>
        </div>
    )
  }
}
export default QuestionForm;