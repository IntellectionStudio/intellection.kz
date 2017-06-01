import React, {Component} from 'react';
import parser from 'rss-parser';

import Page from 'layouts/Page';

import styles from './index.css';

class BlogPage extends Component {
  props;

  state = {
    posts: [],
  };

  componentDidMount() {
    parser.parseURL('https://medium.com/feed/@jonwestenberg', (err, parsed) => {
      this.setState({posts: parsed.feed.entries});
    });
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
            : 'No posts yetf'}
        </div>
      </Page>
    );
  }
}

export default BlogPage;
