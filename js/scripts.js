$(document).ready(function(){
    $('.image1').click(function(){
        $('.design').show();
        $('.image1').hide();
        });
        $('.design').click(function(){
            $('.design').hide();
            $('.image1').show();
        });
 $('.image2').click(function(){
    $('.development').show();
    $('.image2').hide();
    });
    $('.development').click(function(){
        $('.development').hide();
        $('.image2').show();
    });
    $('.image3').click(function(){
        $('.product').show();
        $('.image3').hide();
        });
        $('.product').click(function(){
            $('.product').hide();
            $('.image3').show();
        });
    $("#porto1").mouseover(function(){
       $("#one").show();
    
     });
     $("#porto1").mouseleave(function(){
       $("#one").hide()
    });
    $("#porto2").mouseover(function(){
        $("#two").show();
     
      });
      $("#porto2").mouseleave(function(){
        $("#two").hide()
     });
     $("#porto3").mouseover(function(){
        $("#three").show();
     
      });
      $("#porto3").mouseleave(function(){
        $("#three").hide()
     });
     $("#porto4").mouseover(function(){
        $("#four").show();
     
      });
      $("#porto4").mouseleave(function(){
        $("#four").hide()
     });
     $("#porto5").mouseover(function(){
        $("#five").show();
     
      });
      $("#porto5").mouseleave(function(){
        $("#five").hide()
     });
     $("#porto6").mouseover(function(){
        $("#six").show();
     
      });
      $("#porto6").mouseleave(function(){
        $("#six").hide()
     });$("#porto7").mouseover(function(){
        $("#seven").show();
     
      });
      $("#porto7").mouseleave(function(){
        $("#seven").hide()
     });
     $("#porto8").mouseover(function(){
        $("#eight").show();
     
      });
      $("#porto8").mouseleave(function(){
        $("#eight").hide()
     });
    $('#button').click(function (event){
        var name = $('#name').val();
        var email = $('#email').val();
        var message =$('#message').val();
        if ((name !== '')&& (email !== '')&&(message !== '')){
            alert(name + ' ' + 'We have received your message and we thank you for your time')
        }else{
            alert('please input your contact information')
        }

    });

});