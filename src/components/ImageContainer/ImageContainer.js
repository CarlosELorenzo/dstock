import React from 'react';
import styled from 'styled-components';
import { Image } from 'next/image';

import ImageCard from './../ImageCard/ImageCard';

const ImageSection = styled.section`
	max-width: 100%;
	flex: 1;
	display: flex;
	img{
		flex: 1;
	}
`;

const StyledColumn = styled.div`
	width: 300px;
`;

const ImageContainer = ({ children, data }) => {

	/*const sortData = (columns, data) => {
		const retArray = [];
		for(let it = 0; i < data.length; i++){

		}
	}*/
	console.log(data.map((entry) => entry));

	return (
		<ImageSection>
			{data.map((entry) => 
				( <ImageCard src={entry.download_url} author={entry.author} key={`Img-${entry.id}`}/>)
		)}
			<ImageCard/>
		</ImageSection>
	);
};

export default ImageContainer;
