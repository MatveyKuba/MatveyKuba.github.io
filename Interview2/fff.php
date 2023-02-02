<?php
                              $votes_count = 0;
                              foreach($the_votes as $row){
                                  if($row['id_answer'] == $i){
                                      $votes_count++;

                                  }
                              }
                                  ?>

onclick="
                              
                              this.style.background = 'linear-gradient(90deg, rgba(145,203,226,1) 0%, rgba(233,172,206,1) <?php echo $votes_count/count($the_votes)*100?>%, rgba(218,243,161,1) 67%, rgba(157,153,240,1) 100%)'
                              vote(<?php echo $interview->id; ?>, <?php echo $i ?>)"