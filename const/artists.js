export async function fetchNewArtists() {
    const apiKey = '97f69ef51a37026b11c7a0f264c65a8e';
    const apiUrl = `https://api.deezer.com/chart/0/artists?limit=10&output=json`;

    let tracks = []
    await fetch(apiUrl, {
        headers: {
            'X-RapidAPI-Key': apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.data && data.data.length > 0) {
                tracks = data.data;
            } else {
                console.log('Aucun artiste populaire trouvée.');
            }
        })
        .catch(error => {
            console.error('Une erreur s\'est produite :', error);
        });

    return tracks;
}

export async function fetchOneArtist(id) {
    const apiKey = '97f69ef51a37026b11c7a0f264c65a8e';
    const apiUrl = `https://api.deezer.com/artist/${id}?output=json`;

    let artist = {}
    await fetch(apiUrl, {
        headers: {
            'X-RapidAPI-Key': apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data) {
                artist = data;
            } else {
                console.log('Aucun artiste populaire trouvée.');
            }
        })
        .catch(error => {
            console.error('Une erreur s\'est produite :', error);
        });

    return artist;
}

