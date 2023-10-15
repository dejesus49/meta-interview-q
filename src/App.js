import "./styles/App.css";
import List from "./components/List";
import ActionButtons from "./components/ActionButtons";
import { useState } from "react";

const initialState = { "list-1": ["1", "2", "3", "4"], "list-2": [] };

export default function App() {
	const [listState, setListState] = useState(initialState);
	const [selected, setSelected] = useState([]);

	const changeSelected = (item) => {
		if (selected.includes(item)) {
			setSelected(selected.filter((element) => element !== item));
		} else {
			setSelected([...selected, item]);
		}
	};

	const changeListState = (destination, other) => {
		selected.forEach((item) => {
			if (!listState[destination].includes(item)) {
				setListState((listState) => ({
					[destination]: [...listState[destination], item].sort(),
					[other]: listState[other]
						.filter((element) => element !== item)
						.sort(),
				}));
			}
		});
		setSelected([]);
	};

	return (
		<div className="App">
			<List
				id={"list-1"}
				listState={listState}
				selected={selected}
				changeSelected={changeSelected}
			/>
			<ActionButtons changeListState={changeListState} />
			<List
				id={"list-2"}
				listState={listState}
				selected={selected}
				changeSelected={changeSelected}
			/>
		</div>
	);
}
