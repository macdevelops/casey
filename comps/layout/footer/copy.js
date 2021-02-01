import Link from 'next/link'
import seo from '../../../config/seo.config'
export default function Copy() {
	const yr = new Date().getFullYear();
	return (
		<>
	<Link href="/">
	<a id="copyright">&copy; {seo.title} {yr}</a>
	</Link>
	<style jsx>{`#copyright {color: #fcfcfc;} #copyright:hover{color: var(--primary); transition: .3s ease;}`}</style>
	</>
)}