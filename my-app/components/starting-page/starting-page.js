import classes from './starting-page.module.css';
import { useState, useEffect } from 'react';

function StartingPageContent() {
  const [animateLetters, setAnimateLetters] = useState(false);

  // Add animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateLetters(prevState => !prevState);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={classes.starting}>
      <span className={animateLetters ? classes.animated : ''}>
        <h1>Welcome on Board!</h1>
      </span>
    </section>
  );
}

export default StartingPageContent;
