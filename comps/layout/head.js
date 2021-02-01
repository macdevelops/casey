import Head from 'next/head'
import seo from '../../config/seo.config'
export default function HeadContents({description, pageTitle}) {
	const title = `${pageTitle} | ${seo.title}`
	return (
		<Head>
			<title>{title}</title>
			<meta name='description' content={description}/>
      		<meta property='og:type' content='website'/>
	        <meta property='og:title' content={title}/>
     		<meta property='og:description' content={description}/>
	        <meta property='og:image' content='/meta/og.png'/>
     	    <meta property='site_name' content={seo.title}/>
	        <meta property='twitter:card' content='summary'/>
     	    <meta property='twitter:creator' content={seo.social.twitter}/>
	        <meta property='twitter:title' content={title}/>
   	    	<meta property='twitter:description' content={description}/>
            <meta property='twitter:image' content='/meta/og.png'/>
	        <link rel='icon' type='image/svg+xml' href='/icons/fav.svg'/>
			<link rel="preconnect" href="https://fonts.gstatic.com"/>
			<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Lato&display=swap" rel="stylesheet"/> 
		</Head>
)}
