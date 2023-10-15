import "./../styles/ActionButtons.css";

export default function ActionButtons(props) {
	return (
		<div className="ActionButtons">
			<div className="ActionButton">
				<button
					onClick={() => props.changeListState("list-1", "list-2")}
				>
					&lt;
				</button>
			</div>
			<div className="ActionButton">
				<button
					onClick={() => props.changeListState("list-2", "list-1")}
				>
					&gt;
				</button>
			</div>
		</div>
	);
}
