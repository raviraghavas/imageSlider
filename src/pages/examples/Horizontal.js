import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from '../..';
import horizontalCss from '../../css/horizontal.css';
import PropTypes from "prop-types";
// import content from '../content';
// import modules from '../../util/filemod'

class Horizontal extends Component {

	render() {
		
		return (
			<div>
				<h2>Horizontal slider</h2>
				{/* {console.log(this.props)} */}
				<Slider classNames={horizontalCss}>
					{this.props.image.map((item, index) => (
						<div key={index}>
							<img src={item.get("image")} className="center" height="400px" display="block" />
							<div className="center">
								<h1>{item.get("title")}</h1>
								<p>{item.get("description")}</p>
								<button>{item.get("button")}</button>
							</div>
						</div>
					))}
				</Slider> 
			</div>
			

		);
	}
}


const mapStateToProps = dataReceivedFromStore => {
	console.log(dataReceivedFromStore.imageDataList);
	return { image: dataReceivedFromStore.imageDataList };
};

// connect(mapStateToProps)(ImageListing);

export default connect(mapStateToProps)(Horizontal);
