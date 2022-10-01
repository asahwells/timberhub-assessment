import React from "react";
import CustomSelect from "./layout/CustomSelect";
import Dimensions from "./svg/dimension.svg";
const Dimension = () => {
	return (
		<div>
			<div className="flex flex-row items-center justify-between">
				<div className="flex flex-row items-center">
					<Dimensions />

					<p className="font-title text-2xl ml-5"> Sawn Timber</p>
				</div>
				<button className="text-[#20BE87]"> + Add another set</button>
			</div>
			<div className="mt-[13px] flex flex-row justify-between space-x-2 mb-[65px]">
				<p className="text-sm font-body w-full">
					<p className="text-base font-title">Thickness *</p>
					<CustomSelect
						// onBlur={onBlur}
						// value={{ value, label: value?.label }}
						// onChange={(val: any) => onChange(val)}
						placeholder="select"
						// options={optionsPatient}
					/>
				</p>

				<p className="text-sm font-body  w-full">
					<p className="text-base font-title">Width *</p>
					<CustomSelect
						// onBlur={onBlur}
						// value={{ value, label: value?.label }}
						// onChange={(val: any) => onChange(val)}
						placeholder="select"
						// options={optionsPatient}
					/>
				</p>
				<p className="text-sm font-body  w-full">
					<p className="text-base font-title">Height *</p>
					<CustomSelect
						// onBlur={onBlur}
						// value={{ value, label: value?.label }}
						// onChange={(val: any) => onChange(val)}
						placeholder="select"
						// options={optionsPatient}
					/>
				</p>
			</div>
		</div>
	);
};

export default Dimension;
