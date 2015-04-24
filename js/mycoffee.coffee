$ ->
  data =
    name: '小明',
    phone: '0987654321',
    website: 'http://www.fashionguide.com.tw',
    img: 'https://piposay.s3.amazonaws.com/pipo/44b226c7-5883-4bc7-9df4-18636eddb23a.png'

  template = $ '#template'
    .html()

  ### template data 替換 ###
  renderer = (data, template) ->
    key = Object.keys data
    for key, value of data
      temp = "{#{key}}"
      reg = new RegExp temp,'g'
      template = template.replace reg, value
    return template

  result = renderer(data, template)
  $ '#right-aside-content'
    .html result


  ### 點擊動畫按鈕 ###
  $ '#animate'
    .click ->
      $ '#show'
        .attr 'open', true
      $ '#wrapper'
        .addClass 'enable-blur'
        .addClass 'unselect'

  ### 離開 dialog ###
  $ '.leave'
    .click ->
      $ '#show'
        .attr 'open', false
      $ '#wrapper'
        .removeClass 'enable-blur'
        .removeClass 'unselect'
