import React, { useEffect, useCallback } from "react";
import {
  createSticker,
  deleteSticker,
  updateSticker,
  getStickersList,
} from "../services/Services";
import { HeaderStickers } from "./HeaderStickers";
import { StickersList } from "./StickersList";
import { useAsync } from "../hooks/Hooks";

export function StickerPage() {
  const {
    run,
    data: stickers,
    setData: setStickers,
    status,
  } = useAsync(getStickersList, []);

  useEffect(() => {
    run();
  }, []);

  const createNewSticker = useCallback(async () => {
    await createSticker();
    run();
  }, [run]);

  const onDelete = useCallback(
    async (id) => {
      await deleteSticker(id);
      run();
    },
    [run]
  );

  function saveNewInfo(Sticker) {
    updateSticker(Sticker);
  }

  return (
    <div>
      <HeaderStickers onAddButton={createNewSticker} />
      <StickersList
        stickers={stickers}
        onDelete={onDelete}
        onSave={saveNewInfo}
      />
    </div>
  );
}
