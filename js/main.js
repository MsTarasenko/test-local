$(function(){

    let showPopup = function(){
        $('.popup-container').css('display', 'flex');
    };

  

    let clearForm = function(){
        $('.popup-container > input[type="text"]').val('');
    };

    

    $('.close').on('click', function(){
        clearForm();
        closePopup();
    });
});
