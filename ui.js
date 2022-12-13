class UI{
    constructor(firstSelect, secondSelect){
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;

        // yazılı metinleri seçiyoruz

        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");
        this.outputResult = document.getElementById("outputResult");


    }


    changeFirst(){
        // first select in text contentini alıp yenisini atayacağız
        this.outputFirst.textContent = this.firstSelect.options[this.firstSelect.selectedIndex].textContent;
    }

    changeSecond(){
        // first select in text contentini alıp yenisini atayacağız
        this.outputSecond.textContent = this.secondSelect.options[this.secondSelect.selectedIndex].textContent;
    }
        // sonuç kısmı
    displayResults(result){
        this.outputResult.value = result;
    }
}