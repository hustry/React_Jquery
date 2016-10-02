
import React from "react";
import BootStrapButton from "./BootStrapButton";

export default class BootStrapModal extends React.Component{

	//设定模态对话框
	componentDidMount(){

		$(this.refs.root).modal({
			backdrop:'static',
			show:false,
			keyboard:false
		});

	}

	//显示模态对话框方法
	open(){
		$(this.refs.root).modal('show');
	}
	//关闭模态对话框方法
	handleCancel(){
		$(this.refs.root).modal('hide');
	}

	render(){

		var confirmButton = null;
		var cancelButton = null;
	
		if(this.props.confirm){
			confirmButton = (
				<BootStrapButton
				 className="btn-primary"
				 onClick={this.handleCancel.bind(this) }>
					{ this.props.confirm }
				</BootStrapButton>

			);
		}

		if(this.props.cancel){
			cancelButton = (
				<BootStrapButton
				className="btn-primary"
				onClick={this.handleCancel.bind(this)}>
					{ this.props.cancel }
				</BootStrapButton>
			);
		}

		return (
			<div className="modal fade" ref="root">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button 
								className="close"
								onClick={this.handleCancel.bind(this)}>
								&times;
							</button>
							<h3>{this.props.title}</h3>
						</div>						
						<div className="modal-body">
							{this.props.children}
						</div>
						<div className="modal-footer">
							{cancelButton}
							{confirmButton}
						</div>
					</div>
				</div>				
			</div>
		);
	}
}