import classes from './Loading.module.css';
import Spinner from './ui/Spinner';

export default function Loading() {
  return (
    <div className={classes.loading}>
      <div className={classes.fill}/>
      <div className={classes.text}>
        <p>Reading data...</p>
      </div>
      <div className={classes.spinner}>
        <Spinner />
      </div>
    </div>
  );
}