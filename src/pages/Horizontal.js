import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Slider from '../util/Slider';
import horizontalCss from '../css/horizontal.css';
// import content from '../reducer/content';

class Horizontal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			image: null
		};
	}

	componentWillMount() {
		this.renderMyData();
	}

	renderMyData() {
		fetch('http://localhost:9000/retrieveAllImages')
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);					
				this.setState({ image: responseJson })
			})
			.catch((error) => {
				console.error(error);
			});
	}

	render() {

		return (
			<div>
				<h2>Horizontal slider</h2>
				{console.log(this.state.image)}
				{this.state.image ? <Slider classNames={horizontalCss}>
					{this.state.image.map((item, index) => (
						<div key={index}>
							<img src={item.image} className="imageCheck" />
							<div className="divCheck">
								{/* <h1>{item.get("title")}</h1> */}
								<p>{item.description}</p>
								{/* <button>{item.get("button")}</button> */}
							</div>
						</div>
					))}
				</Slider> : "Testing"}
			</div>


		);
	}
}


// const mapStateToProps = dataReceivedFromStore => {
// 	console.log(dataReceivedFromStore.imageDataList);
// 	return { image: dataReceivedFromStore.imageDataList };
// };

// // connect(mapStateToProps)(ImageListing);

// export default connect(mapStateToProps)(Horizontal);
export default Horizontal;