import React from 'react';
import styles from './Quiz.module.scss';
import classnames from 'classnames';
import { ProgressBar } from './ProgressBar/ProgressBar';
import { Result } from './Result/Result';
import { BarFinished } from './BarFinished/BarFinished';

export const QuizDom = (props: any) => {
  const heightQuiz = window.innerHeight - 115;
  return (
    <div className={styles.wrapper}>
      {
        props.quiz && <ProgressBar answers={props.answers} quiz={props.quiz} />
      }
      <div className={classnames(styles.content, { [styles.hide]: props.hidePrevImage })}>
        {!props.isMobile && props.quiz && props.step < props.quiz.questions.length &&
          <div className={styles.barFinished} style={{ height: heightQuiz }}>
            <BarFinished side={'left'} answers={props.answers} />
          </div>}
        {
          props.quiz && props.step < props.quiz.questions.length && <div style={{ height: heightQuiz }}
            className={classnames(styles.quiz, { [styles.inactive]: props.inactiveButtons, [styles.isMobile]: props.isMobile })}>
            <div className={styles.imageWrap}>
              <img src={props.quiz.questions[props.step].image}
                className={styles.image}></img>
            </div>
            <div className={styles.questions}>
              {
                props.quiz.questions[props.step].options.map((el: any, i: number) => {
                  return <div className={styles.question} key={i}
                    onClick={() => props.checkAnswerFunc(el.name, props.step, i, props.quiz.questions[props.step].image)}>
                    {el.title}</div>
                })
              }
            </div>
          </div>
        }
        {!props.isMobile && props.quiz && props.step < props.quiz.questions.length &&
          <div className={styles.barFinished} style={{ height: heightQuiz }}>
            <BarFinished side={'right'} answers={props.answers} />
          </div>}
        {
          props.quiz && props.step === props.quiz.questions.length && (
            <div className={styles.resultWrap}>
            <Result answers={props.answers} quiz={props.quiz} />
            </div>
          )
        }
      </div>
    </div>
  )
}