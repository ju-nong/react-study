"use strict";
const user = {
    name: "이준용",
};
const expert = {
    skills: ["ddd"],
};
function merge(user, expert) {
    return {
        ...user,
        ...expert,
    };
}
function createList(item, _length) {
    const list = [];
    for (let i = 0; i < _length; i++) {
        list.push(item);
    }
    return list;
}
const stringList = createList("이준용", 10);
const numberList = createList(1, 10);
console.log(stringList);
console.log(numberList);
