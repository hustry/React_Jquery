
import React from "react";
import BootStrapModal from "./BootStrapModal";
import BootStrapButton from "./BootStrapButton";

export default class Example extends React.Component{

	render(){
		var modal = null;
		modal = (
			<BootStrapModal
				ref="modal"
				confirm="OK"
				cancel="Cancel"
				title="Hello,BootStrap!">
				这是由Jquery和BootStrap构建的React组件
			</BootStrapModal>
			
		);

		return (
			<div className="example">
				{modal}
				<BootStrapButton
					className="btn-default"
					onClick={this.openModal.bind(this)}>
					打开模态对话框
				</BootStrapButton>
			</div>
		);
	}

	openModal(){
		this.refs.modal.open();
	}


}