import React, { useState } from "react";
import "flowbite";
import CustomSelect from "../layout/CustomSelect";
import Divider from "../layout/Divider";
import Woods from "../svg/wood.svg";
import { usage, species } from "../select-data";
import { Controller, useForm } from "react-hook-form";
import Specifications from "../svg/specification.svg";
import Dimension from "../svg/dimension.svg";
import CloseIcon from "../svg/closeIcon.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validation from "./validation";

const DEFAULT_INPUT_FIELD = {
	thickness: "",
	width: "",
	length: "",
};
const Drawer = () => {
	interface IFormValue {
		usage: { label: string; value: string };
		species: { label: string; value: string };
		drying: { label: string; value: string };
		grade: { label: string; value: string };
		treatment: { label: string; value: string };
		width: { value: string };
	}
	const [dimensions, setDimensions] = useState<
		{
			thickness: string;
			width: string;
			length: string;
		}[]
	>([{ ...DEFAULT_INPUT_FIELD }]);
	const filter = () => {
		return dimensions
			.map((v) => Object.values(v).filter((c) => !c).length)
			.filter(Boolean).length;

		// const tii = dimensions.map(r =>
		//   r.thickness &&
		//   r.width &&
		//   r.length &&
		//     ? 'yes'
		//     : 'no',
		// );
		// if (tii.filter(r => r === 'yes').length === dimensions.length) {
		//   return true;
		// } else {
		//   return false;
		// }
	};
	const {
		control,
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormValue>({
		resolver: validation.createProduct,
	});
	const onSubmit = async (data: IFormValue) => {
		// console.log(errors);
		if (!filter()) {
			const res = await fetch("/api/products", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					id: Date.now(),
					created: Date.now(),
					usage: data.usage.value,
					species: data.species.value,
					drying_method: data.drying.value,
					grade: data.grade.value,
					treatment: data.treatment.value,
					dimensions: [
						...dimensions,
						// {
						// 	thickness: dimensions.thickness,
						// 	width: dimensions.width,
						// 	length: dimensions.length,
						// },
					],
				}),
			});
			if (res.ok) {
				toast.success("Succesfully updated");
				setDimensions([DEFAULT_INPUT_FIELD]);
				reset();
			} else {
				toast.error("Try again.. there was an error");
			}
			// console.log(res);
		} else {
			toast.error("Please fill all fields");
		}
	};

	const handleInput = (
		e: React.ChangeEvent<HTMLInputElement>,
		index: number,
		field: string
	) => {
		let datax = [...dimensions];
		datax[index][field] = e.target.value;
		setDimensions(datax);
	};
	// console.log(dimensions);
	return (
		<>
			<button
				className="text-black font-title text-lg rounded-lg px-4 py-2 border-2 border-[#23D899]"
				data-drawer-backdrop="true"
				data-drawer-target="drawer-right-example"
				data-drawer-show="drawer-right-example"
				data-drawer-placement="right"
				aria-controls="drawer-right-example"
			>
				+ Create Product
			</button>

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
					<button
						type="button"
						aria-hidden="true"
						data-drawer-dismiss="drawer-right-example"
						aria-controls="drawer-right-example"
						className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
					>
						<CloseIcon />
						<span className="sr-only">Close menu</span>
					</button>
				</div>

				<Divider />
				<form onSubmit={handleSubmit(onSubmit)}>
					{/* wood */}
					<div>
						<div>
							<div className="flex flex-row items-center">
								<Woods />

								<p className="font-title text-2xl ml-5"> Sawn Timber</p>
							</div>
							<div className="mt-[13px] flex flex-row justify-between space-x-2 mb-[65px]">
								<p className="text-sm font-body w-full">
									<p className="text-base font-title">Usage *</p>
									<Controller
										control={control}
										rules={{ required: true }}
										render={({ field: { onChange, onBlur, value } }) => (
											<CustomSelect
												onBlur={onBlur}
												isClearable
												value={{ value, label: value?.label }}
												onChange={(val: any) => onChange(val)}
												placeholder="select"
												options={usage}
											/>
										)}
										name="usage"
									/>
									<span className="text-red-600 text-xs pl-2 block">
										{errors.usage && errors.usage.message}
									</span>

									<p className="text-[#939393] font-title text-[11px] mt-1">
										This will help us find what fits best to your needs.
									</p>
								</p>

								<p className="text-sm font-body  w-full">
									<p className="text-base font-title">Wood species *</p>
									<Controller
										control={control}
										render={({ field: { onChange, onBlur, value } }) => (
											<CustomSelect
												// onBlur={onBlur}
												isClearable
												value={{ value, label: value?.label }}
												onChange={(val: any) => onChange(val)}
												placeholder="select"
												options={species}
											/>
										)}
										name="species"
									/>
									<span className="text-red-600 text-xs pl-2 block">
										{errors.species && errors.species.message}
									</span>
								</p>
							</div>
						</div>
						<Divider />
					</div>
					{/* specification */}
					<div>
						<div>
							<div className="flex flex-row items-center">
								<Specifications />

								<p className="font-title text-2xl ml-5"> Sawn Timber</p>
							</div>
							<div className="mt-[13px] grid cell:grid-cols-2 tablet:grid-cols-3 gap-2 mb-[65px]">
								<p className="text-sm font-body w-full">
									<p className="text-base font-title">Drying *</p>
									<Controller
										control={control}
										render={({ field: { onChange, onBlur, value } }) => (
											<CustomSelect
												// onBlur={onBlur}
												isClearable
												value={{ value, label: value?.label }}
												onChange={(val: any) => onChange(val)}
												placeholder="select"
												options={species}
											/>
										)}
										name="drying"
									/>
									<span className="text-red-600 text-xs pl-2 block">
										{errors.drying && errors.drying.message}
									</span>
								</p>

								<p className="text-sm font-body  w-full">
									<p className="text-base font-title">Grade *</p>
									<Controller
										control={control}
										render={({ field: { onChange, onBlur, value } }) => (
											<CustomSelect
												// onBlur={onBlur}
												isClearable
												value={{ value, label: value?.label }}
												onChange={(val: any) => onChange(val)}
												placeholder="select"
												options={species}
											/>
										)}
										name="grade"
									/>
									<span className="text-red-600 text-xs pl-2 block">
										{errors.grade && errors.grade.message}
									</span>
								</p>
								<p className="text-sm font-body  w-full">
									<p className="text-base font-title">Treatment *</p>
									<Controller
										control={control}
										render={({ field: { onChange, onBlur, value } }) => (
											<CustomSelect
												// onBlur={onBlur}
												isClearable
												value={{ value, label: value?.label }}
												onChange={(val: any) => onChange(val)}
												placeholder="select"
												options={species}
											/>
										)}
										name="treatment"
									/>
									<span className="text-red-600 text-xs pl-2 block">
										{errors.treatment && errors.treatment.message}
									</span>
								</p>
							</div>
						</div>
						<Divider />
					</div>
					{/* dimension */}
					<div>
						<div className="flex flex-row items-center justify-between">
							<div className="flex flex-row items-center">
								<Dimension />

								<p className="font-title text-2xl ml-5"> Sawn Timber</p>
							</div>
							<div
								className="text-[#20BE87]"
								onClick={() =>
									setDimensions((prev) => [...prev, { ...DEFAULT_INPUT_FIELD }])
								}
							>
								+ Add another set
							</div>
						</div>
						{dimensions.map((val, index) => (
							<div key={index}>
								{index > 0 && (
									<div
										className="w-5 h-5"
										onClick={() => {
											let data = [...dimensions];
											data.splice(index, 1);
											setDimensions(data);
										}}
									>
										<CloseIcon />
									</div>
								)}

								<div className="mt-[13px] grid cell:grid-cols-2 tablet:grid-cols-3 gap-2 mb-[65px]">
									<div className="text-sm font-body w-full">
										<p className="text-base font-title">Thickness *</p>

										<input
											type="text"
											className="mb-3 w-full"
											value={val.thickness}
											onChange={(e) => handleInput(e, index, "thickness")}
										/>
									</div>

									<p className="text-sm font-body">
										<div className="text-base font-title">Width *</div>
										<input
											type="text"
											className="mb-3 w-full"
											value={val.width}
											onChange={(e) => handleInput(e, index, "width")}
										/>
									</p>
									<p className="text-sm font-body">
										<div className="text-base font-title">Length *</div>
										<input
											type="text"
											className="mb-3 w-full"
											value={val.length}
											onChange={(e) => handleInput(e, index, "length")}
										/>
									</p>
								</div>
							</div>
						))}
						<ToastContainer />
					</div>

					<div className="flex flex-row justify-between mb-9">
						<button
							type="submit"
							aria-hidden="true"
							data-drawer-dismiss="drawer-right-example"
							aria-controls="drawer-right-example"
						>
							Close
						</button>
						<button>Create Product</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Drawer;
