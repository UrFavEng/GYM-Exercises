export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "052f7ee3b9mshf92b509aea9001bp1afed4jsn090dbcac8c64",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const DataFetch = async (url, option) => {
  const response = await fetch(url, option);
  const data = response.json();
  return data;
};
