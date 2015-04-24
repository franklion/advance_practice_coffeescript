# advance_practice_coffeescript

功能: 使用coffeescript完成template套版

[coffeescript] 語法注意事項

1. 使用縮排 tab 來判別程式碼是否屬於同一組物件元素

	ex: 

		$ '.main'
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


3. 註解 comment

	a. 使用單一 #
	
	b. 使用六個 ### 把一串程式碼包覆起來

	ex: 
			  
			  
		###
		a = 10
		b = 50
		###
	
	
4. 函式宣告

	coffee 預設使用function expression，該函式指定給某一個變數，特點:載入js時候計憶體只儲存該變數，當使用該變數實作函式時候才真正的載入到記憶體中．
	
		var square = function (x) {
			return x * x;
		};
	
	另一種函式宣告為function declaration，宣告函式的同時記憶體就已經載入所有使用到的變數、物件、陣列...等等．
	
		function square (x) {
			return x * x;
		};
		
