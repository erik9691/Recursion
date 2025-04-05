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

function fibsRec(n) {
	if (n === 1) {
		const fibArray = [0];
		return fibArray;
	} else if (n === 2) {
		const fibArray = [0, 1];
		return fibArray;
	} else {
		let fib1 = fibsRec(n - 1);
		let fib2 = fibsRec(n - 2);

		fib1.push(fib1[fib1.length - 1] + fib2[fib2.length - 1]);
		return fib1;
	}
}

//console.log(fibs(8)); // Should return [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(8));
