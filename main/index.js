function fibs(n) {
	const fibArray = [];

	if (n >= 1) {
		fibArray.push(0);
	}
	if (n >= 2) {
		fibArray.push(1);
	}
	if (n > 2) {
		for (let i = 2; i < n; i++) {
			fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
		}
	}

	return fibArray;
}

console.log(fibs(8)); // Should return [0, 1, 1, 2, 3, 5, 8, 13]
