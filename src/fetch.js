import axios from "axios";

const fetch = async (query) => {
  
  const url =
    "https://api.tomtom.com/search/2/search/" +
    query +
    ".json?lat=50.05481&lon=19.92784&minFuzzyLevel=1&maxFuzzyLevel=2&view=Unified&relatedPois=off&key=P3l5CffXjhAIiP0wkMAPH8HGMkE1rAJl";


    const data = await axios.get(url);
    return data.data.results[0].position;

};

export default fetch;
