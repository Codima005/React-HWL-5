import React from "react";

export function HeaderStickers({ onAddButton }) {
  return (
    <header style={headerStyles}>
      YOUR STICKERS APP
      <button onClick={onAddButton}>Create sticker</button>
    </header>
  );
}

const headerStyles = {
  backgroundColor: "#282c34",
  textAlign: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white",
};
