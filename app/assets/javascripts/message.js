$(function(){
  $('#new_message').on('submit',function(e){
    e.preventDefault()
    var url = $(this).attr('action');
    var formData = new FormData(this);
    $.ajax({
      url:url,
      data:formData,
      type: "POST",
      dataType:'json',
      processData: false,
      contentType: false
    })
  });
});