async function getData(url) {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

function getRandomGmae(array) {
    const randomIndex = Math.floor(Math.random() * array.lenght);
    return array[randomIndex];
}

module.exports = { getData, getRandomGmae};