import React, {
	Dispatch,
	SetStateAction,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import Timberhub from "./svg/timberhub.svg";
import Search from "./svg/search.svg";
// import Drawer from "./layout/Drawer";
import dynamic from "next/dynamic";
import Table from "./layout/Table";
import NewDrawer from "./NewDrawer";
import { UseProduct } from "./Context";

export interface ProductProps {
	id: string;
	created: string;
	usage: string;
	species: string;
	drying_method: string;
	grade: string;
	treatment: string;
	dimensions: [
		{
			thickness: number;
			width: number;
			length: number;
		},
		{
			thickness: number;
			width: number;
			length: number;
		}
	];
}
export interface ProductContextTypes {
	product: ProductProps[];
	setProduct: Dispatch<SetStateAction<ProductProps[]>>;
	fetchData: () => void;
}
const HomePage = () => {
	const { product, setProduct, fetchData } = UseProduct();
	const [isOpen, setIsOpen] = useState(false);
	const [search, setSearch] = useState("");

	// const fetchData = async () => {
	// 	const data = await fetch("/api/products");
	// 	const json = await data.json();
	// 	setProduct(json);
	// };
	useEffect(() => {
		fetchData();
	}, []);
	const filteredProduct = useMemo<ProductProps[]>(() => {
		if (search) {
			const newProduct = product?.filter((val) =>
				val.usage.toLowerCase().includes(search.toLowerCase())
			);
			return newProduct;
		}
		return product;
	}, [search, product]);
	return (
		<main className="max-w-screen">
			<div>
				<div className="py-[10px] pl-[19px] shadow-lg">
					<Timberhub />
				</div>
				<div className="px-[34px]">
					<div className="flex pt-[19px] pb-[27px] justify-between items-center">
						<div className="font-title text-4xl text-center mr-4">
							All Products
						</div>
						<div>
							<button
								className="text-black font-title text-lg rounded-lg px-4 py-2 border-2 border-[#23D899]"
								onClick={() => setIsOpen(true)}
							>
								+ Create Product
							</button>
						</div>
						{/* <Drawer /> */}
					</div>
					<NewDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
					<div className="relative mb-6">
						<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
							<Search />
						</div>
						<input
							type="search"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							id="input-group-1"
							className="bg-gray-50 border border-[#D5D5D5] text-black text-sm rounded-lg block w-full pl-10 p-2.5  dark:border-[#D5D5D5] dark:placeholder-[#D5D5D5]"
							placeholder="Search"
						/>
					</div>
					<Table products={filteredProduct} />
				</div>
			</div>
		</main>
	);
};

export default HomePage;
