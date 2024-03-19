function randomSayiUret(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fizzBuzz() {
    // Random bir sayı oluştur
    var randomSayi = randomSayiUret(1, 100);
    console.log("Random:", randomSayi);

    // FizzBuzz durumlarını kontrol et
    if (randomSayi % 3 === 0 && randomSayi % 5 === 0) {
        console.log("FizzBuzz");
    } else if (randomSayi % 3 === 0) {
        console.log("Fizz");
    } else if (randomSayi % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log("FizzBuzz.");
    }
}


fizzBuzz();