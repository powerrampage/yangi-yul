import classes from "./Head.module.scss";

const Head = ({ children }: { children: any }) => {
  return <div className={classes.wrapper}>{children}</div>;
};

export default Head;
