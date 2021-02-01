import Menu from './menu'
import Social from '../../ui/comps/social'
import Link from 'next/link'
export default function Header({variant, social}) {
		return (
			<header>
				<Social/>
				<Link href="/"><h1>Casey</h1></Link>
				<Menu/>
				<style jsx>{`
				header{
					width: 100vw;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 1rem 2rem;
					color: var(--primary);
					font-size: 1.5rem;
				}
				h1:hover {
					color: var(--white);
					cursor: pointer;
				}
				`}</style>
			</header>
)}