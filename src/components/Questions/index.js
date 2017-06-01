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

  let int = 0;

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
            {questions.map(question => (
              <button
                key={question.questionWrap}
                className={styles.questionWrap}
                onClick={() => setCurrentQuestion(question.id)}
              >
                <div
                  key={question.numeration}
                  className={cx(styles.numeration, {
                    [styles.questionSelected]: currentQuestion === question.id,
                  })}
                >
                  {(int += 1)}.
                </div>
                <div key={question.question1} className={styles.wrap}>
                  <div
                    key={question.question}
                    className={cx(styles.question, {
                      [styles.questionSelected]: currentQuestion ===
                        question.id,
                    })}
                  >
                    {question.question}
                  </div>
                  <div
                    key={question.question2}
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
