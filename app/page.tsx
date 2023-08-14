"use client";

import React, { useState, useEffect } from "react";

import { fetchWordList } from "@/utils/api";

import SearchInput from "@/components/SearchInput";
import RelatedWords from "@/components/RelatedWords";

const Home: React.FC = () => {
	const [wordList, setWordList] = useState<string[]>([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [relatedWords, setRelatedWords] = useState<string[]>([]);

	useEffect(() => {
		const fetchWords = async () => {
			const words = await fetchWordList();
			setWordList(words);
		};

		fetchWords();
	}, []);

	const handleSearch = (query: string) => {
		setSearchQuery(query);

		const matchedWords = wordList.filter((word) =>
			word.toLowerCase().includes(query.toLowerCase())
		);

		setRelatedWords(matchedWords);
	};

	return (
		<main className="lg:min-h-screen min-h-[200vh] bg-[#161B40]">
			<div className="lg:min-h-screen min-h-[200vh] min-w-full flex flex-col items-center gap-y-10 md:px-24 px-4 pt-24 pb-2 z-[1] relative bg-transparent">
				<h1 className="font-bold text-8xl text-[#43BEE5]">
					m<span className="text-white">oai</span>
				</h1>
				<SearchInput onSearch={handleSearch} wordList={wordList} />
				{relatedWords.length > 0 && <RelatedWords words={relatedWords} />}
			</div>
			<div className="lg:min-h-screen min-h-[200vh] min-w-full flex flex-row items-center justify-center overflow-hidden absolute top-0 z-0">
				<div className="shape-blob"></div>
				<div className="shape-blob one"></div>
				<div className="shape-blob two"></div>
			</div>
		</main>
	);
};

export default Home;
