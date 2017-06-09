import enhanceCollection from 'phenomic/lib/enhance-collection';
import {pure} from 'recompact';
import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import {Link} from 'phenomic';

import {Image} from 'components';

import styles from './index.css';

const Posts = ({question}, {collection}) => {
  const posts = enhanceCollection(collection, {
    filter: contents => contents.questionId === question,
  });

  return (
    <div className={styles.mainDiv}>
      {posts.length
        ? <div className={styles.posts}>
            {posts.map(post => (
              <div key={post.title} className={styles.post}>
                {post.image &&
                  <div>
                    <Image
                      className={styles.postImage}
                      name={post.image}
                      background
                    />
                    <div className={styles.postTitle}>{post.title}</div>
                    <div className={styles.postText}>{post.description}</div>
                  </div>}
                {post.video &&
                  <div>
                    <ReactPlayer
                      url={post.video}
                      className={styles.postVideo}
                      controls
                      width="100%"
                      height="240px"
                    />
                    <div className={styles.postTitle}>{post.title}</div>
                    <div className={styles.postText}>{post.description}</div>
                  </div>}
                {post.link &&
                  <div>
                    <div className={styles.linkContainer}>
                      <Image
                        className={styles.postLinkImage}
                        name={post.linkImage}
                        background
                      />
                      <Link
                        className={styles.postLinkButton}
                        to={post.link}
                        target="_blank"
                      >
                        ОТКРЫТЬ
                      </Link>
                    </div>
                    <div className={styles.postTitle}>{post.title}</div>
                    <div className={styles.postText}>{post.description}</div>
                  </div>}
                {post.text &&
                  <div>
                    <div className={styles.postTitle}>{post.title}</div>
                    <div className={styles.postText}>{post.description}</div>
                  </div>}
              </div>
            ))}
          </div>
        : 'No posts yett.'}
    </div>
  );
};

Posts.contextTypes = {
  collection: PropTypes.array.isRequired,
};

export default pure(Posts);
