import React from "react";
import Timberhub from "./svg/timberhub.svg";
import Search from "./svg/search.svg";
// import Drawer from "./layout/Drawer";
import dynamic from "next/dynamic";
import Table from "./layout/Table";

const Drawer = dynamic(() => import("./layout/Drawer"), {
	ssr: false,
});
const HomePage = () => {
	return (
		<main className="max-w-screen">
			<div>
				<div className="py-[10px] pl-[19px] shadow-lg">
					<Timberhub />
				</div>
				<div className="px-[34px]">
					<div className="flex pt-[19px] pb-[27px] justify-between items-center ">
						<div className="font-title text-4xl text-center mr-4">
							All Products
						</div>
						<Drawer />
					</div>
					<div className="relative mb-6">
						<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
							<Search />
						</div>
						<input
							type="search"
							id="input-group-1"
							className="bg-gray-50 border border-[#D5D5D5] text-black text-sm rounded-lg block w-full pl-10 p-2.5  dark:border-[#D5D5D5] dark:placeholder-[#D5D5D5]"
							placeholder="Search"
						/>
					</div>
					<Table />
				</div>
			</div>
		</main>
	);
};

export default HomePage;
