console.log('------------- # 4')

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask(
    "Вы согласны?",
    () => { console.log('Вы согласились'); },
    () => { console.log('Вы отменили выполнение'); }
);
console.log('------------- # 5')
let shortString = 'my-short-string'
let arr1 = shortString.split('-');
console.log(arr1);
console.log('------------- # 6')
let scriptArr = ['JavaScript', 2015];
let arr2 = scriptArr.join(' ');
console.log(arr2);
console.log('------------- # 7')
let users = [
    { id: 1, name: 'Vic', age: 21 },
    { id: 2, name: 'Petya', age: 30 },
    { id: 3, name: 'John', age: 5 }
];
let olderUsers = users.filter(function (item) { return item.age < 20 });
console.log(olderUsers);

console.log('------------- # 8')
let names = users.map(item => { return item.name });
console.log(names);
console.log('------------- # 9')
let arr3 = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        };
    };
};
filterRangeInPlace(arr3, 1, 4);
console.log(arr3);