$(document).ready(function () {

    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i, el) => {
        observer.observe(el);
    });
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('show-animation');
            }
        })
    }


   
    $('a[href^="#"]').click(function () {
        let valHref = $(this).attr("href")
        $('html, body').animate({
            scrollTop: $(valHref).offset().top - 65 + "px"
        })
    })




    
    $(".preloader").css("display", "none")

    $("select").on("change", function () {
        let sum = parseInt($("#list1 option:selected").val()) + parseInt($("#list2 option:selected").val()) + parseInt($("#list3 option:selected").val())
        let days = parseInt($("#list1 option:selected").attr("days")) + parseInt($("#list2 option:selected").attr("days")) + parseInt($("#list3 option:selected").attr("days"))
        $("#count .number").text(sum)
        $("#price .number").text(days)
    })

    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();

        $('.section').each((i, el) => {

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

    //const openPopUp = document.getElementById('open_pop_up');
    const closePopUp = document.getElementById('pop_up_close');
    const popUp = document.getElementById('pop_up');

    function sayHi(e) {
        popUp.classList.add('open');
    }

    closePopUp.addEventListener('click', () => {
        popUp.classList.remove('open');
    })
    setTimeout(sayHi, 10000);



    
   let show = true;
    // $(window).on("scroll", function(){
        
    //     if(!show) return false;
        
    //     let w_top = $(window).scrollTop();
    //     let e_top = $("#increase_all").offset().top;
    //     if(w_top + 450 >= e_top){
    //        $('.increasing_item').each(function() {
    // $(this).prop('Counter',-1).animate({
    //     Counter:$(this).text()},
    //     {duration: 3500,
    //      easing: 'swing',
    //      step:function(val){
    //          $(this).text(Math.ceil(val));
    //      }
    //     });
    // }); 
    //         show = false;
    //     }
    // })
    
let optionI = {threshold: [0.1]};
    let observerI = new IntersectionObserver(onEntryI, optionI);
    let elementsI = $('.badQ');
    elementsI.each((i,el) => {
        observerI.observe(el);
    });
    
    
function onEntryI (entryI){
    entryI.forEach(change => {
        if (change.isIntersecting) {
            change.target.src = change.target.dataset.src;
        }
    })
}    
    
$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});
new WOW().init();
$("#phone_number").mask("+7(999) 999-9999");
  
    
$('#formmer').submit(function(event){
    event.preventDefault();
    
    $.ajax({
        type: "POST",
        url: "php/mail.php",
        data: $(this).serialize()
    }).done(function (){
        $(this).find("input").val("");
        alert("Успешно отправлено");
        $("#formmer").trigger("reset");
    });
    return false;
})
$('#pop_ups').submit(function(event){
    event.preventDefault();
    
    $.ajax({
        type: "POST",
        url: "php/mail1.php",
        data: $(this).serialize()
    }).done(function (){
        $(this).find("input").val("");
        alert("Успешно отправлено");
        $("#pop_ups").trigger("reset");
    });
    return false;
})    
    


})


 


