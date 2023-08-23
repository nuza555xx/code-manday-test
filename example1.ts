interface InputProps {
    name: string;
    age: number;
}

const inputs: InputProps[] = [
    {
        name: 'Win',
        age: 25
    },
    {
        name: 'Ton',
        age: 25
    },
    {
        name: 'Jeff',
        age: 33
    },
    {
        name: 'Boat',
        age: 26
    }
];

const inputName1: string = 'Boat';
const inputName2: string = 'boat';


class Solution {
    findNameByMaxAge(inputs: InputProps[]) {
        const [sort] = inputs.sort((a, b) => b.age - a.age);
        return sort.name;
    }

    getAgeByName(inputs: InputProps[], name: string) {
        const result = inputs.find((input) => input.name.toLowerCase() === name.toLowerCase());
        return result?.age;
    }

    transformGrouping(inputs: InputProps[]) {
        const grouping: Record<number, string[]> = {};

        inputs.forEach((input) => {
            (grouping[input.age] ??= []).push(input.name);
        });

        return [grouping];
    }
}

(() => {
    const solution = new Solution();
    const findNameByMaxAge = solution.findNameByMaxAge(inputs);
    const getAgeByName1 = solution.getAgeByName(inputs, inputName1);
    const getAgeByName2 = solution.getAgeByName(inputs, inputName2);
    const transformGrouping = solution.transformGrouping(inputs);

    console.log(findNameByMaxAge);
    console.log(getAgeByName1);
    console.log(getAgeByName2);
    console.log(transformGrouping);
})()