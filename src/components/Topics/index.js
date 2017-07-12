import enhanceCollection from 'phenomic/lib/enhance-collection';
import {pure} from 'recompact';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Measure from 'react-measure';
import {Link} from 'phenomic';

import {Image} from 'components';

import Topic from '../Topic';
import styles from './index.css';

const BREAKPOINT = 768;

class Topics extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  };

  state = {
    fullClickable: false,
  };

  renderTopicTableCell = topics => {
    if (topics.length !== 0) {
      return (
        <div className={styles.knowledgeTopicTable}>
          {topics.map(
            topic =>
              this.state.fullClickable
                ? <Link key={`${topic.title}Full`} to={topic.__url}>
                    <div className={styles.cellSquare}>
                      <Image
                        className={styles.cellImage}
                        name={topic.image}
                        alt={topic.title}
                      />
                      <div className={styles.textWrapper}>
                        <h4 className={styles.cellTitle}>
                          {topic.title}
                        </h4>
                        <p className={styles.cellText}>
                          {topic.about}
                        </p>
                      </div>
                      <button className={styles.button}>ПОДРОБНЕЕ</button>
                    </div>
                  </Link>
                : <div key={`${topic.title}NotFull`}>
                    <div className={styles.cellSquare}>
                      <Link to={topic.__url}>
                        <Image
                          className={styles.cellImage}
                          name={topic.image}
                          alt={topic.title}
                        />
                      </Link>
                      <div className={styles.textWrapper}>
                        <Link to={topic.__url}>
                          <h4 className={styles.cellTitle}>
                            {topic.title}
                          </h4>
                        </Link>
                        <p className={styles.cellText}>
                          {topic.about}
                        </p>
                      </div>
                      <Link to={topic.__url} className={styles.button}>
                        ПОДРОБНЕЕ
                      </Link>
                    </div>
                  </div>,
          )}
        </div>
      );
    }
    return <div>No posts yet.</div>;
  };

  render() {
    const topics = enhanceCollection(this.context.collection, {
      filter: {layout: 'TopicPage'},
    });
    return (
      <div className={styles.mainDiv}>
        <Image
          className={styles.hero}
          name={'knowledgebase-main.jpg'}
          background
          alt="knowledge main background"
        >
          <div className={styles.heroTextWrapper}>
            <h1 className={styles.heroTitle}>Ресурсы</h1>
            <p className={styles.heroText}>
              Мы не боимся делиться нашими знаниями. Здесь мы собрали для вас
              полезные ссылки из разных источников и отсортировали по темам,
              которые нас интересуют.
            </p>
          </div>
        </Image>
        <div>
          {topics.length
            ? <div className={styles.featuredTopics}>
                {topics.filter(topic => topic.featured).map(topic =>
                  <Link key={topic.title} to={topic.__url}>
                    <div className={styles.featuredTopic}>
                      <Image
                        className={styles.featuredTopicImage}
                        name={topic.image}
                        background
                        alt={topic.title}
                      />
                      <Topic {...topic} />
                    </div>
                  </Link>,
                )}
              </div>
            : 'No posts yet.'}
        </div>
        <Measure
          onMeasure={({width}) =>
            width < BREAKPOINT
              ? this.setState({fullClickable: true})
              : this.setState({fullClickable: false})}
        >
          <div className={styles.knowledgeTopicTableFrame}>
            {this.renderTopicTableCell(topics)}
          </div>
        </Measure>
      </div>
    );
  }
}

export default pure(Topics);
