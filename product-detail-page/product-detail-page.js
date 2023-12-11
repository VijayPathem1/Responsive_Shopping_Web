$(document).ready(function(){
  $('.jq-review-btn').click(function(){
    $('.jq-review-btn').hide(0, function(){
      $('.jq-cancel-cutomer-btn').show(0);
    });
    $('.review-main-wrapper').slideDown();
  });
  $('.jq-cancel-btn').click(function(){
    $('.jq-cancel-cutomer-btn').hide(0, function(){
      $('.jq-review-btn').show(0);
    });
    $('.review-main-wrapper').slideUp(400);
  })
  $('.jq-cancel-cutomer-btn').click(function(){
    $(this).hide(0, function(){
      $('.jq-review-btn').show(0);
    });
    $('.review-main-wrapper').slideUp(400);
  })
});