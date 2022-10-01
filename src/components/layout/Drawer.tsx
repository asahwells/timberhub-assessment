import React from "react";
import "flowbite";
import Divider from "./Divider";
import Wood from "../Wood";
import Specification from "../Specification";
import Dimension from "../Dimension";

const Drawer = () => {
	return (
		<>
			<div className="text-center">
				<button
					className="text-black font-title text-lg rounded-lg px-4 py-2 border-2 border-[#23D899]"
					type="button"
					data-drawer-backdrop="true"
					data-drawer-target="drawer-right-example"
					data-drawer-show="drawer-right-example"
					data-drawer-placement="right"
					aria-controls="drawer-right-example"
				>
					+ Create Product
				</button>
			</div>

			<div
				id="drawer-right-example"
				className="fixed z-40 h-screen tablet:w-2/4 p-4 overflow-y-auto cell:w-80 bg-white dark:bg-gray-800 transition-transform right-0 top-0 translate-x-full px-5"
				tabIndex={-1}
				data-drawer-backdrop="true"
				aria-labelledby="drawer-right-label"
				aria-hidden="true"
			>
				<div
					id="drawer-right-label"
					className="inline-flex items-center mb-4 text-base font-semibold text-gray-500"
				>
					<p className="font-title text-[33px] text-black mt-5">
						Create Product
					</p>
				</div>
				<Divider />
				<Wood />
				<Specification />
				<Dimension />
			</div>
		</>
	);
};

export default Drawer;
