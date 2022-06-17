import classes from './Layout.module.css';

export default function Layout(props) {
  return (
    <div>
      <main className={classes.main}>
        {props.children}
      </main>
    </div>
  );
}