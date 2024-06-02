import css from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
    return (
        <div className={css.optionsContainer}>
            <button className={css.optionButton} onClick={() => updateFeedback("good")}>Good</button>
            <button className={css.optionButton} onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button className={css.optionButton} onClick={() => updateFeedback("bad")}>Bad</button>
            {totalFeedback > 0 && (<button className={css.optionButton} onClick={() => resetFeedback()}>Reset</button>)}
        </div>
    )

};

export default Options;