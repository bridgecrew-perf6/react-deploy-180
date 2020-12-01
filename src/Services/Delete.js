import { OnlinePath, RootPath } from "./Config/Config";

const DELETE = (path, root) => {
  const promise = new Promise((resolve, reject) => {
    fetch(`${root ? OnlinePath : RootPath}/${path}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch((err) => reject(err));
  });

  return promise;
};

export default DELETE;
