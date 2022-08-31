$(document).ready(function () {

    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i, el) => {
        observer.observe(el);
    });

   
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
    setTimeout(sayHi, 5000);

   let show = true;
    $(window).on("scroll", function(){
        
        if(!show) return false;
        
        let w_top = $(window).scrollTop();
        let e_top = $("#increase_all").offset().top;
        if(w_top + 350 >= e_top){
           $('.increasing_item').each(function() {
    $(this).prop('Counter',-1).animate({
        Counter:$(this).text()},
        {duration: 3500,
         easing: 'swing',
         step:function(val){
             $(this).text(Math.ceil(val));
         }
        });
    }); 
            show = false;
        }
    })
})


 
