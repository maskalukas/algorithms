import {binarySearch, IObject} from "./binarySearch";

const testArray: IObject[] = [];
for (let i = 0; i < 500; i++) {
    testArray.push({
        id: i,
        name: "Lukas-"+i
    });
}

const result = binarySearch(testArray, 499);
console.log(result);