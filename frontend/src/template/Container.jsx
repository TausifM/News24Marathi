import React from "react";

const Container = (props) => {
  const nodeRef = React.createRef();

  const classes = "container " + props.className;
  return (
    <div className={classes} ref={nodeRef}>
      {props.children}
    </div>
  );
};

export default Container;
