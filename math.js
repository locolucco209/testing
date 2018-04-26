let [nope, moar_nope, ...args] = process.argv;
// [dontecare, dontcare, stuff, I, want]

let add = (x, y) => x + y;

console.log(args.map(x => parseInt(x)).reduce(add,0));
