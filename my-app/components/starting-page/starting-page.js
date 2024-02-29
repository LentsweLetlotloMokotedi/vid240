import classes from './starting-page.module.css';

function StartingPageContent() {
  // Show Link to Login page if NOT auth

  return (
    <section className={classes.starting}>
      <span><h1>Welcome on Board!</h1></span>
    </section>
  );
}

export default StartingPageContent;
