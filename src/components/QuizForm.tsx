import React from 'react'

const defaultEntry = {
	movieName: '',
	stars: '1',
	genre: {
		crime: false,
		comedy: false,
		fantasy: false,
		futuristic: false,
	},
};

type QuizFormProps = {
	onSubmit: (e: any) => void;
}

const QuizForm = ({ onSubmit }: QuizFormProps) => {
	const [currentEntry, setCurrentEntry] = React.useState(defaultEntry)
	const previousEntry = React.useRef(currentEntry)

	const movieNameInput = React.useRef(null)

	React.useEffect(() => {
		if (currentEntry === defaultEntry && previousEntry.current !== defaultEntry && movieNameInput.current) {
			// @ts-ignore
			movieNameInput.current.focus()
		}
		previousEntry.current = currentEntry
	}, [currentEntry])

	return (
		<form className="lg:grid lg:grid-cols-2 lg:col-span-2" aria-label="Quiz Form">
			<div className="mt-4 flex items-center">
				<span className="w-1/2 md:w-1/3">
					Movie Name:{' '}
				</span>
				<input
					type="text"
					id="movie-input"
					className="border-2 border-gray-600 bg-gray-100 rounded pl-3 py-1 w-1/2 md:w-48 lg:w-auto"
					value={currentEntry.movieName}
					onChange={(e) => {
						const { value } = e.target
						setCurrentEntry((entry) => ({ ...entry, movieName: value }))
					}}
					required
				/>
			</div>
			<div className="mt-4 flex items-center">
				<label className="w-1/2 md:w-1/3" htmlFor="stars-input">
					Stars :{' '}
				</label>
				<div className="relative w-1/2 md:w-auto">
					<select
						className="appearance-none w-full bg-gray-100 border-2 border-gray-600 pl-3 py-1 md:w-48 lg:w-32"
						id="stars-input"
						value={currentEntry.stars}
						onChange={(e) => {
							const { value } = e.target
							setCurrentEntry((entry) => ({ ...entry, stars: value }))
						}}
						required
					>
						{
							[...new Array(5)].map((value, index) => (
								<option key={`option-${index}`} value={ index + 1 }>{ new Array(index + 1).fill('★').join('')}</option>
							))
						}
					</select>
					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700" aria-hidden="true">
						<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
						</svg>
					</div>
				</div>
			</div>
			<fieldset className="mt-8 lg:col-span-2">
				<legend className="w-1/2 md:w-1/3 lg:w-1/6 float-left">Genre: </legend>
				<div className="flex flex-wrap w-1/2 md:w-auto">
					<div>
						<input
							type="checkbox"
							id="comedy-check"
							value="comedy"
							checked={currentEntry.genre.comedy}
							onChange={(e) => {
								const { checked } = e.target
								setCurrentEntry((entry) => ({
									...entry,
									genre: { ...entry.genre, comedy: checked },
								}))
							}}
						/>
						<span className="mx-2">
							Comedy
						</span>
					</div>
					<div>
						<input
							type="checkbox"
							id="crime-check"
							value="crime"
							checked={currentEntry.genre.crime}
							onChange={(e) => {
								const { checked } = e.target
								setCurrentEntry((entry) => ({
									...entry,
									genre: { ...entry.genre, crime: checked },
								}))
							}}
						/>
						<span className="mx-2">
							Crime
						</span>
					</div>
					<div>
						<input
							type="checkbox"
							id="fantasy-check"
							value="fantasy"
							checked={currentEntry.genre.fantasy}
							onChange={(e) => {
								const { checked } = e.target
								setCurrentEntry((entry) => ({
									...entry,
									genre: { ...entry.genre, fantasy: checked },
								}))
							}}
						/>
						<span className="mx-2">
							Fantasy
						</span>
					</div>
					<div>
						<input
							type="checkbox"
							id="futuristic-check"
							value="futuristic"
							checked={currentEntry.genre.futuristic}
							onChange={(e) => {
								const { checked } = e.target
								setCurrentEntry((entry) => ({
									...entry,
									genre: { ...entry.genre, futuristic: checked },
								}))
							}}
						/>
						<span className="mx-2">
							Futuristic
						</span>
					</div>
				</div>
			</fieldset>
			<div className="lg:col-span-2">
				<button
					type="button"
					className="bg-teal-400 border-2 border-teal-600 px-4 py-2 rounded hover:bg-teal-600 md:mt-12"
					onClick={() => {
						onSubmit(currentEntry)
						setCurrentEntry(defaultEntry)
					}}
				>
					Submit
				</button>
			</div>
		</form>
	)
}

export default QuizForm;
