

// Javascript Program to find decimal value of
// binary linked list	
// Link list Node /
	class Node {
		constructor(){
		this.data = true;
		this.next = null;
	}
	}

	// Returns decimal value of binary linked list /
	function decimalValue(head) {
		// Initialized result
		var res = 0;

		// Traverse linked list
		while (head != null) {
			// Multiply result by 2 and add
			// head's data
			res = (res << 1) + (head.data ? 1 : 0);

			// Move next
			head = head.next;
		}
		return res;
	}

	// Utility function to create a new node.
	function newNode(data) {
        var temp = new Node();
		temp.data = (data == 1 ? true : false);
		temp.next = null;
		return temp;
	}

	// Driver code/
	
		// Start with the empty list /
var head = newNode(1);
		head.next = newNode(0);
		head.next.next = newNode(1);
		head.next.next.next = newNode(1);

		console.log("Decimal value is "
		+ decimalValue(head));




