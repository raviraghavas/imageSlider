import { combineReducers } from 'redux';
import Immutable from 'immutable';

const imageData = () => {
	return Immutable.fromJS([
	{
		title: 'Vulputate Mollis Ultricies',
		description:
			'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo.',
		button: 'Read More',
		image: 'http://localhost:8080/retrieveImage/1',
		user: 'Daniel',
		userProfile: 'https://s7.postimg.cc/abavelo3v/1_3x.png',
	},
	{
		title: 'Tortor Dapibus',
		description:
			'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus.',
		button: 'Discover',
		image: 'http://localhost:8080/retrieveImage/2',
		user: 'Samantha',
		userProfile: 'https://s7.postimg.cc/ujy8zz7vv/5_3x.png',
	},
	{
		title: 'Phasellus volutpat metus',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.',
		button: 'Buy now',
		image: 'https://i.imgur.com/DvmN8Hx.jpg',
		user: 'Michael',
		userProfile: 'https://s7.postimg.cc/6exjimijv/3_3x.png',
	},
	{
		title: 'Ultricies Vulputate Mollis',
		description:
			'Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum massa justo sit amet risus.',
		button: 'Read More',
		image: 'https://i.imgur.com/ZXBtVw7.jpg',
		user: 'Jessica',
		userProfile: 'https://s7.postimg.cc/7ihnu80ij/4_3x.png',
	},
	{
		title: 'Odo Aenean Quam Tortor',
		description:
			'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur Lorem ipsum dolor sit amet.',
		button: 'Discover',
		image: 'https://i.imgur.com/DCdBXcq.jpg',
		user: 'William',
		userProfile: 'https://s7.postimg.cc/f9ydt4zmj/2_3x.png',
	},
	{
		title: 'Volutpat Aenean metus',
		description:
			'quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentumconsectetur purus sit amet fermentum.',
		button: 'Buy now',
		image: 'https://i.imgur.com/DvmN8Hx.jpg',
		user: 'Katerina',
		userProfile: 'https://s7.postimg.cc/hsk2th5tn/6_3x.png',
	}
])};

export default combineReducers(
	{
		imageDataList: imageData
	}
);
