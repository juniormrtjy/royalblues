const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('#header nav .troca')
const links = document.querySelectorAll('#header .btn')

for (const troca of toggle) {
  troca.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
