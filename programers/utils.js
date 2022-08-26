/**
 * ### Expect equal value
 * Can't compare Objects
 */
function expectEqual(testName, a, b) {
	if (a === b) console.log(`✅ Success : ${testName} `);
	else console.log(`🤬 Fail : ${testName}`);
}

/**
 * ### Expect not equal value
 * Can't compare Objects
 */
function expectNEqual(testName, a, b) {
	if (a !== b) console.log(`✅ Success : ${testName} `);
	else console.log(`🤬 Fail : ${testName}`);
}
