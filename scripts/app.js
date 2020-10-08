const apiCode = 'AIzaSyDEnA5musfa3p1DBS_ePjyrCXFqX5TUZms'
const searchInput = document.querySelector('.search-input')
const submitBtn = document.querySelector('.search-button')
const author = document.querySelector('.author-name')
const bookType = document.querySelector('.type-name')
const bookPic = document.querySelector('.book-pic')
const bookDesc = document.querySelector('.book-name')

let searchRtn = ''



async function fetchApi(url) {
    const dataFetch = await fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: apiCode,
        }
    })
    const data = await dataFetch.json();
    return data;
}

async function stuff() {
    let fetchLink = `https://www.googleapis.com/books/v1/volumes?q=${searchRtn}+intitle:${searchRtn}&key=${apiCode}`
    const data = await fetchApi(
        fetchLink
    );
    let newBackground = data.items[0].volumeInfo.imageLinks.thumbnail
    console.log(data)
    console.log(data.items[0].volumeInfo)
    author.innerHTML = data.items[0].volumeInfo.authors[0]
    bookType.innerHTML = data.items[0].volumeInfo.categories[0]
    bookPic.style.background = `url('${newBackground}')`;
    bookPic.style.backgroundRepeat = 'none'
    bookPic.style.backgroundSize = 'cover'
    bookDesc.innerHTML = data.items[0].volumeInfo.title



}




submitBtn.addEventListener('click', () => {
    searchRtn = searchInput.value
    console.log(searchRtn)
    stuff()
})