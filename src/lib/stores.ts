import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const historyStored = browser && window.localStorage.getItem('history');
export const history = writable(historyStored ? JSON.parse(historyStored) : []);
history.subscribe((history) => {
	if (browser) window.localStorage.setItem('history', JSON.stringify(history));
});

const isDarkStored: any = browser && window.localStorage.getItem('isDark');
export const isDark = writable(isDarkStored ? isDarkStored : true);
isDark.subscribe((isDark) => {
	if (browser) window.localStorage.setItem('isDark', isDark);
});
