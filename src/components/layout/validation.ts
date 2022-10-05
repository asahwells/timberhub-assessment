/* eslint-disable import/no-unused-modules */
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const createProduct = yupResolver(
	yup.object().shape({
		usage: yup
			.object()
			.shape({
				label: yup.string().required("Please select a field"),
				value: yup.string().required("Please select a field"),
			})
			.nullable()
			.required("Please select a field")
			.typeError("Please select a field"),
		species: yup
			.object()
			.shape({
				label: yup.string().required("Please select a field"),
				value: yup.string().required("Please select a field"),
			})
			.nullable()
			.required("Please select a field")
			.typeError("Please select a field"),
		drying: yup
			.object()
			.shape({
				label: yup.string().required("Please select a field"),
				value: yup.string().required("Please select a field"),
			})
			.nullable()
			.required("Please select a field")
			.typeError("Please select a field"),
		grade: yup
			.object()
			.shape({
				label: yup.string().required("Please select a field"),
				value: yup.string().required("Please select a field"),
			})
			.nullable()
			.required("Please select a field")
			.typeError("Please select a field"),
		treatment: yup
			.object()
			.shape({
				label: yup.string().required("Please select a field"),
				value: yup.string().required("Please select a field"),
			})
			.nullable()
			.required("Please select a field")
			.typeError("Please select a field"),
	})
);

const validation = {
	createProduct,
};

export default validation;
