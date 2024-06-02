import css from './Feedback.module.css';

const Feedback = ({ clicks, totalFeedback, positiveFeedback }) => {
    return (
        <div>
                <ul className={css.feedbackContainer}>
                    <li><p>Good: {clicks.good}</p></li>
                    <li><p>Neutral: {clicks.neutral}</p></li>
                    <li><p>Bad: {clicks.bad}</p></li>
                    <li><p>Total: {totalFeedback}</p></li>
                    <li><p>Positive: {positiveFeedback}%</p></li>
                </ul>
        </div>
    )
};

export default Feedback;