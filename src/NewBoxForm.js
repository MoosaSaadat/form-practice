import React, { Component } from "react";

class NewBoxForm extends Component {
	constructor (props) {
		super(props);
		this.boxKey = 0;
		this.state = {
			width: "",
			height: "",
			color: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange (evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}
	handleSubmit (evt) {
		evt.preventDefault();
		const newBox = { ...this.state, id: this.boxKey };
		this.props.addBox(newBox);
		this.setState({
			color: "",
			width: "",
			height: ""
		});
		this.boxKey++;
	}
	render () {
		return (
			<div className="card-form">
				<form className="signup" onSubmit={this.handleSubmit}>
					<div className="form-title">Create Color Box!</div>
					<div className="form-body">
						<div className="row">
							<input
								type="text"
								name="color"
								placeholder="Box Color"
								value={this.state.color}
								onChange={this.handleChange}
							/>
						</div>
						<div className="row">
							<input
								type="text"
								placeholder="Width"
								name="width"
								value={this.state.width}
								onChange={this.handleChange}
							/>
							<input
								type="text"
								placeholder="Height"
								name="height"
								value={this.state.height}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="rule" />
					<div className="form-footer">
						<button type="submit">Add!</button>
					</div>
				</form>
			</div>
		);
	}
}

export default NewBoxForm;
