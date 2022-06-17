import Card from "./ui/Card";

import classes from './Loading.module.css';

export default function Loading() {
  return (
    <div>
      <Card classname={classes.card}>
        Tallying votes...
      </Card>
    </div>
  );
}