let type, design, adaptivity;

let calculator = {
    price: [
        [100, 500, 1000],
        [500, 1000, 2000],
        [1000, 2000, 5000],
    ],
    days: [
        [1, 5, 10],
        [2, 6, 11],
        [3, 8, 12],   
    ],
    run(typeSite, designSite, adaptivitySite) {
        let sum = parseInt(calculator.price[0][typeSite - 1]) + parseInt(calculator.price[1][designSite - 1]) + parseInt(calculator.price[2][adaptivitySite - 1]);
        let days = parseInt(calculator.days[0][typeSite - 1]) + parseInt(calculator.days[1][designSite - 1]) + parseInt(calculator.days[2][adaptivitySite - 1]);
        alert("Сроки: "+ days + "\nСтоимость: " + sum);
    
  }
}
function getAnswers(){
type = prompt("Тип сайта: \n1 - Сайт-визитка \n2 - Корпоративный сайт, \n3 - Веб-сервис");
    if(type != 1 && type != 2 && type != 3) {
        alert("Такого варианта нет");
        getAnswers();
        return;
    }
design = prompt("Дизайн: \n1 - Простой \n2 - Красочный \n3 - Специфический");
    if(design != 1 && design != 2 && design != 3) {
        alert("Такого варианта нет");
        getAnswers();
        return;
    }
adaptivity = prompt("Адаптивность: \n1 - ПК \n2 - Мобильные уст-ва + ПК \n3 - Мобильные уст-ва");
    if(adaptivity != 1 && adaptivity != 2 && adaptivity != 3) {
        alert("Такого варианта нет");
        getAnswers();
        return;
    }
    calculator.run(type, design, adaptivity);
}
getAnswers();