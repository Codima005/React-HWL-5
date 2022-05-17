import React, { useState } from "react";

export function Sticker({ item, onDelete, onSave }) {
  const [description, setDescription] = useState(item.description);

  function onChangeDescription(e) {
    setDescription(e.target.value);
  }

  function onDescriptionSave() {
    onSave({ ...item, description });
  }

  return (
    <div style={stickerStyles}>
      <textarea
        value={description}
        onChange={onChangeDescription}
        onBlur={onDescriptionSave}
      ></textarea>
      <span style={deleteBtnStyles} onClick={() => onDelete(item.id)}>
        x
      </span>
    </div>
  );
}

const deleteBtnStyles = {
  cursor: "pointer",
  float: "right",
  fontWeight: "bold",
};

const stickerStyles = {
  width: "200px",
  height: "200px",
  border: "1px solid black",
  backgroundColor: "lightyellow",
  float: "left",
};
