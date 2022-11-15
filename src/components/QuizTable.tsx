import React from 'react'

const altTextForEntry = (entry: string) => `Delete entry`

type QuizTableProps = {
	entries: any[];
	onRemove: (_: number) => void;
};

const QuizTable = ({ entries, onRemove }: QuizTableProps) => {
	console.log('entries', entries);
	const delButtons = React.useRef([]);

	const focusPrevButton = (i: number) => {
		let idxToFocus = i - 1;
		if(i === 0 && entries.length > 1) {
			// focus next item instead if there is
			idxToFocus = i + 1;
		}

		if(delButtons.current[idxToFocus]) {
			// @ts-ignore
			delButtons.current[idxToFocus].focus();
		}
	};

	return (
		<table className="w-full mt-4 table-fixed">
			<thead>
				<tr>
					<th className="text-left w-2/6 pl-2 md:pl-4">Movie</th>
					<th className="text-left w-1/6">Stars</th>
					<th className="text-center w-2/6">Genre</th>
					<th className="sr-only">Tools</th>
				</tr>
			</thead>
			<tbody>
				{entries.map((entry, i: number) => (
					<tr key={JSON.stringify(entry)} className={`text-gray-800 ${i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-300'}`}>
						<td className="py-3 text-left w-2/6 truncate pl-2 md:pl-4">{entry.movieName}</td>
						<td className="py-3 text-left w-1/6 truncate">{new Array(+entry.stars).fill('★').join('')}</td>
						<td className="py-3 text-center w-2/6 truncate">
							{Object.keys(entry.genre).filter(key => entry.genre[key]).join(', ')}
						</td>
						<td className="py-3 w-1/6 text-center">
							<button
								type="button"
								ref={el => {
									// @ts-ignore
									delButtons.current[i] = el}}
								onClick={() => {
									onRemove(i)
									focusPrevButton(i)
								}}
								className="text-gray-600 hover:text-gray-800"
								aria-label={altTextForEntry(entry)}
							>
								<svg viewBox="0 0 16 16" className="w-6 h-6">
									<path
										d="M6 2v1H2v1h1v10h10V4h1V3h-4V2H6zm1 1h2v1h3v9H4V4h3V3zM6 6v5h1V6H6zm3 0v5h1V6H9z"
										fill="currentColor"
									>
										<title>{altTextForEntry(entry)}</title>
									</path>
								</svg>
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
};

export default QuizTable;
