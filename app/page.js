"use client";
import React, { useState } from "react";

const page = () => {
	const [Title, setTitle] = useState("");
	const [Desc, setDesc] = useState("");
	const [MainTask, setMainTask] = useState([]);
	const [Complete, setComplete] = useState([]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (Title != "" && Desc != "") {
			setMainTask([...MainTask, { Title, Desc }]); //Old Task[...MainTask] + new Task {Title,Desc}
		}
		setTitle("");
		setDesc("");
	};

	let renderTask = (
		<h2 className="text-center text-slate-600 mt-3 text-4xl ">
			No Tasks Pending
		</h2>
	);

	if (MainTask.length > 0) {
		renderTask = MainTask.map((e, i) => {
			return (
				<div
					key={i} //This is Important
					className="flex flex-col p-3 justify-between items-center min-h-44 w-64 rounded-3xl m-10 bg-zinc-800">
					<div className="text-3xl font-semibold">
						(Task {i + 1}) <div className="text-center">{e.Title}</div>
					</div>
					<div className="text-left pt-1 pb-3 text-lg min-w-full">{e.Desc}</div>
					<div className="flex w-full justify-evenly">
						<button
							className="bg-red-600 mr-2 p-1 rounded-md text-black"
							onClick={() => {
								//Create Arrow Function (Not Automatically Call)
								deleteHandler(i);
							}}>
							Delete
						</button>
						<button
							className="bg-green-500 p-1 rounded-md text-black"
							onClick={() => {
								//Create Arrow Function (Not Automatically Call)
								completeHandler(i);
							}}>
							Complete
						</button>
					</div>
				</div>
			);
		});
	}

	let completeTask = (
		<h2 className="text-center text-slate-600 mt-3 text-4xl ">
			No Tasks Completed
		</h2>
	);

	if (Complete.length > 0) {
		completeTask = Complete.map((e, i) => {
			return (
				<div
					key={i} //This is Important
					className="flex flex-col p-3 justify-between items-center min-h-44 w-64 rounded-3xl m-10 bg-zinc-800">
					<div className="text-3xl font-semibold">
						{" "}
						{e.Title}
					</div>
					<div className="text-left pt-1 pb-3 text-lg min-w-full">{e.Desc}</div>
					<div className="flex w-full justify-evenly">
						<button
							className="bg-red-600 mr-2 p-1 rounded-md text-black"
							onClick={() => {
								//Create Arrow Function (Not Automatically Call)
								deleteComplete(i);
							}}>
							Delete
						</button>
					</div>
				</div>
			);
		});
	}
	const deleteComplete = (i) => {
		let copyTask = [...Complete];
		copyTask.splice(i, 1);
		setComplete(copyTask);
	};

	const deleteHandler = (i) => {
		let copyTask = [...MainTask];
		copyTask.splice(i, 1);
		setMainTask(copyTask);
	};

	const completeHandler = (i) => {
		let copyTask = [...MainTask];
		let [a] = copyTask.splice(i, 1);
		setComplete([...Complete, a]);
		setMainTask(copyTask);
	};

	return (
		<>
			<div className="text-center mt-4 text-white text-6xl font-semibold">
				Prabhjeet's ToDo List
			</div>
			<form className=" mt-10 text-xl " onSubmit={submitHandler}>
				<div className="flex flex-col items-center bg-zinc-900 p-6 rounded-xl">
					<input
						type="text"
						className="border-zinc-700 bg-zinc-800 outline-none  py-5 px-4 rounded-xl text-white m-2 border-2 w-80"
						placeholder="Enter Title"
						value={Title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
					<textarea
						type="text"
						className="border-zinc-700 bg-zinc-800 resize-none outline-none pt-2 pb-5 px-4 rounded-xl text-white m-2 border-2 w-80"
						placeholder="Enter Task Description"
						value={Desc}
						onChange={(e) => {
							setDesc(e.target.value);
						}}
					/>
					<button className="bg-yellow-500 text-gray-950 py-2 px-6 rounded-lg mt-4">
						Add Task
					</button>
				</div>
			</form>

			<hr className="border-zinc-700" />
			<div className="text-center m-4 text-3xl">Tasks Pending</div>
			<div className="m-2 flex  flex-wrap mt-5">{renderTask}</div>

			<hr className="border-zinc-700" />
			<div className="text-center text-green-500 m-4 text-3xl">
				Completed Tasks
			</div>
			<div className="m-2 flex  flex-wrap mt-5">{completeTask}</div>
		</>
	);
};

export default page;
