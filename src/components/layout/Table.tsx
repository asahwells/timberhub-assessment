import React from "react";
import Wood from "../svg/wood.svg";
import Divider from "./Divider";
const Table = () => {
	return (
		<>
			<div className="grid grid-cols-2 gap-2 mb-[17px]">
				<div className="text-[#707786] flex tablet:flex-row cell:flex-col items-baseline mb-[13px]">
					<p className="font-body text-base"> Product </p>
					<p className="text-xs font-body">(Species, Grade, Drying)</p>
				</div>
				<div className="text-[#707786] flex tablet:flex-row cell:flex-col items-baseline text-center ">
					<p className="font-body text-base"> Dimension </p>
					<p className="text-xs font-body">(Thicknessxwidth)</p>
				</div>

				<div className="text-[#707786] flex flex-row items-center">
					<div>
						<Wood />
					</div>
					<div className="flex flex-col ml-[22px] ">
						<p>Spruce, Nordic Blue, KD</p>
						<div className="flex tablet:flex-row cell:flex-col">
							<p className="text-[#67D59E] font-body text-xs mr-1">#00010072</p>
							<p className="font-body text-xs">31. August 2022</p>
						</div>
					</div>
				</div>
				<div className="text-[#707786] flex tablet:flex-row cell:flex-col items-baseline text-center ">
					<div className="px-[4px] bg-[#F4F4F6] flex flex-row rounded-md mb-2 mr-1">
						<p className="mx-[6px] text-[#707786]">1</p>
						<p className="text-[#1F2937]">16x1050</p>
					</div>
					<div className="px-[4px] bg-[#F4F4F6] flex flex-row rounded-md mb-2 mr-1">
						<p className="mx-[6px] text-[#707786]">2</p>
						<p className="text-[#1F2937]">16x1050</p>
					</div>
					<div className="px-[4px] bg-[#F4F4F6] flex flex-row rounded-md mb-2 mr-1">
						<p className="mx-[6px] text-[#707786]">3</p>
						<p className="text-[#1F2937]">16x1050</p>
					</div>
				</div>
			</div>
			<Divider />
		</>
	);
};
export default Table;

//  <table className="w-full justify-center table-fixed">
//  			<thead>
//  				<tr className="">
//  					<th>
//  						<div className="text-[#707786] flex flex-row items-baseline">
//  							<p className="font-body text-base"> Product </p>
//  							<p className="text-xs font-body">(Species, Grade, Drying)</p>
//  						</div>
//  					</th>
//  					<th>
//  						<div className="text-[#707786] flex flex-row items-baseline text-center ">
//  							<p className="font-body text-base"> Dimension </p>
//  							<p className="text-xs font-body">(Thicknessxwidth)</p>
//  						</div>
//  					</th>
//  				</tr>
//  			</thead>
//  			<tbody>
//  				<tr>
//  					<td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
//  					<td>Malcolm Lockyer</td>
//  				</tr>
//  				<tr>
//  					<td>Witchy Woman</td>
//  					<td>The Eagles</td>
//  				</tr>
//  				<tr>
//  					<td>Shining Star</td>
//  					<td>Earth, Wind, and Fire</td>
//  				</tr>
//  			</tbody>
//  		</table>
