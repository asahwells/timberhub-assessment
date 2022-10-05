import { Products } from "../../../data/Product";

export default function handler(req: any, res: any) {
	if (req.method === "GET") {
		res.status(200).json(Products);
	} else if (req.method === "POST") {
		console.log(req.body);
		const product = req.body;
		const finalProduct = product;
		Products.push(finalProduct);
		res.status(201).json(finalProduct);
		// console.log(res);
	}
}
