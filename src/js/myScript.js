$(document).ready(function () {

    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i, el) => {
        observer.observe(el);
    });

    /*let type, design, adaptivity;

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
    */
    $('a[href^="#"]').click(function () {
        let valHref = $(this).attr("href")
        $('html, body').animate({
            scrollTop: $(valHref).offset().top - 65 + "px"
        })
    })




    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('show-animation');
            }
        })
    }

$(".preloader").css("display", "none")
    
$("select").on("change", function(){
    let sum = parseInt($("#list1 option:selected").val()) + parseInt($("#list2 option:selected").val()) + parseInt($("#list3 option:selected").val())
    let days = parseInt($("#list1 option:selected").attr("days")) + parseInt($("#list2 option:selected").attr("days")) + parseInt($("#list3 option:selected").attr("days"))
    $("#count .number").text(sum)
    $("#price .number").text(days)
})

         $(window).scroll(() => {
               let scrollDistance = $(window).scrollTop();

               $('section').each((i, el) => {

                   if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
                       $('nav a').each((i, el) => {
                           if ($(el).hasClass('active')) {
                               $(el).removeClass('active');
                           }
                       });

                       $('nav li:eq(' + i + ')').find('a').addClass('active');
                   }

               });
           });
    
})

 
