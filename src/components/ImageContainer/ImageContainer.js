import React from 'react';
import styled from 'styled-components';
import { Image } from 'next/image';
import ImageCard from './../ImageCard/ImageCard';

const ImageSection = styled.section`
	max-width: 100%;
	flex: 1;
`;

const ImageContainer = ({ children, data }) => {
	console.log(data.map((entry) => entry.id));

	return (
		<ImageSection>
			<ImageCard/></div>
		</ImageSection>
	);
};

export default ImageContainer;
