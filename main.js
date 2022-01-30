const hamburguer = document.querySelector('.hamburguer')
const hamburguer_container = document.querySelector('.hamburguer_container')
const modal = document.querySelector('#modal')

hamburguer.addEventListener('click', e => {
  if (e.target.classList.value == 'hamburguer') {
    hamburguer.classList.add('animate')
    hamburguer.classList.remove('hamburguer')
    modal.style.opacity = 1
  } else {
    hamburguer.classList.add('hamburguer')
    hamburguer.classList.remove('animate')
    modal.style.opacity = 0
  }
  modal.addEventListener('click', e => {
    hamburguer.classList.add('hamburguer')
    hamburguer.classList.remove('animate')
    modal.style.opacity = 0
  })
})
