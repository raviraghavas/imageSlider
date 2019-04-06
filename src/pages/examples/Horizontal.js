import React from 'react';
import Slider from '../..';
import horizontalCss from '../../css/horizontal.css';
import content from '../content';

function Horizontal() {
	return (
		<div>
			<h2>Horizontal slider</h2>
			<Slider classNames={horizontalCss}>
				{content.map((item, index) => (
					<div key={index}>
						<img src={item.image} />
						<div className="center">
							<h1>{item.title}</h1>
							<p>{item.description}</p>
							<button>{item.button}</button>
						</div>
					</div>
				))}
			</Slider>

			{/* <SourceView>
				{`import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

<Slider>
{content.map((item, index) => (
	<div
		key={index}
		style={{ background: \`url('\${item.image}') no-repeat center center\` }}
	>
		<div className="center">
			<h1>{item.title}</h1>
			<p>{item.description}</p>
			<button>{item.button}</button>
		</div>
	</div>
))}
</Slider>`}
			</SourceView>

			With css modules:
			<SourceView>
				{`import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';

<Slider classNames={horizontalCss}>
{content.map((item, index) => (
	<div
		key={index}
		style={{ background: \`url('\${item.image}') no-repeat center center\` }}
	>
		<div className="center">
			<h1>{item.title}</h1>
			<p>{item.description}</p>
			<button>{item.button}</button>
		</div>
	</div>
))}
</Slider>`}
			</SourceView> */}
		</div>
	);
}

export default Horizontal;
