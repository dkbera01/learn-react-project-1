import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState(0);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="text-center bg-gray-400 text-white p-4 text-3xl">
      Github Followers: {data.followers}
    </div>
  );
}

export default Github;

export const getGithubInfo = async () => {
  return fetch("https://api.github.com/users/hiteshchoudhary").then((res) =>
    res.json()
  );
};
