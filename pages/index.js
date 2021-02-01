import seo from '../config/seo.config'
import Layout from '../comps/layout/index'
import Convert from '../comps/ui/comps/convert'
export default function Index() {
	return (
		<Layout title="Home" description={seo.description}>
			<Convert/>
		</Layout>
)}