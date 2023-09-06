const btnFilter = document.getElementById('openFilter')

const modalFilter = document.getElementById('filter')

const closeFilter = document.getElementById('btnClose')

function closeModal() {
    modalFilter.classList.add('closed')
}


function openModal() {
    modalFilter.classList.remove('closed')
}

btnFilter.addEventListener("click", openModal)
closeFilter.addEventListener("click", closeModal)
