export function formatTime(date: Date): string {
	return date.toLocaleString('en-US', {
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		hour12: false
	});
}
