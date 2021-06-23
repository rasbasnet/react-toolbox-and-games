import { Grid, IconButton } from "@material-ui/core";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import TicTacToe from "./Tools/TicTacToe/TicTacToe";

function Modal(props) {
	return (
		<Grid
			container
			className="modal-cont"
			justify="center"
			alignItems="center"
			alignContent="flex-start"
		>
			<Grid item container justify="flex-end">
				<IconButton onClick={() => props.changeCurrentApp("welcome")}>
					<CloseIcon color="secondary" />
				</IconButton>
			</Grid>
			<TicTacToe />
		</Grid>
	);
}

export default Modal;
