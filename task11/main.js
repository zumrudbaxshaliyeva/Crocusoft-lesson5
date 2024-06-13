const list = document.querySelector('ul')
const li = list.getElementsByTagName('li')

for (let i = 0; i < li.length; i++) {
    li[i].textContent = `${i + 1}.${li[i].textContent}`
}