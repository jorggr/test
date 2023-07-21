import { create } from './todb.js'

const form_data = document.querySelector('[form-data-button]')

const uuid = () => parseInt(Date.now() * Math.random())

form_data.addEventListener('click', (evt) => {
  evt.preventDefault()

  console.log(form_data)

  const title = document.querySelector('[form-input-title]').value
  const author = document.querySelector('[form-input-author]').value

  console.log(title, author)

  const addNew = create({
    id: uuid(),
    title: title,
    author: author,
  })

  addNew.then((data) => {
    console.log(data)
  })
})
