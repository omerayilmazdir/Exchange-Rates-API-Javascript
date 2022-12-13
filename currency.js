class Currency {
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangerate.host/latest?base=";


        this.amount = null;
    }


// veri alışverişi için kullandığımız metod

exchange(){

    return new Promise((resolve, reject) => {

        // url kısmındaki base=... kısmına denk gelen veriyi alıyoruz
    fetch(this.url + this.firstCurrency)
    .then(response => response.json()) // verimizi json olarak alıyoruz
    .then(data => {
        // burada örn 1 usd kaç try eder onun hesabını yapacağız aldığımız data üzerinden
        // parity değeri çevrilmek istenen kısım olacaktır
        const parity = data["rates"][this.secondCurrency];
        const amount2 = Number(this.amount); // bu kısımda ise gelen veriyi number yapıyoruz

        let total = parity * amount2; // burada değeri hesaplıyoruz
        // diğer js lerde kullanmak için promise döndüreceğiz
        if(amount2 <= 0){
            resolve("Bu değer dönüştürülemez!");
        }
        else{
            resolve(total);
        }


    }) // promise döner ve daha sonra bu json içerisindeki datayı alıyoruz
    .catch(err => reject(err)); // hata durumunda catch ile yakalıyoruz

    });

    
}
// dinamin olarak değişen amount ve select ler için fonksiyonları yazıyoruz

changeAmount(amount){
    this.amount = amount;
}
changeFirstCurrency(newFirstCurrency){
    this.firstCurrency = newFirstCurrency;
}
changeSecondCurrency(newSecondCurrency){
    this.secondCurrency = newSecondCurrency;
}


}