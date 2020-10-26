import React, {useState} from 'react'
import data from './data.json'
import Loader from './loader'
console.log(data)

const App = () => {
	const [loaderList, setLoaderList] = useState([])
	function handleClick () {
		setLoaderList(data.loaders)
	}
	return (
		<div>
			Beutiful React App
			<ul>
				{
					loaderList.map(item => <Loader {...item} key={item.id} />)
				}	
			</ul>
			<button onClick={handleClick}>Show what i learned</button>
		</div>
	)
}

export default App