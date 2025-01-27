function getRecipes() {
    fetch('https://ptites-recettes.free.beeceptor.com/recipes')
    .then(res => {
        if (!res.ok) {
            if (res.status == 429) {
                alert('Trop de requêtes on été faites réésayez demain')
                throw new Error('Too much requests does for today retry tomorrow');
            }
            throw new Error('The network response is not ok')
        }
        return res.json()
    })
    .then(data => localStorage.setItem('recipes', JSON.stringify(data)))
    .catch(err => alert(err))
    .finally(() => console.log('finally', JSON.parse(localStorage.getItem('recipes'))))
}

export default getRecipes