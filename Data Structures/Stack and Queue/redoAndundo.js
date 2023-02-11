
	let Undo = [];
	let Redo = [];

	function WRITE(Undo, X)
	{
	for (let i = 0; i < X.length; i++) {		
		Undo.push(X[i])
	}
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


let arr = ['A','B','C','D','E','F','G','H']

	WRITE(Undo,arr)

	UNDO(Undo,Redo)
	UNDO(Undo,Redo)

	console.log(Undo);
	
	REDO(Undo,Redo)
	REDO(Undo,Redo)
	console.log(Undo);



	



