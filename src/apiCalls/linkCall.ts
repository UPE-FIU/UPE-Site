import axios from "axios";

export default async function getData(): Promise<any> {
  const url =
    "https://vh4r0zrl.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22links%22%5D";
  try {
    const response = await axios.get(url);
    if (response.status == 200) {
      return response.data.result;
    }
  } catch (exception) {
    process.stderr.write(`ERROR received from ${url}: ${exception}\n`);
  }
}
