$(document).ready(function(){
 $('.image').click(function(){
 $('.design').show();
 $('.image').hide();
 });
 $('.design').click(function(){
     $('.design').hide();
     $('.image').show();
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
    $('#button').click(function (event){
        var name = $('#one').val();
        var email = $('#two').val();
        var message =$('#message').val();
        if ((name !== '')&& (email !== '')&&(message !== '')){
            alert(email + '' + 'We have received your message and we thank you for your time')
        }else{
            alert('please input your contact information')
        }

    });

});