import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';

const IndexPage = () => (
	<Layout>
		<h1>Hello World!</h1>
		<p>My name is Lauren!</p>
		<p>I am super excited for the hackathon.</p>
		<div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
			<Image />
		</div>
	</Layout>
);

export default IndexPage;
