import planet1 from '../assets/planet1.png';
import planet2 from '../assets/planet2.png';
import planet3 from '../assets/planet3.png';
import planet7 from '../assets/planet7.png';

const images = [planet1, planet2, planet3, planet7];

const getRandomImage = () => {
	const RANGE = images.length;
	return images[Math.floor(Math.random() * RANGE)];
};

export default getRandomImage;
