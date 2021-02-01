import {useState} from 'react'
import util from '../../../config/util.config'
import css from './banner.module.css'
export default function Banner() {
	var [banner, setBanner] = useState(util.banner.visible)
	function closeBanner() {
		setBanner(false)
	}
	return (
		<div id={css.banner}>
			<p>{util.banner.message}</p>
			<a onClick={closeBanner}>&times;</a>
		    <style jsx>{`
					background: ${util.banner.color};
					display: ${banner ? 'grid' : 'none'}
					a {
						color: inherit;
					}
					a:hover {
						border-bottom: none;
						color: inherit;
					}
			`}</style>
		</div>
	)
}

