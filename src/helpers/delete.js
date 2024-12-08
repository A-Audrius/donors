import axios from "axios";

const url = "http://localhost:3000/users"

export const deleteOne = async (id) => {
  await axios.delete(`${url}/${id}`);
}