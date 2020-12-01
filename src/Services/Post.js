import { OnlinePath, RootPath } from "./Config/Config";

const POST = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
    fetch(`${root ? OnlinePath : RootPath}/${path}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });

  return promise;
};

export default POST;
