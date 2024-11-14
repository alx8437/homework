import {ChangeEvent} from "react";

type InputPropsType = {
	currentText: string
	setCurrentText: (text: string) => void
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement> ) => {
		const { value } = event.currentTarget
		props.setCurrentText(value)
	};

	return (
	  <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	);
};
