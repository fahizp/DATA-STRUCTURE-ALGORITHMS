public class singly {
    class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
        }
    }

    public Node head = null;
    public Node tail = null;

    public void addNode (int data) {
        Node newNode = new Node(data);
        if (head == null){
            head = newNode;
        } else {
            tail.next = newNode;
        }
        tail = newNode;
    }
    
    public void display(){
        
        if(head == null) {
            System.out.println("empty");
            return;
        } 
        Node temp = head;

        while (temp != null) {
            System.out.println(temp.data);
            temp = temp.next;
        }
    }

    public void delete(int data){
        Node temp = head , prev = null;
        
        if(temp != null && temp.data == data){
            head = temp.next;
            return;
        }


        while(temp != null && temp.data != data){
            prev =  temp ;
            temp = temp.next;
        }

        if (temp == null){
            return;
        }

        if (temp == tail) {
            tail = prev;
            tail.next = null;
            return;
        }

        prev.next = temp.next;

    }

    public void insertAfter(int nextTo, int data){
        Node newNode = new Node(data);

        Node current = head;

        while (current != null && current.data != nextTo){
            current = current.next;
        }

        if (current == null){
            return;
        }

        if (current == tail){
            tail.next = current;
            tail = current ;
            return;
        }

        newNode.next = current.next ;
        current.next = newNode;

    }


    public static void main(String[] args) {
        singly list = new singly();
        list.addNode(10);
        list.addNode(50);
        list.addNode(20);
        list.addNode(40);
        list.addNode(30);
        list.display();
        list.delete(20);
        System.out.println("aaaaaaa");
        list.insertAfter(20,10);
        list.display();
    }
}