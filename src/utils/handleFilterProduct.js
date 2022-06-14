/* eslint-disable no-empty */
const newArr = [];
export function handleChangeFilterProduct(id, isCheck) {
  if (isCheck) {
    newArr.push(id);
  } else {
    const index = newArr.findIndex((x) => x === id);
    newArr.splice(index, 1);
  }
  return newArr;
}
