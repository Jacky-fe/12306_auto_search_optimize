var resultDom = document.getElementById('no_filter_ticket');
var noTicketDom = document.getElementById('no_filter_ticket_6');
var searchButton = document.getElementById('query_ticket');
var enableCheck = false
window.autoSearchTime = 3000
searchButton.addEventListener('click', function() {
  if (searchButton.innerText !== '停止查询') {
    enableCheck = true
  }
})
Notification.requestPermission(function (permission) {
  window.setInterval(function(){
    
    if (enableCheck) {
      if (document.getElementsByClassName('btn72').length > 0) {
        enableCheck = false
        new Notification('有票了，快去抢', {
          body: '抢吧'
        });
      }
      if (noTicketDom.style.display !== 'none') {
        // 如果超时或者请求频繁，则重新搜索
        searchButton.click();
      }
    }
  }, 1000);
})
