var noTicketDom = document.getElementById('no_filter_ticket_6');
var searchButton = document.getElementById('query_ticket');
var ticketList = document.getElementById('queryLeftTable');
var searchResult = document.getElementById('sear-result');
Notification.requestPermission(function (permission) {
  const timerId = window.setInterval(function(){
    if (document.getElementsByClassName('btn72').length > 0) {
      new Notification('有票了，快去抢', {
        body: '抢吧'
      });
      window.clearInterval(timerId);
    }
    
    if (ticketList.childNodes.length === 0 && searchButton.innerText === '停止查询'
        && searchResult.style.display === 'none'
        ) {
      // 如果没有看到车票列表，也重新搜索
        searchButton.click();
    }
    if (noTicketDom.style.display !== 'none') {
      // 如果超时或者请求频繁，则重新搜索
      searchButton.click();
    }
  }, 1000);
})
