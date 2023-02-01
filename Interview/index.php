<?php
    require "db.php";

    $data = $_GET;

    $interview = R::findOne('interviews', 'id = ?', array($data['id']));
    
    $answers = json_decode($interview->answers_json);

    $all_votes = R::findAll(('votes'));
$the_votes = array();

foreach ($all_votes as $row){
    if($row['id_interview'] == $data['id']){
        $the_votes[] = $row;
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interview</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/magnific-popup.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/style2.css">
    <link rel="stylesheet" href="css/font-awesome.css">
    <link rel="stylesheet" href="css/animate.min.css">
    <link
      rel="stylesheet"
      href="js/swiper-bundle.min.css"
    />
    <link  href="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css" rel="stylesheet">
</head>
<body>

<div class="preloader">
  <div class="preloader__row">
    <div class="preloader__item"></div>
    <div class="preloader__item"></div>
    <div class="preloader__item"></div>
  </div>
  </div>
   
    <header>
        <nav>
            <div class="container">
                <div class="row">
                    <div class="col-xxl-2 col-lg-3 col-8">
                        <div class="logo">LOUDER</div>
                    </div>
                    <div class="col-xxl-6 col-xl-7 col-lg-8 offset-xxl-4 offset-xl-2 offset-lg-6 offset-md-6 d-none d-lg-block">
                        <div class="menu">
                            <ul>
                                <li><a href="#aboutLouder">О LOUDER</a></li>
                                <li><a href="#participants">Kings&Queens</a></li>
                                <li><a href="#vote">Проголосовать</a></li>

                            </ul>
                        </div>
                    </div>
                    <div class="col-4 d-flex d-lg-none flex-column justify-content-center align-items-end">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Навигация
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#aboutLouder">О LOUDER</a></li>
                                <li><a class="dropdown-item" href="#participants">Kings&Queens</a></li>
                                <li><a class="dropdown-item" href="#vote">Проголосовать</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header> 
<main>
   
   <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
         <section class="main" class="section h-100">
          <div class="container h-100">
              <div class="row align-items-center h-100">
                  <div class="col-lg-12">
                      <div class="title__container">
                        <div>
                          <h1 class="hi">Добро пожаловать на<br>LOUDER</h1>
                        </div>
                          <div class="hi2 col-12 justify-content-center">
                          <h4>Уже не просто бал...</h4>
                          <a href="#participants"><input class="col-2" type="button" value="Kings&Queens"></a>
                          <a href="#vote"><input class="col-2" type="button" value="Проголосовать"></a>
                        </div>
                      </div>
                      
                    
                  </div>
              </div>
          </div>
  
      </section>
       </div>
        <div class="swiper-slide">
         <section class="main3" class="section h-100">
          <div class="container justify-content-center h-100">
              <div class="row align-items-center justify-content-center h-100">
                  <div class="col-lg-6 justify-content-center">
                      <div class="title__container3 ">
                          <h1 class="hi3">Make it louder</h1>
                          <div class="hi2 col-12 justify-content-center">
                         
                         <a href="#contactsItems"><input type="button" value="Посмотреть участников"></a>
                    
                      </div>
                    </div>
                      
                    
                  </div>
              </div>
          </div>
  
      </section>
       </div>
       
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>

 
  <section class="main2" class="section h-100">
        <div class="container h-100">
            <div class="row align-items-center h-100">
                <div class="col-lg-6">
                    <div class="title__container">
                        <h1 class="hi2">Добро пожаловать на <br>LOUDER</h1>
                        <h4><i class="fa fa-user-circle" aria-hidden="true"></i> Просто начинающий веб-дизайнер с большим будущим</h4>
                        <a href="#aboutMe"><input type="button" value="Обо мне"></a>
                        <a href="#myCases"><input type="button" value="Мои работы"></a>
                    </div>
                </div>
            </div>
        </div>

    </section>
  
  
    
    <section class="about_me section" id="aboutLouder">

        <div class="about_me_container container">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-3">
                    <h2>О LOUDER</h2>
                </div>
            </div>

            <img class="badQ mx-auto" src="img/goodQ.jpg" data-src="img/img.jpg" alt="Здесь есть моё фото)">
            <div class="row">
                <div class=" textContain col-12 col-sm-10 col-md-9 col-lg-8">
                    <p class="textFirst">Именно так называется событие, которое точно останется в вашей памяти, позволит погрузиться в атмосферу танца и провести вечер незабываемо! </br>
                    Тебя ждёт много интересного: зажигательная вечеринка, яркие стильные наряды, конкурсы, круто проведенное время и многое другое.
                    </br>Готов выйти за рамки шаблонов? Тогда мы ждём тебя!
                       </p>
                </div>
            </div>
        </div>
    </section>
    <section class="bg">
        
    </section>
   <section class="skills section" id="participants">
       <div class="skills_container container">
           <div class="skill_container">
               <h2>УЧАСТНИКИ</h2>
               <div class="row">
                   <div class="skills_item">
                      <img src="img/3kh4.png" alt="">
                       <p class="col-10 offset-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci laborum inventore reiciendis asperiores incidunt ipsum ea distinctio quae enim nam, a, nisi, molestias ducimus magnam hic molestiae odio qui earum quibusdam ipsa exercitationem ipsam nostrum! Corporis quos quidem iusto, molestiae, quo non nemo temporibus fugiat delectus corrupti perferendis illum nesciunt unde. Ab ipsam, repellendus non blanditiis asperiores tenetur minus officia optio perspiciatis quas explicabo quia, quos ad numquam veniam incidunt consequuntur molestias, ea eum dolorem perferendis possimus. Labore quod minus, culpa quaerat consectetur dolores tenetur similique magnam voluptates sequi ratione officia! Delectus deserunt quas, necessitatibus debitis eum dolorum laudantium?</p>
                   </div>
                </div>
                <div class="row">
                   <div class="skills_item">
                    <img src="img/3kh4.png" alt="">
                    <p class="col-10 offset-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci laborum inventore reiciendis asperiores incidunt ipsum ea distinctio quae enim nam, a, nisi, molestias ducimus magnam hic molestiae odio qui earum quibusdam ipsa exercitationem ipsam nostrum! Corporis quos quidem iusto, molestiae, quo non nemo temporibus fugiat delectus corrupti perferendis illum nesciunt unde. Ab ipsam, repellendus non blanditiis asperiores tenetur minus officia optio perspiciatis quas explicabo quia, quos ad numquam veniam incidunt consequuntur molestias, ea eum dolorem perferendis possimus. Labore quod minus, culpa quaerat consectetur dolores tenetur similique magnam voluptates sequi ratione officia! Delectus deserunt quas, necessitatibus debitis eum dolorum laudantium?</p>
                   </div>
                </div>
                <div class="row">
                   <div class="skills_item">
                    <img src="img/3kh4.png" alt="">
                    <p class="col-10 offset-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci laborum inventore reiciendis asperiores incidunt ipsum ea distinctio quae enim nam, a, nisi, molestias ducimus magnam hic molestiae odio qui earum quibusdam ipsa exercitationem ipsam nostrum! Corporis quos quidem iusto, molestiae, quo non nemo temporibus fugiat delectus corrupti perferendis illum nesciunt unde. Ab ipsam, repellendus non blanditiis asperiores tenetur minus officia optio perspiciatis quas explicabo quia, quos ad numquam veniam incidunt consequuntur molestias, ea eum dolorem perferendis possimus. Labore quod minus, culpa quaerat consectetur dolores tenetur similique magnam voluptates sequi ratione officia! Delectus deserunt quas, necessitatibus debitis eum dolorum laudantium?</p>
                   </div>
                </div>
                <div class="row">
                   <div class="skills_item">
                    <img src="img/3kh4.png" alt="">
                    <p class="col-10 offset-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci laborum inventore reiciendis asperiores incidunt ipsum ea distinctio quae enim nam, a, nisi, molestias ducimus magnam hic molestiae odio qui earum quibusdam ipsa exercitationem ipsam nostrum! Corporis quos quidem iusto, molestiae, quo non nemo temporibus fugiat delectus corrupti perferendis illum nesciunt unde. Ab ipsam, repellendus non blanditiis asperiores tenetur minus officia optio perspiciatis quas explicabo quia, quos ad numquam veniam incidunt consequuntur molestias, ea eum dolorem perferendis possimus. Labore quod minus, culpa quaerat consectetur dolores tenetur similique magnam voluptates sequi ratione officia! Delectus deserunt quas, necessitatibus debitis eum dolorum laudantium?</p>
                   </div>
                </div>
               <div class="row justify-content-center">
             
         <div class="fotorama d-lg-none d-md-none" data-autoplay="true" data-autoplay="3000" data-transition="slide" data-clicktransition="crossfade">

             <div class="skills_ItemM text-center ">
                 <i class="fa fa-2x fa-desktop" aria-hidden="true"></i>
                 <h3>Веб-разработка сайтов (совсем чуть-чуть)</h3>
                 <p>Всегда хотел освоить эту нишу, именно поэтому пошёл на этот курс</p>
             </div>
             <div class="skills_ItemM text-center ">
                 <i class="fa fa-2x fa-language" aria-hidden="true"></i>
                 <h3>Английский язык - почти как родной</h3>
                 <p>С детства учил английский язык и могу даже сказать Hello</p>
             </div>
             <div class="skills_ItemM  text-center">
                 <i class="fa fa-2x fa-user-o" aria-hidden="true"></i>
                 <h3>Психолог онлайн</h3>
                 <p>Лучшей поддержки вы не найдете</p>
             </div>
             <div class="skills_ItemM  text-center">
                 <i class="fa fa-2x fa-bar-chart" aria-hidden="true"></i>
                 <h3>Экономический прогноз</h3>
                 <p>Не зря ведь я учусь на экономиста...</p>
             </div>

         </div>
          </div>
           </div>

       </div>
   </section>
    
    
          <section class="contacts section" id="vote">
              <div class="your_message">
                  <h1>ПРОГОЛОСОВАТЬ</h1>
              </div>

            
              <div class="container">
                <div class="row justify-content-center">
              <div class="content">
                  <div class="interview_block" style="background-color: black"  align="center">
                      <p class="interview_title">Vote</p>
              
                      <div class="block_vids">
                          <?php for($i = 0; $i < count($answers); $i++) :?>
                              <?php
                              $votes_count = 0;
                              foreach($the_votes as $row){
                                  if($row['id_answer'] == $i){
                                      $votes_count++;
                                  }
                              }
                                  ?>
                              <button class="interview_button" onclick="
                              
                              this.style.background = 'linear-gradient(90deg, rgba(145,203,226,1) 0%, rgba(233,172,206,1) <?php echo $votes_count/count($the_votes)*100?>%, rgba(218,243,161,1) 67%, rgba(157,153,240,1) 100%)'
                              vote(<?php echo $interview->id; ?>, <?php echo $i ?>)"><?php echo $answers[$i] . ' | '. $votes_count . ' | ' . $votes_count/count($the_votes)*100 . "%";?></button>
                              <?php endfor;?>
              
                      </div>
              
                      <p class="votes_count">Голосов: <?php echo count($the_votes); ?></p>
                  </div>
              
                  <a href="/add.php">Добавить опрос</a>
              
              </div>
              </div>
              </div>
          </section> 
    
    <footer class="copyright">
         <div class="row m-0 justify-content-center">
       </div>
         <h class="col-12 text-truncate">Copyright©LOUDER BALL. Design by Web</h>
    </footer>
  
</main>


    <script src="libs/jquery.js"></script>
<script src="js/votes.js"></script>  
<script src="js/jquery-3.6.1.min.js"></script>
  <script src="js/bootstrap.bundle.min.js"></script>
  <script src="js/bootstrap.bundle.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js" integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK" crossorigin="anonymous"></script>
<script src="js/jquery.magnific-popup.min.js"></script>
<script src="js/wow.min.js"></script>
<script src="js/jquery.maskedinput.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
  <script>
      var swiper = new Swiper(".mySwiper", {
        rewind: true,
          spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: Boolean,
        },
          slidesPerView: 1,
        spaceBetween: 30,
        keyboard: {
          enabled: true,
        },
        
          pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    </script>
<script src="js/myScript.js"></script>
</body>
</html>