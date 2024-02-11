import React, {useRef} from "react";

type InputPropsType = {
	currentText: string
	setCurrentText: (e: string) => void
};

export const Input: React.FC<InputPropsType> = ({setCurrentText, currentText}) => {
	const textRef: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
	const onChangeHandler = () => {
		textRef.current?.value && setCurrentText(textRef.current?.value)
	};

	return (
	   <input id={'hw04-input'} value={currentText} ref={textRef} type="text" onChange={onChangeHandler}  />
	 );
};
