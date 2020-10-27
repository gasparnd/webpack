import React, {useState} from 'react'
import data from './data.json'
import Loader from './loader'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'

const App = () => {
	const [loaderList, setLoaderList] = useState([])
	function handleClick () {
		setLoaderList(data.loaders)
	}
	return (
		<div>
			Beautiful React App
			<video src={video} width={360} controls poster={logo}></video>
			<p>
				<img src={logo} alt="Logo" width="50"/>
			</p>
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