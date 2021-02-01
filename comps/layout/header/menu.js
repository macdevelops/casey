export default function Menu() {
	return (
	<div>
	<svg width="40" height="40">
		<rect width="40" height="3" x="0" y="12" style={{fill: 'var(--primary'}}/>
		<rect width="40" height="3" x="0" y="24" style={{fill: 'var(--primary)'}} />
	</svg>
	<style jsx>{`
	svg:hover {cursor: pointer;}
	`}</style>
	</div>
)}
