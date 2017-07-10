import enhanceCollection from 'phenomic/lib/enhance-collection';
import React, {Component} from 'react';
import {pure} from 'recompact';
import PropTypes from 'prop-types';
import {Link} from 'phenomic';

import {Questions, Posts} from 'components';
import Page from 'layouts/Page';

import styles from './index.css';

class TopicPage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  };

  state = {
    currentQuestion: null,
    questions: [],
  };

  componentWillMount() {
    const {collection} = this.context;
    const questions = enhanceCollection(collection, {
      filter: content =>
        !!(content.question && content.subject === this.props.head.id),
    });

    this.setState({
      questions,
      currentQuestion: questions.length ? questions[0].id : null,
    });
  }

  setCurrentQuestion = id => {
    this.setState({currentQuestion: id});
  };

  render() {
    return (
      <Page {...this.props}>
        <div className={styles.path}>
          <Link className={styles.backButton1} to={'/knowledge'}>
            &lt; Back to Knowledge Base
          </Link>
          <Link className={styles.backButton2} to={'/knowledge'}>
            Knowledge Base
          </Link>
          <div className={styles.gt}>&gt;</div>
          <div className={styles.pathColored}>
            {this.props.head.title}
          </div>
        </div>
        <div className={styles.questions}>
          <Questions
            topic={this.props.head.id}
            setCurrentQuestion={this.setCurrentQuestion}
            questions={this.state.questions}
            currentQuestion={this.state.currentQuestion}
          />
          <Posts question={this.state.currentQuestion} />
        </div>
      </Page>
    );
  }
}

export default pure(TopicPage);
