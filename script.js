const searchBtn = document.querySelector('[data-search-button]')
const searchInput = document.querySelector('[data-search-input]')

function search() {
    if (searchInput.value == '') {
        return
    }
    window.open(`https://www.google.com/search?q=${searchInput.value}`,'_blank')
    
}
function clearInput(target) {
    return target.value = ''
}
searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    search()
    clearInput(searchInput)
})
searchInput.addEventListener('keypress', e => {
    if (e.keyCode === 13) {
        e.preventDefault()
        search()
        clearInput(searchInput)
    }

})