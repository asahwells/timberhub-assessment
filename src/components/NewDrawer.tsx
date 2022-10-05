import React, { FC, useContext, useEffect, useState } from "react";
import CustomSelect from "./layout/CustomSelect";
import Divider from "./layout/Divider";
import Woods from "./svg/wood.svg";
import { usage, species, drying, treatment, grade } from "./select-data";
import { Controller, useForm } from "react-hook-form";
import Specifications from "./svg/specification.svg";
import Dimension from "./svg/dimension.svg";
import CloseIcon from "./svg/closeIcon.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validation from "./layout/validation";
import { UseProduct } from "./Context";

interface Iprops {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const DEFAULT_INPUT_FIELD = {
	thickness: "",
	width: "",
	length: "",
};
const NewDrawer: FC<Iprops> = ({ isOpen, setIsOpen }) => {
	const { fetchData } = UseProduct();
	interface IFormValue {
		usage: { label: string; value: string };
		species: { label: string; value: string };
		drying: { label: string; value: string };
		grade: { label: string; value: string };
		treatment: { label: string; value: string };
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
	console.log(dimensions);
	const {
		control,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormValue>({
		resolver: validation.createProduct,
	});
	const onSubmit = async (data: IFormValue) => {
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
				fetchData();
				toast.success("Succesfully updated");
				setDimensions([DEFAULT_INPUT_FIELD]);
				setIsOpen(false);
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
		field: "thickness" | "width" | "length"
	) => {
		let data = [...dimensions];
		data[index][field] = e.target.value;
		setDimensions(data);
	};
	return (
		<div>
			<main
				className={
					" fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
					(isOpen
						? " transition-opacity opacity-100 duration-500 translate-x-0  "
						: " transition-all delay-500 opacity-0 translate-x-full  ")
				}
			>
				<section
					className={
						" w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
						(isOpen ? " translate-x-0 " : " translate-x-full ")
					}
				>
					<article className="relative w-screen max-w-lg flex flex-col space-y-6 overflow-y-scroll h-full p-4">
						<div>
							<p className="font-title text-[33px] text-black mt-[19px] mb-[9px]">
								Create Product
							</p>
							<Divider />
						</div>
						<div>
							<form onSubmit={handleSubmit(onSubmit)}>
								{/* wood */}
								<div>
									<div>
										<div className="flex flex-row items-center -mt-7">
											<Woods />

											<p className="font-title text-2xl ml-5"> Sawn Timber</p>
										</div>
										<div className="mt-[13px] flex flex-row justify-between space-x-2 mb-[65px]">
											<div className="text-sm font-body w-full">
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
													{errors.usage && errors?.usage?.value?.message}
												</span>

												<p className="text-[#939393] font-title text-[11px] mt-1">
													This will help us find what fits best to your needs.
												</p>
											</div>

											<div className="text-sm font-body  w-full">
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
													{errors.species && errors?.species?.value?.message}
												</span>
											</div>
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
											<div className="text-sm font-body w-full">
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
															options={drying}
														/>
													)}
													name="drying"
												/>
												<span className="text-red-600 text-xs pl-2 block">
													{errors.drying && errors?.drying?.value?.message}
												</span>
											</div>

											<div className="text-sm font-body  w-full">
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
															options={grade}
														/>
													)}
													name="grade"
												/>
												<span className="text-red-600 text-xs pl-2 block">
													{errors?.grade && errors?.grade?.value?.message}
												</span>
											</div>
											<div className="text-sm font-body  w-full">
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
															options={treatment}
														/>
													)}
													name="treatment"
												/>
												<span className="text-red-600 text-xs pl-2 block">
													{errors?.treatment &&
														errors?.treatment?.value?.message}
												</span>
											</div>
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
												setDimensions((prev) => [
													...prev,
													{ ...DEFAULT_INPUT_FIELD },
												])
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
														// name="thickness"
														type="text"
														className="mb-3 w-full"
														value={val.thickness}
														onChange={(e) => handleInput(e, index, "thickness")}
													/>
												</div>

												<div className="text-sm font-body">
													<div className="text-base font-title">Width *</div>
													<input
														name="width"
														type="text"
														className="mb-3 w-full"
														value={val.width}
														onChange={(e) => handleInput(e, index, "width")}
													/>
												</div>
												<div className="text-sm font-body">
													<div className="text-base font-title">Length *</div>
													<input
														name="length"
														type="text"
														className="mb-3 w-full"
														value={val.length}
														onChange={(e) => handleInput(e, index, "length")}
													/>
												</div>
											</div>
										</div>
									))}
								</div>

								<div className="flex flex-row justify-between mb-9 ">
									<button
										type="submit"
										className=" text-black text-sm font-title font-bold uppercase"
										onClick={() => setIsOpen(false)}
									>
										Close
									</button>
									<button
										type="submit"
										className="px-4 py-2 bg-[#23D899] text-black text-sm font-title font-bold uppercase"
									>
										Create Product
									</button>
								</div>
								<ToastContainer />
							</form>
						</div>
					</article>
				</section>

				<section
					className=" w-screen h-full cursor-pointer "
					onClick={() => {
						setIsOpen(false);
					}}
				></section>
			</main>
		</div>
	);
};

export default NewDrawer;
