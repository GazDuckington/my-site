import { browser } from '$app/environment';
import { writable, readable } from 'svelte/store';
import dayjs from 'dayjs'

const historyStored = browser && window.localStorage.getItem('history');
export const history = writable(historyStored ? JSON.parse(historyStored) : []);
history.subscribe((history) => {
	if (browser) window.localStorage.setItem('history', JSON.stringify(history));
});

const isDarkStored = browser && window.localStorage.getItem('isDark');
export const isDark = writable(isDarkStored ? isDarkStored : true);
isDark.subscribe((isDark) => {
	if (browser) window.localStorage.setItem('isDark', isDark.toString());
});

export const dateTime = readable(dayjs().format('ddd, hh:mm'), function start(set) {
	set(dayjs().format('ddd, hh:mm'))
	const interval = setInterval(() => set(dayjs().format('ddd, hh:mm')), 1000)

	return function stop() {
		clearInterval(interval)
	}
})
