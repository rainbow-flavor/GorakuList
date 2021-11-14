import React from "react";

export default class NotFound extends React.Component {
	render() {
		return (
			<div id="content">
				<div>
					<img src="./src/resources/404_logo.png" width="30%" alt="" />
					<h1>404</h1>
					<h2>Something went wrong</h2>
				</div>
			</div>
		);
	}
}