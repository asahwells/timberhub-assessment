/* eslint-disable import/no-unused-modules */
import Select, { Props } from "react-select";

const CustomSelect = (props: Props) => {
	return (
		<Select
			className="block appearance-none bg-accent border-none rounded-lg w-full outline-none focus:outline-none text-base text-body"
			isSearchable
			{...props}
			styles={{
				control: (provided) => ({
					...provided,
					border: "ECF1F4",
					outline: "none",
					background: "#FFFFFF",
					padding: "6px 8px",
				}),
				input: (provided) => ({
					...provided,
					background: "#FFFFFF",
					border: "none",
					outline: "none",
					color: "#8C8CA2",
				}),
				singleValue: (provided) => ({
					...provided,
					zIndex: 1,
				}),
				placeholder: (provided) => ({
					...provided,
					zIndex: 1,
				}),
				menu: (provided) => ({
					...provided,
					zIndex: 2,
				}),
				option: (provided, state) => ({
					...provided,
					backgroundColor: state.isSelected ? "#ECF1F4" : "#fff",
					color: state.isSelected ? "#0E0E2C" : "#4A4A68",
				}),
			}}
		/>
	);
};

export default CustomSelect;
