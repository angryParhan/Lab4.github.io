const dropdownToggle = document.querySelector('.last')
const dropdownBody = document.querySelector('.drop-down')
let state = false
dropdownToggle.onclick = (e) => {
  state = !state
  dropdownBody.style.display = state ? 'block' : 'none'
}

