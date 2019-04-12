import { combineReducers } from 'redux';
import Immutable from 'immutable';
import imageRetrieve from '../api/imageRetrieve';

// const imageRetrievedList = async () => {
// 	try {
// 		// console.log("Inside before axios call")
// 	  return await imageRetrieve.post('/retrieveAllImages');
// 	} catch (error) {
// 	  console.error(error)
// 	}
//   }

// const imageData = async () => {
// 	// console.log("Inside image data request");
// 	const dataRetrieved = await imageRetrievedList();
	
// 	console.log("after retrieving data")
// 	console.log(dataRetrieved.data);
// 	// console.log(Immutable.fromJS(dataRetrieved.data));
// 	return dataRetrieved.data;
// };

// export default combineReducers(
// 	{
// 		imageDataList: imageData
// 	}
// );

// const imageRetrievedList = async () => {
// 	try {
// 		// console.log("Inside before axios call")
// 		return await imageRetrieve.post('/retrieveAllImages');
// 	} catch (error) {
// 		console.error(error)
// 	}
// }

// const imageData = async () => {
// 	// console.log("Inside image data request");
// 	const dataRetrieved = await imageRetrieve.post('/retrieveAllImages');

// 	console.log("after retrieving data")
// 	console.log(dataRetrieved);
// 	// console.log(Immutable.fromJS(dataRetrieved.data));
// 	return dataRetrieved.data;
// };

// // console.log(imageData)
// export default imageData;