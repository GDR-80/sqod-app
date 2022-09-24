export function generateRandomId(length = 64) {
  const now = Date.now().toString();
  let uniqueId = "";
  const chars =
    "ABCDEFGHIJUKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
  const charsLength = chars.length;

  for (let index = 0; index < length - now.length; index++) {
    uniqueId += chars.charAt(Math.floor(Math.random() * charsLength));
  }
  return uniqueId + Date.now();
}

export function findById(id, data) {
  return data.findIndex((item) => item.id === id);
}

export function searchFilter(arr, data) {
  return arr.filter((item) =>
    item.name.toLowerCase().includes(data.toLowerCase())
  );
}
