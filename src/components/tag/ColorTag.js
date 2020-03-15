import {makeStyles} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    position: 'relative',
    fontWeight: 'bold',
    boxSizing: 'border-box',
    paddingLeft: 10,
    fontSize: 17,
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 5,
    height: 50,
    width: 290,
    background: (item) => randomColor(item.id),
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 3px 0px',
  },
  count: {
    position: 'absolute',
    right: '10px'
  }
});
const randomColor = (id) => {
  const color = [
    "#BE84D7,#F2DAFF",
    "#8376ED,#BE84D7",
  ];
  id = (id - 1) % color.length;
  return `linear-gradient(135deg, ${color[id]})`;
};


export default function ColorTag(item) {
  const classes = useStyles(item);
  return <div className={classes.root}>
    <span>
      {item.name}
    </span>
    <span className={classes.count}>
     ({item.count})
    </span>

  </div>;
}
