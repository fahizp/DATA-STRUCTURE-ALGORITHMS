class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(element) {
    var node = new Node(element);
    var current;
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
    //   current = this.head;

    //   while (current.next) {
    //     current = current.next;
    //   }

    //   current.next = node;
    }
    this.tail = node;
    this.size++;
  }

  // addInto(element,n){
  //   var node = new Node(element)
  //   var current = this.head;
  //   let prev = null;

  //   let i = o 
  //   while (i<=n){
  //       current = current.next
  //   }


  // }

  // addBeg(element) {
  //   var node = new Node(element);
  //   node.next = this.head;
  //   this.head = node;
  // }

  // deleteNode(key) {
  //   let temp = this.head;
  //   let prev = null;

  //   if (temp != null && temp.element == key) {
  //     console.log("head found match");
  //     this.head = temp.next;
  //     return;
  //   }

  //   while (temp != null && temp.element != key) {
  //     prev = temp;
  //     temp = temp.next;
  //   }

  //   if (temp == null) {
  //     console.log("value not matched");
  //     return;
  //   }

  //   prev.next = temp.next;
  // }

  // // checks the list for empty
  // isEmpty() {
  //   return this.size == 0;
  // }

  // prints the list items
  printList() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }
}

var ll = new LinkedList();

// console.log(ll.isEmpty());

ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);

// ll.addBeg (5);

// let arr = [15, 24, 34, 54, 6, 56, 78];
// for (let i = 0; i < arr.length; i++) {
//   ll.add(arr[i]);
// }

// ll.deleteNode();

ll.printList();
