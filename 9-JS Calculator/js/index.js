$(function() {
	//Declared variables
	var firstNumber=[],secondNumber=[],storeNumber=[],allNumber=[],
        x,symbol,max=0,calculated=false,neg=false;

	//Number buttons 
	$('#9').click(function() {
		if(max <18 && calculated == false) 
        {
			max++;
			$('.text').append(9);
			allNumber.push('9');
		}
	});

	$('#8').click(function() {
		if(max <18 && calculated == false) 
        {
			max++;
			$('.text').append(8);
			allNumber.push('8')
		}
	});

	$('#7').click(function() {
		if(max <18 && calculated == false) 
        {
			max++;
			$('.text').append(7);
			allNumber.push('7')
		}
	});

	$('#6').click(function() {
		if(max <18 && calculated == false) 
        {
			max++;
			$('.text').append(6);
			allNumber.push('6')
		}
	});

	$('#5').click(function() {
		if(max <18 && calculated == false) 
        {
			max++;
			$('.text').append(5);
			allNumber.push('5')
		}
	});

	$('#4').click(function() {
		if(max <18 && calculated == false) 
        {
			max++;
			$('.text').append(4);
			allNumber.push('4')
		}
	});

	$('#3').click(function() {
		if(max <18 && calculated == false) 
        {
			max++;
			$('.text').append(3);
			allNumber.push('3')
		}
	});

	$('#2').click(function() {
		if(max <18 && calculated == false) 
        {
			max++;
			$('.text').append(2);
			allNumber.push('2')
		}
	});

	$('#1').click(function() {
		if(max <18 && calculated == false) 
        {
			max++;
			$('.text').append(1);
			allNumber.push('1')
		}
	});

	$('#zero').click(function() {
		if(max <18 && calculated == false) 
        {
			max++;
			$('.text').append(0);
			allNumber.push('0')
		}
	});

	$('#point').click(function() {
		if(max <18 && calculated == false) 
        {
			max++;
			$('.text').append(".");
			allNumber.push('.')
		}
	});

	//button functionality => * / - + = and clear
	$('#clear').click(function() {
		calculated=false;
		max=0;
		$('.text').html('');
		firstNumber=[];
		secondNumber=[];
		storeNumber=[];
		allNumber=[];
		symbol;
	})

	$('#add').click(function() {
		calculated = false;
		max=0;
		if(allNumber[allNumber.length-1] == "*" || allNumber[allNumber.length-1] == "-" || 
           allNumber[allNumber.length-1] == "%" || allNumber[allNumber.length-1] == "/")
        {
			allNumber[allNumber.length-1] = "+";
			if(neg == true)
            {
				$('.text').html(-Math.abs(parseFloat(allNumber[0])) + allNumber[1]);
			}
            else
            {
				$('.text').html(allNumber[0] + allNumber[1]);
			}
		} 
        else if(allNumber[allNumber.length-1] == "+")
        {
		
        }
        else 
        {
			if(allNumber[0] < 0) 
            {
				allNumber[0] = String(Math.abs(allNumber[0]));
				neg = true;
			}
            else 
            {
				neg = false;
			}
			
            //to split the numbers by symbol
            x = allNumber.join('').split(/[+\-\*\%\/]/); 
			if(x.length == 2)
            {
				storeNumber = [];
				equal();
			}

			$('.text').append('+');
			allNumber.push('+');
		}
	});

	$('#minus').click(function() {
		max = 0;
		calculated = false;
		if(allNumber[allNumber.length-1] == "*" || 
           allNumber[allNumber.length-1] == "+" || 
           allNumber[allNumber.length-1] == "%" || 
           allNumber[allNumber.length-1] == "/") 
        {
			allNumber[allNumber.length-1] = "-";
			if(neg == true)
            {
				$('.text').html(-Math.abs(parseFloat(allNumber[0])) + allNumber[1]);
			}
            else 
            {
				$('.text').html(allNumber[0] + allNumber[1]);
			}
		} 
        else if(allNumber[allNumber.length-1] == "-")
        {
		} 
        else
        {
			if(allNumber[0] < 0) 
            {
                //to change the negative
				allNumber[0] = String(Math.abs(allNumber[0])); 
				neg = true;
			}
            else 
            {
				neg = false;
			}
			
            x = allNumber.join('').split(/[+\-\*\%\/]/);
			if(x.length == 2) 
            {
				storeNumber = [];
				equal();
			}

			$('.text').append('-');
			allNumber.push('-');
		}
	});

	$('#mult').click(function(){
		calculated = false;
		max = 0;
		if(allNumber[allNumber.length-1] == "+" ||
           allNumber[allNumber.length-1] == "-" || 
           allNumber[allNumber.length-1] == "%" || 
           allNumber[allNumber.length-1] == "/")
        {
			allNumber[allNumber.length-1] = "*";
			if(neg == true) 
            {
				$('.text').html(-Math.abs(parseFloat(allNumber[0])) + allNumber[1]);
			} 
            else 
            {
				$('.text').html(allNumber[0] + allNumber[1]);
			}
		} 
        
        //don't do anything
        else if(allNumber[allNumber.length-1] == "*")
        {
            
		} 
        
        else 
        {
            if(allNumber[0] < 0)
            {
				allNumber[0] = String(Math.abs(allNumber[0]));
				neg = true;
			} 
            else 
            {
				neg = false;
			}
			x = allNumber.join('').split(/[+\-\*\%\/]/);
			if(x.length == 2) 
            {
				storeNumber = [];
				equal();
			}

			$('.text').append('*');
			allNumber.push('*');
		}
	});

	$('#divide').click(function(){
		calculated = false;
		max = 0;
		if(allNumber[allNumber.length-1] == "*" ||
           allNumber[allNumber.length-1] == "-" || 
           allNumber[allNumber.length-1] == "%" || 
           allNumber[allNumber.length-1] == "+")
        {
			allNumber[allNumber.length-1] = "/";
			if(neg == true)
            {
				$('.text').html(-Math.abs(parseFloat(allNumber[0])) + allNumber[1]);
			} 
            else 
            {
				$('.text').html(allNumber[0] + allNumber[1]);
			}
		} 
        
        //don't do anything
        else if(allNumber[allNumber.length-1] == "/")
        {
            
		} 
        else
        {
			if(allNumber[0] < 0)
            {
				allNumber[0] = String(Math.abs(allNumber[0]));
				neg = true;
			} 
            else 
            {
				neg = false;
			}
			x = allNumber.join('').split(/[+\-\*\%\/]/);
			if(x.length == 2)
            {
				storeNumber = [];
				equal();
			}

			$('.text').append('/');
			allNumber.push('/');
		}
	});

	$('#modulo').click(function(){
		calculated = false;
		max=0;
		if(allNumber[allNumber.length-1] == "*" || 
           allNumber[allNumber.length-1] == "-" ||
           allNumber[allNumber.length-1] == "+" ||
           allNumber[allNumber.length-1] == "/")
        {
			allNumber[allNumber.length-1] = "%";
			if(neg == true) 
            {
				$('.text').html(-Math.abs(parseFloat(allNumber[0])) + allNumber[1]);
			} 
            else
            {
				$('.text').html(allNumber[0] + allNumber[1]);
			}
		}

        //don't do anything
        else if(allNumber[allNumber.length-1] == "%")
        {
		} 

        else
        {
			x = allNumber.join('').split(/[+\-\*\%\/]/);
			x = x.filter(function(a) {
				return /\S/.test(a);
			})
			if(allNumber[0] < 0 && x.length == 2)
            {
				allNumber[0] = String(Math.abs(allNumber[0]));
				neg = true;
			} 
            else
            {
				neg = false;
			}
			if(x.length == 2) 
            {
				storeNumber = [];
				equal();
			}

			$('.text').append('%');
			allNumber.push('%');
		}
	});

	$('#equal').click(function() {
		equal();
		calculated = true;
	});

	//equal functionality
	function equal() {
		max = 0;
		storeNumber = [];
		allNumber.filter(function(n) {
			if(n.match(/\d/) !== null)
            {
				storeNumber.push(parseFloat(n));
			} 
            else if(n == ".")
            {
				storeNumber.push(n);
			} 
            else if(n == "+" || n == "-" || n == "*" || n == "%" || n == "/")
            {
                firstNumber=storeNumber; 
                symbol=n;
				storeNumber=[];
			}
			secondNumber=storeNumber; 
		});
		
		//to check the symbol then doing the operation
		if (neg !==true) 
        {
			if(symbol == '+') 
            {
				firstNumber = (parseFloat(firstNumber.join('')) + parseFloat(secondNumber.join('')));
			}
            else if (symbol == '-') 
            {
				firstNumber = parseFloat(firstNumber.join('')) - parseFloat(secondNumber.join(''));
			} 
            else if (symbol == '/') 
            {
				firstNumber = parseFloat(firstNumber.join('')) / parseFloat(secondNumber.join(''));
			} 
            else if (symbol == '%')
            {
				firstNumber = parseFloat(firstNumber.join('')) % parseFloat(secondNumber.join(''));
			}
            else if(symbol == '*') 
            {
				firstNumber = parseFloat(firstNumber.join('')) * parseFloat(secondNumber.join(''));
			}
		} 
        else if(neg == true) 
        {
            if(symbol == '+') 
            {
				firstNumber = -Math.abs(parseFloat(firstNumber.join(''))) + parseFloat(secondNumber.join(''));
			} 
            else if (symbol == '-')
            {
				firstNumber = -Math.abs(parseFloat(firstNumber.join(''))) - parseFloat(secondNumber.join(''));
			} 
            else if (symbol == '/')
            {
				firstNumber = -Math.abs(parseFloat(firstNumber.join(''))) / parseFloat(secondNumber.join(''));
			} 
            else if (symbol == '%') 
            {
				firstNumber = -Math.abs(parseFloat(firstNumber.join(''))) % parseFloat(secondNumber.join(''));
			}
            else if(symbol == '*') 
            {
				firstNumber = -Math.abs(parseFloat(firstNumber.join(''))) * parseFloat(secondNumber.join(''));
			}
		}

		$('.text').html(firstNumber);
		storeNumber = [String(firstNumber)];         
		secondNumber = [];
		allNumber = [String(firstNumber)];
		firstNumber = [];
	}
});