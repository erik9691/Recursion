function mergeSort(unsortedArray) {
	if (unsortedArray.length === 1) {
		return unsortedArray;
	}

	const leftHalf = unsortedArray.slice(0, unsortedArray.length / 2);
	const rightHalf = unsortedArray.slice(unsortedArray.length / 2, unsortedArray.length);

	const leftSorted = mergeSort(leftHalf);
	const rightSorted = mergeSort(rightHalf);

	const mergedHalves = [];
	while (true) {
		if (rightSorted[0] === undefined && leftSorted[0] === undefined) {
			return mergedHalves;
		} else if (rightSorted[0] < leftSorted[0] || leftSorted[0] === undefined) {
			mergedHalves.push(rightSorted.shift());
		} else {
			mergedHalves.push(leftSorted.shift());
		}
	}
}
console.log(mergeSort([105, 79, 100, 110]));
