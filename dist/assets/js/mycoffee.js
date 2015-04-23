(function() {
  $(function() {
    var data, renderer, result, template;
    data = {
      name: '小明',
      phone: '0987654321',
      website: 'http://www.fashionguide.com.tw',
      img: 'https://piposay.s3.amazonaws.com/pipo/44b226c7-5883-4bc7-9df4-18636eddb23a.png'
    };
    template = $('#template').html();

    /* template data 替換 */
    renderer = function(data, template) {
      var key, reg, temp, value;
      key = Object.keys(data);
      for (key in data) {
        value = data[key];
        temp = "{" + key + "}";
        reg = new RegExp(temp, 'g');
        template = template.replace(reg, value);
      }
      return template;
    };
    result = renderer(data, template);
    $('#right-aside-content').html(result);

    /* 點擊動畫按鈕 */
    $('#animate').click(function() {
      $('#show').attr('open', true);
      return $('#wrapper').addClass('enable-blur').addClass('unselect');
    });

    /* 離開 dialog */
    $('.leave').click(function() {
      $('#show').attr('open', false);
      return $('#wrapper').removeClass('enable-blur').removeClass('unselect');
    });
    return console.log(result);
  });

}).call(this);
