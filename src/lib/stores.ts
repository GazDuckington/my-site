import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const historyStored = browser && window.localStorage.getItem('history');
export const history = writable(historyStored ? JSON.parse(historyStored) : []);
history.subscribe((history) => {
	if (browser) window.localStorage.setItem('history', JSON.stringify(history));
});
