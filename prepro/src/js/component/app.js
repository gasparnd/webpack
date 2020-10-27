import React, {useState} from 'react'
import data from './data.json'
import Loader from './loader'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'
import '../../sass/sass.scss'
import '../../less/less.less'
import '../../stylus/stylus.styl'

const App = () => {
	const [loaderList, setLoaderList] = useState([])
	function handleClick () {
		setLoaderList(data.loaders)
	}
	return (
		<div>
			<p class="sass">
				This is sass
			</p>
			<p class="less">
				This is less
			</p>
			<p class="stylus">
				This is stylus
			</p>
			<p class="post-css">
				This is postcss
			</p>
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