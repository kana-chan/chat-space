$(function(){
// html------------------------------------------------------------------------------------------------------------------------------------------------------
function buildHTML(message){
  if (message.image){
    var html = `
      <div class="messageItem" data-message-id="${message.id}">
        <div class="messageInfo">
          <div class="messageInfo__userName">
            ${message.user_name}
          </div>
          <div class="messageInfo__postDate">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <p class="mmessage__content">
            ${message.content}
          </p>
        </div>
        <img src= ${message.image}>
      </div> `
    return html;
  }else{
    var html = `
    <div class="messageItem" data-message-id="${message.id}">
        <div class="messageInfo">
          <div class="messageInfo__userName">
            ${message.user_name}
          </div>
          <div class="messageInfo__postDate">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <p class="mmessage__content">
            ${message.content}
          </p>
        </div>
      </div> `
    return html;
  };
}
// event1------------------------------------------------------------------------------------------------------------------------------------------------------
$('#new_message').on('submit',function(e){
  e.preventDefault()
  var url = $(this).attr('action');
  var formData = new FormData(this);
// ajax------------------------------------------------
    $.ajax({
      url:url,
      data:formData,
      type: "POST",
      dataType:'json',
      processData: false,
      contentType: false
    })
// action------------------------------------------------
    .done(function(data){
      var html = buildHTML(data);
      $('.messageList').append(html);
      $('.messageList').animate({ scrollTop: $('.messageList')[0].scrollHeight});
      $('form')[0].reset();
    })
    .fail(function(){
      alert("メッセージの送信に失敗しました");
    })
    .always(function(){
      $('.messageForm__sendBtn').prop('disabled',false);
    });
  });
// other------------------------------------------------------------------------------------------------------------------------------------------------------
  function reloadMessages(){
    var last_message_id = $('.messageItem:last').data('message-id');
// ajax------------------------------------------------
  $.ajax({
    url: 'api/messages',
    type: 'get',
    dataType:'json',
    data:{id: last_message_id}
  })
// action------------------------------------------------
    .done(function(messages){
      if (messages.length !== 0) {
        messages.forEach(function(message){
          var html = buildHTML(message);
          $('.messageList').append(html);
        });
        $('.messageList').animate({ scrollTop: $('.messageList')[0].scrollHeight});
      }
    })
    .fail(function(){1
      alert('error');
    })
  }
// automatic------------------------------------------------------------------------------------------------------------------------------------------------
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
});