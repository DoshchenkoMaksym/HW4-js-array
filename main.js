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
