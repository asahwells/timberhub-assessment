import { createContext, ReactNode, useContext, useState } from "react";
import { ProductContextTypes, ProductProps } from "./Home";
const ProductDefaultValues: ProductContextTypes = {
	product: [],
	fetchData: () => {},
	setProduct: () => null,
};
const ProductProvider =
	createContext<ProductContextTypes>(ProductDefaultValues);
export const UseProduct = () => {
	return useContext(ProductProvider);
};
type Props = {
	children: ReactNode;
};

export function ProductContextProvider({ children }: Props) {
	const [product, setProduct] = useState<ProductProps[]>([]);
	const fetchData = async () => {
		const data = await fetch("/api/products");
		const json = await data.json();
		setProduct(json);
	};
	const value = {
		product,
		setProduct,
		fetchData,
	};
	return (
		<>
			<ProductProvider.Provider value={value}>
				{children}
			</ProductProvider.Provider>
		</>
	);
}
