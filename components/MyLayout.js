import React from 'react';
import Head from 'next/head';
import Header from './Header';
const Layout = props => (
	<div>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<link rel="stylesheet" href="/static/css/normalize.css"/>
			<link rel="stylesheet" href="/static/css/skeleton.css"/>
			<link rel="stylesheet" href="/static/css/haywire.css"/>
			<link href="/static/css/font.css" rel="stylesheet" type="text/css"/>
			<title>{props.title}</title>
		</Head>
		  	{props.children}
		<Header/>
	</div>
);
export default Layout;
