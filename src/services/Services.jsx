const URL = "https://6273b87f3d2b510074209c14.mockapi.io/api/contacts/";

export async function getStickersList() {
  const result = await fetch(URL);
  const data = await result.json();
  return data;
}

export async function createSticker() {
  const EMPTY_STICKER = {
    description: "",
  };

  const result = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(EMPTY_STICKER),
    headers: { "Content-Type": "application/json" },
  });
  const data = await result.json();
  return data;
}

export async function updateSticker(Sticker) {
  const result = await fetch(URL + Sticker.id, {
    method: "PUT",
    body: JSON.stringify(Sticker),
    headers: { "Content-Type": "application/json" },
  });
  const data = await result.json();
  return data;
}

export async function deleteSticker(id) {
  const result = await fetch(URL + id, {
    method: "DELETE",
  });
  const data = await result.json();
  return data;
}
