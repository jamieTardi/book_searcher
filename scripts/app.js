const apiCode = 'AIzaSyDEnA5musfa3p1DBS_ePjyrCXFqX5TUZms'
const searchInput = document.querySelector('.search-input')
const submitBtn = document.querySelector('.search-button')

let searchRtn = ''


async function fetchApi(url) {
    const dataFetch = await fetch(url,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: apiCode,
        }
    })
    const data = await dataFetch.json();
    return data;
}

async function stuff () {
    let fetchLink = `https://www.googleapis.com/books/v1/volumes?q=${searchRtn}+intitle:${searchRtn}&key=${apiCode}`
    const data = await fetchApi(
        fetchLink  
      );
      console.log(data)
      console.log(data.items[0].volumeInfo.authors[0])
}




submitBtn.addEventListener('click', () => {
   searchRtn = searchInput.value
   console.log(searchRtn)
   stuff()
})