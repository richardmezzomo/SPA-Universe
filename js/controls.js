const linkHome = document.querySelector('.linkHome')
const linkUniverse = document.querySelector('.linkUniverse')
const linkExplorer = document.querySelector('.linkExplorer')

linkHome.classList.add('click')

function setActiveLink(element) {
  for (const link of [linkHome, linkUniverse, linkExplorer]) {
    link.classList.remove('click')
  }
  element.classList.add('click')
}

function setBg(bg) {
  document.body.className = ''
  document.body.className = bg
}

function homeClick() {
  setActiveLink(linkHome)
  setBg('home')
}

function universeClick() {
  setActiveLink(linkUniverse)
  setBg('universe')
}

function explorerClick() {
  setActiveLink(linkExplorer)
  setBg('explorer')
}

export { homeClick, universeClick, explorerClick }


