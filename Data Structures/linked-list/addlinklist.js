class Node {
    constructor(element){
        this.element = element ;
        this.next = null ;

    }
}

class  LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }

    add(element) {
        var node = new Node(element);
        if (this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          this.tail.next = node;
        }
        this.tail = node;
        this.size++;
      }

    
  deleteNode(key) {
    let temp = this.head;
    let prev = null;

    if (temp != null && temp.element == key) {
      console.log("head found match");
      this.head = temp.next;
      return;
    }

    while (temp != null && temp.element != key) {
      prev = temp;
      temp = temp.next;
    }

    if (temp == null) {
      console.log("value not matched");
      return;
    }

    prev.next = temp.next;
  }

reverse(){
    let current = this.head;
    let prev = null;
    let after = null;
    this.tail = current;
    while (current) {
        after= current.next;
        current.next=prev;
        prev=current;
        current=after;
    }
    this.head=prev;
}


      printList(){
        var curr = this.head;
        var str = "";
        while (curr){
            str += curr.element+" ";
            curr = curr.next;
        }
        console.log(str);
      }
}


var ll = new LinkedList();


ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.printList()
ll.reverse()
ll.printList()