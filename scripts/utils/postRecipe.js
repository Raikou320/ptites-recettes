async function postRecipe(recipe) {
  const postUrl = 'https://ptites-recettes.free.beeceptor.com/recipes';
  fetch(postUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(recipe),
  })
    .then((response) => {
      if (!response.ok) {
        if (response.status === 429) {
          alert('Un trop grand nombre de requêtes on étais faites aujourd\'hui réésayez demain')
          throw new error("Too much request does today retry tomorrow")
        }
        throw new Error(
          'The network response is not ok, error code: ' + response.status
        );
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((err) => {
      console.error('Error when fetching the API URL: ' + err);
    });
}

export default postRecipe;