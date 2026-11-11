import a from "./file1.mjs";
import {b as X} from "./file3.mjs";
import add from "./utils/add.mjs";


console.log(a);
console.log(X);
console.log(add(a, X));