
	function deleteMid(st, n, curr)
{
		if (st.length == 0 || curr == n) return;
		let x = st[st.length - 1];
		st.pop()
		deleteMid(st, n, curr+1);
		if (curr != parseInt(n/2, 10))   
			st.push(x);
	}
	
	let st = [];
	
	
	st.push('1');
	st.push('2');
	st.push('3');
	st.push('4');
	st.push('5');
	st.push('6');
	st.push('7');

	deleteMid(st, st.length, 0);



	
	

