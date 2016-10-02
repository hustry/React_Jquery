
import React from "react";

export default class BootStrapButton extends React.Component{

	render(){

		return (
			<a 
			{...this.props}
			className={ (this.props.className || '') + ' btn' }>
			</a>
		);

	}
}