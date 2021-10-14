import * as React from "react";
import getData from "../api_calls/eboard";

const Home: React.ReactNode = () => {
  const [github, setGithub] = React.useState(null);
  const [name, setName] = React.useState(null);
  React.useEffect(() => {
    async function checkData() {
      const data = await getData();
      console.log(data);
      setGithub(data[0].eboard_github);
      setName(data[0].eboard_name);
    }
    checkData();
  }, []);

  return (
    <main>
      <h1>Example of Creating API Functions</h1>
      <p>
        This is a raw example of how you can use the API ref provided by Sanity
        when we create a query, and using it to return a TS object that will
        allow the front-end team to use the data nicely.
      </p>
      <p>{github}</p>
      <p>{name}</p>
    </main>
  );
};

export default Home;
