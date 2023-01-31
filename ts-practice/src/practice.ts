interface User {
    name: string;
    age?: number;
}

interface Devloper {
    skills: string[];
}

const user: User = {
    name: "이준용",
};

const expert: Devloper = {
    skills: ["ddd"],
};

function merge<User, Devloper>(user: User, expert: Devloper): User & Devloper {
    return {
        ...user,
        ...expert,
    };
}

function createList<T extends string | number>(item: T, _length: number): T[] {
    const list: T[] = [];

    for (let i: number = 0; i < _length; i++) {
        list.push(item + i);
    }

    return list;
}

const stringList: string[] = createList("이준용", 10);

const numberList: number[] = createList(1, 10);

console.log(stringList);
console.log(numberList);
