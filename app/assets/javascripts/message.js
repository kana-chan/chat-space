$(function(){
function buildHTML(message){
// html---------------------------------------------------------------------------
  if (message.image){
    var html = `
      <div class="messageItem">
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
    <div class="messageItem">
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
// ajax-----------------------------------------------------------------------
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
// ---------------------------------------------------------------------------
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
});