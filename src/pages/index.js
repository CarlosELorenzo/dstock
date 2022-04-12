import React from 'react';
import ImageCard from '../components/ImageCard/ImageCard';
import Intro from '../components/Intro/Intro';
import ImageContainer from '../components/ImageContainer/ImageContainer';
import styled from 'styled-components';
import useImage from './../lib/hooks/useImage/useImage';
import Columns from '../lib/layout/Columns';

const defaultEndpoint = 'https://picsum.photos/v2/list?page=0&limit=100';

export async function getServerSideProps() {
	const res = await fetch(defaultEndpoint);
	const data = await res.json();
	return {
		props: {
			data,
		},
	};
}
const ImagesColumns = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 2rem 2rem;
	width: calc(100% - 4rem);
	justify-content: center;

	gap: 2rem;
`;
const Home = ({ data }) => {
	const images = useImage(data);
	
	

	return (
		<>
			<Columns />
			<ImagesColumns>
				<ImageContainer data={data} />
			</ImagesColumns>
			<Intro />
		</>
	);
};
/*
<Filter />
<ImageGallery />
*/
export default Home;
