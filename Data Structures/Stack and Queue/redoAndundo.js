
	let Undo = [];
	let Redo = [];

	function WRITE(Undo, X)
	{
		Undo.push(X)
		console.log(Undo);
	}

	function UNDO(Undo, Redo)
	{
		let X = Undo[Undo.length - 1];
		Undo.pop();
		Redo.push(X);
	}
	function REDO(Undo, Redo)
	{
		let X = Redo[Redo.length - 1];


		Redo.pop();

		Undo.push(X);
	}

	function READ(Undo)
	{

		let revOrder = [];

		while (Undo.length > 0)
		{

			revOrder.push(Undo[Undo.length - 1]);
			Undo.pop();
		}

		while (revOrder.length > 0)
		{
			// document.write(revOrder[revOrder.length - 1]);
			Undo.push(revOrder[revOrder.length - 1]);
			revOrder.pop();
		}

		// document.write(" ");
	}

	function QUERY(Q)
	{

		N = Q.length


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



