import enhanceCollection from 'phenomic/lib/enhance-collection';
import React, {PropTypes} from 'react';
import cx from 'classnames';

import styles from './index.css';

const Questions = (
  {topic, setCurrentQuestion, questions, currentQuestion},
  {collection},
) => {
  const title = enhanceCollection(collection, {
    filter: {id: topic},
  });

  return (
    <div className={styles.questions}>
      <div>
        {title.length
          ? <div>
              {title.map(subject => (
                <div key={subject.title} className={styles.bigTitle}>
                  {subject.title}
                </div>
              ))}
            </div>
          : 'No questions yet.'}
      </div>
      {questions.length
        ? <div className={styles.list}>
            {questions.map((question, idx) => (
              <button
                key={question.id}
                className={styles.questionWrap}
                onClick={() => setCurrentQuestion(question.id)}
              >
                <div
                  className={cx(styles.numeration, {
                    [styles.questionSelected]: currentQuestion === question.id,
                  })}
                >
                  {idx + 1}.
                </div>
                <div className={styles.wrap}>
                  <div
                    className={cx(styles.question, {
                      [styles.questionSelected]: currentQuestion ===
                        question.id,
                    })}
                  >
                    {question.question}
                  </div>
                  <div
                    className={cx(styles.numberOfItems, {
                      [styles.questionSelected]: currentQuestion ===
                        question.id,
                    })}
                  >
                    {questions.length} items
                  </div>
                </div>
              </button>
            ))}
          </div>
        : 'No posts yet.'}
    </div>
  );
};

Questions.contextTypes = {
  collection: PropTypes.array.isRequired,
};

export default Questions;
