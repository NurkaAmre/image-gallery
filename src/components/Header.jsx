import React from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  const { count, onDeleteImages } = props;
  if (count <= 0) {
    return (
      <header className={classes.header}>
        <h1>Gallery</h1>
      </header>
    );
  }

  return (
    <header className={classes.header}>
      <h1>
        <input type="checkbox" checked height="24" width="24" readOnly />
        {count} {count > 1 ? "Files Selected" : "File Selected"}
      </h1>
      <button type="button" onClick={onDeleteImages}>
        {count > 1 ? "Delete files" : "Delete file"}
      </button>
    </header>
  );
};

export default Header;
