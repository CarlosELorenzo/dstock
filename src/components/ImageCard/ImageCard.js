import { useState, useEffect } from 'react';
import useImage from '../../lib/hooks/useImage/useImage';
//import { Image } from 'next/image';
import image1 from '../../public/img1.jpg';
import image2 from '../../public/img2.jpg';
import image3 from '../../public/img3.jpg';
import image4 from '../../public/img4.jpg';
import image5 from '../../public/img5.jpg';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { AiOutlineDownload, AiOutlineLike, AiOutlineSave } from 'react-icons/ai';

/*const StyledImage = styled.img`
	width: 20rem;
`;*/
const Container = styled.div`
	position: relative;
	//margin: 1rem auto;
	overflow: hidden;
	margin-bottom: 2rem;
`;
const Image = styled.img`
	width: 100%;
`;

const ImageData = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	opacity: 0;
	background-color: ${theme.colors.dark}77;
	transition: all 0.5s ease;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	padding: 1em;
	gap: 1em;
	&:hover {
		opacity: 1;
	}
	color: ${theme.colors.grey}40;
	line-height: 1em;
	h5 {
		color: ${theme.colors.grey}b0;
		font-size: 2rem;
	}
	p {
		font-size: 1rem;
	}
	font-size: 2rem;
`;
const StyledAuthor = styled.div`
	display: flex;
	gap: 1rem;
	div {
		width: 1em;
		height: 1em;
		background-color: white;
		border-radius: 50%;
	}
	p {
		font-size: 1.125rem;
		transition: all 0.5s ease;
		&:hover {
			color: ${theme.colors.arena};
		}
	}
`;

const StyledIcons = styled.div`
	display: flex;
	gap: 1rem;
	svg {
		width: 1em;
		height: 1em;
		//background-color: white;
		border-radius: 50%;
		cursor: pointer;
		transition: all 0.5s ease;
		&:hover {
			color: ${theme.colors.arena};
		}
	}
`;

const ImageCard = ({ author, src }) => {
	//const image = useImage(imgId);
	
	//const image = useImage(imgId);
	//const { src } = image;
	//console.log(image1.src);

	
	/*const getImageSrc = (imageId) => {
		switch (imageId) {
			case 0:
				return image1.src;
				break;

			case 1:
				return image2.src;

				break;

			case 2:
				return image3.src;

				break;

			case 3:
				return image4.src;

				break;

			case 4:
				return image5.src;

				break;

			default:
				return image2.src;
				break;
		}
	};

	const imgSrc = getImageSrc(imgId);
	useEffect(() => {
		//console.log(getImageSrc(imgId));
	}, []);*/
	//console.log("Url: ",{src,author})
	return (
		<Container>
			<Image src={src} />
			<ImageData>
				<StyledAuthor>
					<div></div>
					<p>{author}</p>
				</StyledAuthor>
				<StyledIcons>
					<AiOutlineDownload />
					<AiOutlineLike />
					<AiOutlineSave />
				</StyledIcons>
			</ImageData>
		</Container>
	);
};

//<img src={image.src} alt={`img-${imgId}`} />

export default ImageCard;
