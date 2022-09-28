// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
let largeCountries = ['Tuvalu', 'India', 'USA', 'Indonesia', 'Monaco'];
largeCountries[0] = 'China';
largeCountries[4] = 'Pakistan';
console.log(largeCountries);
console.log(largeCountries.pop());
console.log(largeCountries.shift());
console.log(largeCountries.unshift());
