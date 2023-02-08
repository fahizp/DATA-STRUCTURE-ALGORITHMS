class node {
	constructor(value)
	{
		this.value = value,
		this.prev = null,
		this.next = null
	}
}

class Mystack {
	constructor(){
	this.head = null,
	this.middle = this.head,
	this.tail = this.head,
	this.size = 0
	}
	
	// Function to insert value in a stack
	push(val)
	{
		if (!this.head) {
			let temp = new node(val)
			this.head = temp;
			this.middle = this.head;
			this.tail = this.head;
			this.size++
		}
		else {
			let newTail = new node(val)
			this.tail.next = newTail
			newTail.prev = this.tail
			this.tail = this.tail.next
			this.size++
			if (this.size % 2 !== 0)
			{
				this.middle = this.middle.next
			}
		}
	}
	
	// Function to remove values from stack
	pop()
	{
		if (!this.head) {
			console.log('stack is empty')
		}
		else {
			let temp = this.tail.prev
			this.tail = temp
			this.tail.next = null
			this.size--
			if (this.size % 2 === 0)
			{
				this.middle = this.middle.prev
			}
		}
	}
	
	// Function to get the middle element of the stack
	findMiddle(){
	console.log(this.middle.value)
	return this.middle.value
	}
	
	// Function to delete the middle value of the stack
	deleteMiddle()
	{
		let leader = this.middle.prev;
		let after = this.middle.next;
		leader.next = after
		after.prev = leader
		if (this.size % 2 !== 0)
		{
			this.middle = leader
		}
		else {
			this.middle = after
		}
		this.size--
		console.log(this.middle.value)
	}
	
	// Function to print the remaining stack
	printStack()
	{
		let curr = this.head;
		let arr = []
		while (curr)
		{
			arr.push(curr.value)
			curr = curr.next;
		}
		console.log(arr)
		return arr
	}
}

const helloStack = new Mystack()
helloStack.push(10)
helloStack.push(15)
helloStack.push(30)
helloStack.push(5)
helloStack.push(8)
helloStack.push(11)
// helloStack.pop()
helloStack.findMiddle()
// helloStack.deleteMiddle()
// helloStack.deleteMiddle()
// helloStack.printStack()
