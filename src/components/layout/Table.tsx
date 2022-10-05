import React, { FC } from "react";
import { ProductProps } from "../Home";
import Wood from "../svg/wood.svg";
import Divider from "./Divider";

interface TableProps {
	products: ProductProps[];
}

const Table: FC<TableProps> = ({ products }) => {
	return (
		<>
			<div className="overflow-x-auto relative">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="">
						<tr>
							<th scope="col" className="py-3 px-6">
								<div className="text-[#707786] flex tablet:flex-row cell:flex-col flex-col items-baseline mb-[13px]">
									<p className="font-body text-xs font-light"> Product </p>
									<p className="text-[8px] font-body font-light">
										(Species, Grade, Drying)
									</p>
								</div>
							</th>
							<th scope="col" className="py-3 px-6">
								<div className="text-[#707786] flex tablet:flex-row cell:flex-col items-baseline text-center ">
									<p className="font-body text-xs font-light"> Dimension </p>
									<p className="text-[8px] font-body font-light">
										(Thicknessxwidth)
									</p>
								</div>
							</th>
						</tr>
					</thead>
					{products?.map((produce) => (
						<tbody key={produce?.id}>
							<tr className="bg-white border-b ">
								<th
									scope="row"
									className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									<div className="text-[#000000] flex flex-row items-center">
										<div>
											<Wood />
										</div>
										<div className="flex flex-col ml-[22px] ">
											<div className="">
												<p className="capitalize">
													{produce?.species}, {`${produce?.grade}`}{" "}
													{`${produce?.drying_method}`}
												</p>
											</div>
											<div className="flex tablet:flex-row cell:flex-col">
												<p className="text-[#67D59E] font-body text-xs mr-1 font-light">
													{produce?.id}
												</p>
												<p className="font-body text-xs text-[#707786] font-light">
													{produce?.created}
												</p>
											</div>
										</div>
									</div>
								</th>
								<td className="py-4 px-4">
									<div className="text-[#707786] flex tablet:flex-row cell:flex-col items-baseline text-center">
										{produce?.dimensions.slice(0, 3).map((dimension, index) => (
											<div
												className="py-[4px] bg-[#F4F4F6] flex flex-row flex-wrap rounded-md mb-2 mr-1 font-light text-xs"
												key={index}
											>
												<p className="px-1 text-[#707786] opacity-30">
													{index + 1}
												</p>
												<p className="text-[#1F2937] pr-[9px]">
													{dimension.thickness} x {dimension.width}
												</p>
											</div>
										))}
										{produce.dimensions.length > 3 && (
											<div className="py-[4px] bg-[#F4F4F6] px-1 flex flex-row rounded-md mb-2 mr-1 font-light text-xs">
												<p className="text-[#1F2937] pr-[9px] ">
													+ {produce.dimensions.length - 3} more sets
												</p>
											</div>
										)}
									</div>
								</td>
							</tr>
						</tbody>
					))}
				</table>
			</div>

			<Divider />
		</>
	);
};
export default Table;

{
	/* <div className="grid grid-cols-2 gap-2 mb-[17px]">
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
</div>; */
}
