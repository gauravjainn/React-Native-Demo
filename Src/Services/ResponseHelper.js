export const GET = async getUrl => {
  try {
    const url = getUrl;
    const data = await fetch(url)
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log(err);
      });
    return data;
  } catch (e) {
    return e;
  }
};
