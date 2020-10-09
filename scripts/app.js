const apiCode = 'AIzaSyDEnA5musfa3p1DBS_ePjyrCXFqX5TUZms'
const searchInput = document.querySelector('.search-input')
const submitBtn = document.querySelector('.search-button')
const author = document.querySelector('.author-name')
const bookType = document.querySelector('.type-name')
const bookPic = document.querySelector('.book-pic')
const bookDesc = document.querySelector('.book-name')
const bookCard = document.querySelector('.book-card')
const newDiv = document.createElement('div')
const books = document.querySelector('.books')
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
    for(let i = 0; i < data.items.length; i++){
        console.log(data.items[i].volumeInfo)
        let newBackground = data.items[i].volumeInfo.imageLinks.thumbnail
        console.log(newBackground)
        books.appendChild(newDiv)
        books.style.display = 'flex'
        newDiv.classList.add('book-parent')
        newDiv.innerHTML += `
        <div class="book-card">
        <div class="book-pic" style="background: url(${newBackground}); background-size: cover"></div>
        <div class="book-desc">
        <p class="author "><span class="desc">Author:</span> <span class="author-name">${data.items[i].volumeInfo.authors[0]}</span></p>
        <p class="name "><span class="desc">Book name: </span><span class="book-name">${data.items[i].volumeInfo.title}</span></p>
                <p class="type "><span class="desc">Type: </span><span class="type-name"></span></p>
        </div>
        </div>
        `
        
        
    }

}




submitBtn.addEventListener('click', () => {
    searchRtn = searchInput.value
    console.log(searchRtn)
    stuff()
})

// let newBackground = data.items[0].volumeInfo.imageLinks.thumbnail
    // console.log(data)
    // console.log(data.items[0].volumeInfo)
    // bookCard.classList.remove('hide')
    // author.innerHTML = data.items[0].volumeInfo.authors[0]
    // bookType.innerHTML = data.items[0].volumeInfo.categories[0]
    // bookPic.style.background = `url('${newBackground}')`;
    // bookPic.style.backgroundRepeat = 'none'
    // bookPic.style.backgroundSize = 'cover'
    // bookDesc.innerHTML = data.items[0].volumeInfo.title