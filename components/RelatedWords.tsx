"use client";

import React from "react";

interface RelatedWordsProps {
	words: string[];
}

const RelatedWords: React.FC<RelatedWordsProps> = ({ words }) => {
	return (
		<div className="w-full h-full flex flex-col gap-y-5">
			<p className="font-semibold text-3xl text-white">Related words</p>
			<div className="bg-white/40 backdrop-filter backdrop-blur-lg rounded-md">
				<ul className="grid lg:grid-cols-10 md:grid-cols-4 grid-cols-2 lg:h-[360px] h-[500px] overflow-y-scroll md:pl-10 pl-5 py-6 gap-y-3 scrollbar scrollbar-w-1 scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-track-transparent scrollbar-thumb-[#43BEE5]">
					{words.map((word, index) => (
						<li key={index}>{word}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default RelatedWords;
