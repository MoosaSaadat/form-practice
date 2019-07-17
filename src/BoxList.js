import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

class BoxList extends Component {
	constructor (props) {
		super(props);
		this.state = {
			boxesList: []
		};
		this.addBox = this.addBox.bind(this);
		this.remBox = this.remBox.bind(this);
	}
	remBox (id) {
		this.setState((currState) => ({
			boxesList: currState.boxesList.filter((item) => item.id !== id)
		}));
	}
	addBox (box) {
		this.setState((currState) => ({
			boxesList: [ ...currState.boxesList, box ]
		}));
	}
	listRender () {
		return (
			<ul className="boxlist">
				{this.state.boxesList.map((item) => (
					<Box
						key={item.id}
						id={item.id}
						color={item.color}
						width={item.width}
						height={item.height}
						remBox={this.remBox}
					/>
				))}
			</ul>
		);
	}
	render () {
		return (
			<div className="App">
				<NewBoxForm addBox={this.addBox} />
				{this.listRender()}
			</div>
		);
	}
}

export default BoxList;
