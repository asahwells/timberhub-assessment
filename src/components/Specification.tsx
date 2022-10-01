import React from "react";
import CustomSelect from "./layout/CustomSelect";
import Specifications from "./svg/specification.svg";
import Divider from "./layout/Divider";

const Specification = () => {
	return (
		<div>
			<div>
				<div className="flex flex-row items-center">
					<Specifications />

					<p className="font-title text-2xl ml-5"> Sawn Timber</p>
				</div>
				<div className="mt-[13px] flex flex-row justify-between space-x-2 mb-[65px]">
					<p className="text-sm font-body w-full">
						<p className="text-base font-title">Drying *</p>
						<CustomSelect
							// onBlur={onBlur}
							// value={{ value, label: value?.label }}
							// onChange={(val: any) => onChange(val)}
							placeholder="select"
							// options={optionsPatient}
						/>
					</p>

					<p className="text-sm font-body  w-full">
						<p className="text-base font-title">Grade *</p>
						<CustomSelect
							// onBlur={onBlur}
							// value={{ value, label: value?.label }}
							// onChange={(val: any) => onChange(val)}
							placeholder="select"
							// options={optionsPatient}
						/>
					</p>
					<p className="text-sm font-body  w-full">
						<p className="text-base font-title">Treatment *</p>
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
			<Divider />
		</div>
	);
};

export default Specification;
