/* @flow */

import React, {Component} from 'react';
import parser from 'rss-parser';

import Page from 'layouts/Page';
import type {PostType} from 'types';

import styles from './index.css';

type BlogPageOwnPropsType = PhenomicPagePropsType;
type BlogPageStateType = {|
  posts: Array<PostType>,
|};

class BlogPage extends Component {
  props: BlogPageOwnPropsType;

  state: BlogPageStateType = {
    posts: [],
  };

  componentDidMount() {
    parser.parseURL(
      'https://medium.com/feed/@jonwestenberg',
      (err: Error, parsed: {feed: {entries: Array<PostType>}}) => {
        this.setState({posts: parsed.feed.entries});
      },
    );
  }

  render() {
    return (
      <Page {...this.props}>
        <div className={styles.container}>
          {this.state.posts.length
            ? <li className={styles.list}>
                {this.state.posts.map(post => (
                  <li key={post.title}>
                    <a href={post.link}>
                      {post.title}
                    </a>
                  </li>
                ))}
              </li>
            : 'No posts yet'}
        </div>
      </Page>
    );
  }
}

export default BlogPage;
