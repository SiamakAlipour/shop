export const loadState = () => {
	try {
		const seriallizedState = localStorage.getItem('state')
		if (seriallizedState === null) {
			return undefined
		}
		return JSON.parse(seriallizedState)
	} catch (error) {
		return undefined
	}
}

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state)
		localStorage.setItem('state', serializedState)
	} catch (error) {}
}
