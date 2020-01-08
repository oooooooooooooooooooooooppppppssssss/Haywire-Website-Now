import Link from 'next/link';
import React from 'react';
import Edition from '../edition';
const linkStyle = {
	marginRight: 15
};
const linkStyleSub = {
	marginRight: 10
};
const Header = () => (
	<div className="section footer">
		<div className="row">
			<div className="one-half column leftFoot" >
				<a className="button button-orange" href={Edition.url} download={'Haywire Issue ' + Edition.issueNumber} style={linkStyle} >Download Issue {Edition.issueNumber}</a>
				<Link href="/">
					<a className="button " style={linkStyleSub}>Home</a>
				</Link>
	
				<Link prefetch href="/archive">
					<a className="button " >Archive</a>
				</Link>
				<Link href="https://www.yumpu.com/user/haywire">
				</Link>
				<Link prefetch href="https://www.yumpu.com/user/haywire">
					<a className="button">View on yumpu</a>
				</Link>
			</div>
			<div className="one-half column ctext">
				<span className="rightFoot">(c) Haywire {new Date().getFullYear()}</span>
			</div>
		</div>
	</div>
);
export default Header;
