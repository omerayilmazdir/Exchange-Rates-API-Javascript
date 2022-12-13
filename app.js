// Elementleri seçelim

const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");
// bir currency objesi oluşturalım
const currency = new Currency("USD", "TRY");
// bir ui objesi oluşturalım
const ui = new UI(firstSelect, secondSelect);

// Event listesi

eventListeners();

function eventListeners() {
    // bu elementteki değer değişirse, input eventi oluşur
    // ardından fonksiyonu çalıştır
    amountElement.addEventListener("input",exchangeCurrency);
    firstSelect.onchange = function() { // onchange eventini atadık
        // yeni değerleri alalım, ve currency de dinamik kısma göndrelim
        // bu değerin içerisinde firstSelect elementindeki tüm optionsları alıp
        // bu options ların içerisindeki seçili olan değeri alıyoruz, textContent ile
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        // eğer ui firstSelect elementi değişiyor ise
        ui.changeFirst();
    };
    secondSelect.onchange = function() { // onchange eventini atadık
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();
    };

}

function exchangeCurrency(){
    // yukarıda inputta değişim meydana geldiği zaman 
    // çalışacak olan fonksiyon

    // her event oluştuğunda miktarı güncelliyoruz
    // içerisine amount elementin value sunu gönderiyoruz
    currency.changeAmount(amountElement.value);

    // oluşturduğumuz currency objesi üzerinden exchange i kullanıyoruz

    currency.exchange()
    .then(result => {
        ui.displayResults(result);
    })
    .catch(err => console.log(err));

}