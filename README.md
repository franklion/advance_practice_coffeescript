# advance_practice_coffeescript

功能: 使用coffeescript完成template套版

[coffeescript] 語法注意事項

1. 使用縮排tab來判別程式碼是否屬於同一組物件元素

ex: $ '.main'

        .css 'background-color', 'black'
        
2. for loop

三種用法針對一般使用、陣列、物件

一般使用:

  `for index in [min..max] by step`
  
    index : 索引
    
    min, max : 索引範圍最小值和最大值
    
    step : 增值(可不寫 coffee自動判斷)
    
陣列:

  `for item in array`
  
    item : 陣列中元素值
    
    array : 欲執行迴圈的陣列
    
物件:

  `for key, value of obj`
  
    key: 物件中的key
    
    value: 物件中的value
    
    obj: 欲執行迴圈的物件
