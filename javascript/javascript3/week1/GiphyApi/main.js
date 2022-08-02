const apiKey = 'TnGhS9Vu9jrTmAOpBbNXscaRtP8opJNw'
const giphyName = document.getElementById('giphy-name');
const btnSearch = document.getElementById('btn-giphy');
const giphyNum = document.getElementById('giphy-num');
const displyGiphy = document.getElementById('giphy-result')
let giphyNameSearch = giphyName.value;
let disGiphy = giphyNum.value
giphyNameSearch = "hello";
disGiphy = 25
function display() {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=TnGhS9Vu9jrTmAOpBbNXscaRtP8opJNw&q=${giphyNameSearch}&limit=${disGiphy}&offset=0&rating=g&lang=en`)
        .then(response => response.json())
        .then(giphyData => {
            const data = giphyData.data
            data.forEach(element => {
                const urlGiphy = element.images.original.url;
                const imgGiphy = document.createElement('img');
                imgGiphy.classList.add("img-giphy");
                imgGiphy.setAttribute("src", urlGiphy);
                displyGiphy.appendChild(imgGiphy);
            });
        })
}
display();
btnSearch.addEventListener('click', () => {
    giphyNameSearch = giphyName.value;
    if (!giphyNameSearch) {
        displyGiphy.innerHTML = 'Enter Giphy Name'
    }
    else {
        displyGiphy.innerHTML = ''
        display();
        giphyName.value = ''
    }
    giphyNum.addEventListener('keyup', () => {
        disGiphy = giphyNum.value
        if (!disGiphy) {
            displyGiphy.innerHTML = 'Enter Number of Giphy to Display'
        }
        else {
            displyGiphy.innerHTML = '';
            display();
            giphyName.value = '';
            giphyNum.value = '';
        }
    })

})


