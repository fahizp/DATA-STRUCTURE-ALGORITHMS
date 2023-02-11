
var t = -1;
	var MAX = 1000;
	var a = Array(MAX).fill(0); // Maximum size of Stack

	function isEmpty() {
		return (t < 0);
	}

	function push(x) {
		if (t >= (MAX - 1)) {
			return false;
		} else {
		t+=1;
			a[t] = x;		
			return true;
		}
	}

	function pop() {
		if (t < 0) {
			
			return 0;
		} else {
			var x = a[t];
			t-=1;
			return x;
		}
	}

	function peek() {
		if (t < 0) {
			
			return 0;
		} else {
			var x = a[t];
			return x;
		}
	}



		push(10);
		push(20);
		push(30);
		push(40);
		push(50);
		push(60);
		push(70);

        console.log(a);

       console.log(peek()); 

       console.log(isEmpty);

	

