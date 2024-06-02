import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    }
  })

  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1
    })
  }

  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positiveFeedback = Math.round((clicks.good / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(clicks));
  }, [clicks]);

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
      {totalFeedback > 0 && (<Feedback clicks={clicks} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />)}
      {totalFeedback === 0 && (<Notification/>)}
    </div>
  )
}

export default App
