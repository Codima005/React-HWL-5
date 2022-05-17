import React from "react";
import { Sticker } from "./Sticker";

export function StickersList({ stickers, onDelete, onSave }) {
  console.log(stickers);
  return (
    <div>
      {stickers.map((data) => {
        return (
          <Sticker
            key={data.id}
            item={data}
            onDelete={onDelete}
            onSave={onSave}
          />
        );
      })}
    </div>
  );
}
