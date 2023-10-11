const disjuntores = [false, false, true, false, false, true, false, false];

const disjuntores2 = [
    false,
    true,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    true,
];

for (let index = 0; index < disjuntores2.length; index++) {
    if (disjuntores2[index]) {
        console.log(index)
    }
}