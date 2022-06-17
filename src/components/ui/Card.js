import classes from './Card.module.css';

export default function Card(props) {
  return (
    <div
      className={classes.card}
      style={{
        height: props.height ? `${props.height}` : undefined,
        width: props.width ? `${props.width}` : undefined
      }}>
      {props.children}
    </div>
  );
}