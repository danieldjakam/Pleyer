export async function fetchPopularTracks() {
    const apiKey = '97f69ef51a37026b11c7a0f264c65a8e';
    const apiUrl = `https://api.deezer.com/chart/0/tracks?limit=10&output=json`;

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
                console.log('Aucune chanson populaire trouvée.');
            }
        })
        .catch(error => {
            console.error('Une erreur s\'est produite :', error);
        });

    return tracks;
}

export async function fetchNewTracks() {
    const apiKey = '97f69ef51a37026b11c7a0f264c65a8e';
    const apiUrl = `https://api.deezer.com/chart/0/tracks?limit=10&output=json`;

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
                console.log('Aucune chanson populaire trouvée.');
            }
        })
        .catch(error => {
            console.error('Une erreur s\'est produite :', error);
        });

    return tracks;
}

export async function fetchSongsByArtist(id) {
    const apiKey = '97f69ef51a37026b11c7a0f264c65a8e';
    const apiUrl = `https://api.deezer.com/artist/${id}/top?limit=50`

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
                console.log('Aucune chanson populaire trouvée.');
            }
        })
        .catch(error => {
            console.error('Une erreur s\'est produite :', error);
        });

    return tracks;
}
export async function fetchSongsByAlbum(id) {
    const apiKey = '97f69ef51a37026b11c7a0f264c65a8e';
    const apiUrl = `https://api.deezer.com/album/${id}/tracks`

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
                console.log('Aucune chanson populaire trouvée.');
            }
        })
        .catch(error => {
            console.error('Une erreur s\'est produite :', error);
        });

    return tracks;
}