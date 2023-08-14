"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";

interface SearchInputProps {
	onSearch: (query: string) => void;
	wordList: string[];
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch, wordList }) => {
	const [inputValue, setInputValue] = useState("");
	const [suggestions, setSuggestions] = useState<string[]>([]);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);

		const MAX_SUGGESTIONS = 15;

		const filteredSuggestions = wordList
			.filter((word) => word.toLowerCase().startsWith(event.target.value.toLowerCase()))
			.slice(0, MAX_SUGGESTIONS);

		if (event.target.value.length) {
			setSuggestions(filteredSuggestions);
		} else {
			setSuggestions([]);
		}
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSearch(inputValue);
		setInputValue("");
		setSuggestions([]);
	};

	return (
		<div className="w-full flex justify-center">
			<div className="lg:w-6/12 w-full flex flex-col relative">
				<div
					className={`relative flex items-center w-full h-14 rounded-t-lg ${
						suggestions.length ? "rounded-b-none" : "rounded-b-lg"
					} bg-white overflow-hidden`}
				>
					<div className="grid place-items-center h-full w-12 text-gray-300">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</div>
					<form onSubmit={handleSubmit}>
						<input
							className="peer h-full w-full outline-none text-lg text-gray-700 pr-2"
							type="text"
							value={inputValue}
							onChange={(e) => handleInputChange(e)}
							placeholder="Search..."
						/>
					</form>
				</div>
				<div
					className={`absolute w-full z-[2] px-12 bg-white rounded-b-lg pb-2 top-[56px] ${
						suggestions.length ? "block" : "hidden"
					}`}
				>
					<ul>
						{suggestions.map((suggestion, index) => (
							<li key={index}>{suggestion}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SearchInput;
