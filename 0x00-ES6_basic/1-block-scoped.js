/* eslint-disable no-unused-variables */
/* eslint-disable no-var */
export default function taskBlock(trueOrFalse) {
	let task = false;
	let task2 = true;

	if (trueOrFalse) {
		const localTask = true;
		const localTask2 = false;
		task = localTask;
		task2 = localTask2;
	}

	return [task, task2];
}
