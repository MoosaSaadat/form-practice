import React, { Component } from "react";

class Box extends Component {
	constructor (props) {
		super(props);
		this.handleRemove = this.handleRemove.bind(this);
	}
	handleRemove (evt) {
		this.props.remBox(this.props.id);
	}
	render () {
		return (
			<div className="boxlist-item">
				<div
					className="box"
					style={{
						width: `${this.props.width}px`,
						height: `${this.props.height}px`,
						backgroundColor: this.props.color
					}}
				/>
				<button className="button" onClick={this.handleRemove}>
					Remove Box!
				</button>
			</div>
		);
	}
}

export default Box;
