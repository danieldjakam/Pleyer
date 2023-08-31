export async function fetchPopularAlbums() {
    const apiKey = '97f69ef51a37026b11c7a0f264c65a8e';
    const apiUrl = `https://api.deezer.com/chart/0/albums?limit=10&output=json`;
    let albums = [];
    await fetch(apiUrl, {
        headers: {
            'X-RapidAPI-Key': apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.data && data.data.length > 0) {
                albums = data.data;

            } else {
                console.log('Aucun album populaire trouvé.');
            }
        })
        .catch(error => {
            console.error('Une erreur s\'est produite :', error);
        });

    return albums;
}
