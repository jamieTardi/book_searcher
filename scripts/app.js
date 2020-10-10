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
        console.log(data.items)
        try {
            let newBackground = data.items[i].volumeInfo.imageLinks.thumbnail;
        books.appendChild(newDiv)
        newDiv.classList.add('book-parent')
        newDiv.innerHTML += `
        <div class="book-card scroller">
        <div class="book-pic" style="background: url(${newBackground}); background-size: cover; background-position: center"></div>
        <div class="book-desc">
        <p class="author line-space"><span class="desc">Author:</span> <span class="author-name">${data.items[i].volumeInfo.authors[0]}</span></p>
        <p class="name line-space"><span class="desc">Book name: </span><span class="book-name">${data.items[i].volumeInfo.title}</span></p>
                <p class="type line-space"><span class="desc">Type: </span><span class="type-name">${data.items[i].volumeInfo.categories[0]}</span></p>
                <p class="description line-space"><span class="desc">Description: </span><span class="type-name" style="font-size: 10px">${data.items[i].volumeInfo.description}</span></p>
        </div>
        </div>
        `
    }
    catch{
        console.log('error')
    }
    
        
        
    }

}

clear = () => {
    newDiv.innerHTML =''
    searchInput.value=''
}



submitBtn.addEventListener('click', () => {
    searchRtn = searchInput.value
    console.log(searchRtn)
    stuff()
    clear()
})

