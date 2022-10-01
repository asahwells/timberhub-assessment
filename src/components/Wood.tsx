import React from "react";
import CustomSelect from "./layout/CustomSelect";
import Divider from "./layout/Divider";
import Woods from "./svg/wood.svg";
const Wood = () => {
	return (
		<div>
			<div>
				<div className="flex flex-row items-center">
					<Woods />

					<p className="font-title text-2xl ml-5"> Sawn Timber</p>
				</div>
				<div className="mt-[13px] flex flex-row justify-between space-x-2 mb-[65px]">
					<p className="text-sm font-body w-full">
						<p className="text-base font-title">Usage *</p>
						<CustomSelect
							// onBlur={onBlur}
							// value={{ value, label: value?.label }}
							// onChange={(val: any) => onChange(val)}
							placeholder="select"
							// options={optionsPatient}
						/>
						<p className="text-[#939393] font-title text-[11px] mt-1">
							This will help us find what fits best to your needs.
						</p>
					</p>

					<p className="text-sm font-body  w-full">
						<p className="text-base font-title">Wood species *</p>
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

export default Wood;
