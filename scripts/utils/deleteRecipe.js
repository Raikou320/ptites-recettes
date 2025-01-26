async function deleteRecipe(id) {
  const deleteUrl = `https://ptites-recettes.free.beeceptor.com/recipes/${id}`;
  fetch(deleteUrl, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
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

export default deleteRecipe;