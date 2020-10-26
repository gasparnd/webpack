import '../css/index.css'
import search from './search'
import render from './render'

const id = prompt('Who is that Pokemon?')

search(id)
	.then(data => render(data))
	.catch(error => console.log('Fetch error ', error))