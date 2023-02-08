
	// Javascript Program to implement the above approach
	
	// Stores the history of all
	// the queries that have been
	// processed on the document
	let Undo = [];

	// Stores the elements
	// of REDO query
	let Redo = [];
	
	// Function to perform
	// "WRITE X" operation
	function WRITE(Undo, X)
	{
	
		// Push an element to
		// the top of stack
		Undo.push(X)
	}

	// Function to perform
	// "UNDO" operation
	function UNDO(Undo, Redo)
	{
	
		// Stores top element
		// of the stack
		let X = Undo[Undo.length - 1];

		// Erase top element
		// of the stack
		Undo.pop();

		// Push an element to
		// the top of stack
		Redo.push(X);
	}

	// Function to perform
	// "REDO" operation
	function REDO(Undo, Redo)
	{
	
		// Stores the top element
		// of the stack
		let X = Redo[Redo.length - 1];

		// Erase the top element
		// of the stack
		Redo.pop();

		// Push an element to
		// the top of the stack
		Undo.push(X);
	}

	// Function to perform
	// "READ" operation
	function READ(Undo)
	{
	
		// Store elements of stack
		// in reverse order
		let revOrder = [];

		// Traverse Undo stack
		while (Undo.length > 0)
		{
		
			// Push an element to
			// the top of stack
			revOrder.push(Undo[Undo.length - 1]);

			// Erase top element
			// of stack
			Undo.pop();
		}

		while (revOrder.length > 0)
		{
		
			// Print the top element
			// of the stack
			document.write(revOrder[revOrder.length - 1]);
			Undo.push(revOrder[revOrder.length - 1]);

			// Erase the top element
			// of the stack
			revOrder.pop();
		}

		document.write(" ");
	}

	// Function to perform the
	// queries on the document
	function QUERY(Q)
	{
		// Stores total count
		// of queries
		N = Q.length

		// Traverse all the query
		for (let i = 0; i < N; i++)
		{
			if(Q[i] == "UNDO")
			{
				UNDO(Undo, Redo);
			}
			else if(Q[i] == "REDO")
			{
				REDO(Undo, Redo);
			}
			else if(Q[i] == "READ")
			{
				READ(Undo);
			}
			else
			{
				WRITE(Undo, Q[i][6]);
			}
		}
	}
	
	let Q = [ "WRITE A", "WRITE B", "WRITE C", "UNDO", "READ", "REDO", "READ" ];
	QUERY(Q);

// This code is contributed by suresh07.

