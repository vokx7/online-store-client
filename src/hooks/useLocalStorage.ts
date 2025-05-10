import {useEffect, useState} from 'react';

export const useLocalStorage = <T>(key: string): [T, React.Dispatch<React.SetStateAction<T>>] => {
	const [value, setValue] = useState<T>(JSON.parse(localStorage.getItem(key) || "[]"));

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value, key]);

	return [value, setValue];
};
