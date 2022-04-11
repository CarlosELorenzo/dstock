import { useState, useEffect } from 'react';
import useSWR from 'swr';
import image1 from '../../../public/img1.jpg';
import image2 from '../../../public/img2.jpg';
import image3 from '../../../public/img3.jpg';
import image4 from '../../../public/img4.jpg';
import image5 from '../../../public/img5.jpg';

//const fetcher = (...args) => fetch(...args).then((res) => res.json());

const imageData = [image1, image2, image3, image4, image5];
/*const imgInfo = (imgId) => {
	//askkSmaertcontract
	const metadata = {
		imgId,
		src: '',
		alt: '',
		permision: 'all',
		author: '',
		nftAdress: '',
		year: '',
	};
	return imageData[imgId];
};*/

function useImage(imgId) {
	const [image, setImage] = useState(image1);
	//const { data, error } = useSWR(null, fetcher);
	/*useEffect(() => {
		console.log(data);
	}, [data]);*/
	return image;
}

export default useImage;
