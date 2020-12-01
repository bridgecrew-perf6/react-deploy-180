import { OnlinePath, RootPath } from "./Config/Config";

const GET = (path, root) => {
  const promise = new Promise((resolve, reject) => {
    fetch(`${root ? OnlinePath : RootPath}/${path}`)
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch((err) => reject(err));
  });

  return promise;
};

export default GET;
