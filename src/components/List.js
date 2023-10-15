import "./../styles/List.css";

export default function List(props) {
	return (
		<div
			id={props.id}
			className="ListContainer"
		>
			<ul className="List">
				{props.listState[props.id].map((item) => (
					<li
						key={item}
						id={item}
						onClick={() => props.changeSelected(item)}
						style={{
							backgroundColor: props.selected.includes(item)
								? "lightgray"
								: "white",
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}
