function checkprime(number) {
    let count = 0;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            alert(number + " is not prime");
            break;
        }
        count++;
    }
    if (count == (number - 2)) {
        alert(number + " is prime");
    }
}
function call() {
    let value = document.getElementById('number').value;
    let Num = checkprime(value);
}