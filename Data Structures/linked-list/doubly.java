public class doubly {
 
	class Node{
		int data;
		Node next;
		Node prev;
		
		Node(int data){
			this.data=data;
		}
	}
	
	public Node head = null;
	public Node tail = null; 
	
	
	public void addto(int data) {
		
		Node newNode = new Node(data);
		
		if(head==null) {
			head=newNode;
		}else {
			tail.next= newNode;
			newNode.prev=tail;
		}
		tail=newNode;
		
	}
	
	public void display() {
		Node temp = head; 
		if(temp==null) {
			System.out.println("empty");
		}else {
			
			while(temp!=null) {
				System.out.println("value is "+ temp.data);
				temp=temp.next;
			}
		}
	}
	public void displayPrev() {
		Node temp = tail; 
		if(temp==null) {
			System.out.println("empty");
		}else {
			
			while(temp!=null) {
				System.out.println("value is "+ temp.data);
				temp=temp.prev;
			}
		}
	}
	
	
	public void delete(int data) {
		Node temp=head,prev=null,value=null;
		
		if(temp!=null && temp.data==data) {
			head=temp.next;
			return;
		}
		
		while(temp!=null && temp.data!=data) {
			prev=temp;
			temp=temp.next;
		}
		
		if(temp==null) {
			return;
		}
		if(temp==tail) {
			tail=prev;
			prev.next=null;
		}
		
		value=temp.next;
		value.prev=prev;
		prev.next=value;
	}
	
	public void insertFwrd(int nextTO,int data) {
		Node newNode = new Node(data);
		Node temp = head;
		while(temp!=null && temp.data!=nextTO) {
			temp=temp.next;
		}
		if(temp==null) {
			return;
		}
		if(temp==tail) {
			newNode.prev=tail;
			tail.next=newNode;
			tail=newNode;
			return;
		}
		
		newNode.next=temp.next;
		newNode.prev=temp;
		temp.next=newNode;
		
		
	}
	public void insertFwrdprev(int nextTO,int data1,int data2) {
		Node newNode1 = new Node(data1);
		Node newNode2 = new Node(data2);
		Node temp = head,back=null;
		while(temp!=null && temp.data!=nextTO) {
			back=temp;
			temp=temp.next;
		}
		if(temp==null) {
			return;
		}
		if(temp==tail) {
			newNode1.prev=tail;
			tail.next=newNode1;
			newNode2.next=tail;
			newNode2.prev=back;
			tail.prev=newNode2;
			back.next=newNode2;
			tail=newNode1;
			return;
		}
		
		newNode1.next=temp.next;
		newNode1.prev=temp;
		temp.next=newNode1;
		newNode2.next=temp;
		newNode2.prev=back;
		temp.prev=newNode2;
		back.next=newNode2;
		
		
	}
	
	public static void main(String[] args) {
		doubly list = new doubly();
		int arr[]= {5,10,15,20};
		for(int i=0;i <arr.length;i++) {
			list.addto(arr[i]);
		}
		list.display();
	}
}