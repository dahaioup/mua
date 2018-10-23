import axios from "axios";

export default (data, callback) => {
  const toFormData = data => {
    let formData = new FormData();
    for (let it in data) {
      formData.append(it, data[it]);
    }
    return formData;
  };
  axios
    .post("/api", toFormData(data), {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
    .then(res => callback(res.data))
    .catch(err => console.log(err.response));
};
