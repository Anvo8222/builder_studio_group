import { baseUrl } from "../config";

const uploadImageInDescription = `http://localhost:5000/uploads/upload/multi`;
export default function uploadImageCallBack(file) {
  const accessToken = localStorage.getItem("TOKEN");
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", uploadImageInDescription);
    xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
    xhr.setRequestHeader("Content-type", "multipart/form-data");
    const data = new FormData();
    data.append("folder", "html");
    data.append("permission", 0);
    data.append("file", file, file.name);
    xhr.send(data);
    xhr.addEventListener("load", () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response.body.url);
    });
    xhr.addEventListener("error", () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
}
