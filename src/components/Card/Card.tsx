import cn from "classnames";

import classes from "./Card.module.scss";

type PropsType = {
  size?: "xs" | "lg";
  children?: any;
  className?: string;
  isWhite?: boolean;
}

const Card = ({ size, children, className, isWhite = true }: PropsType) => {
  return (
    <div className={cn(className, classes.card, { [classes.xs]: size === "xs", [classes.lg]: size === "lg", [classes.isWhite]: isWhite })}>
      {children}
    </div>
  )
}

export default Card;