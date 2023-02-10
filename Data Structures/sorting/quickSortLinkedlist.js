// javascript program for Quick Sort on Singly Linked List

/*sort a linked list using quick sort*/

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

var head;

function addNode(data) {
    if (head == null) {
        head = new Node(data);
        return;
    }

    var curr = head;
    while (curr.next != null)
        curr = curr.next;

    var newNode = new Node(data);
    curr.next = newNode;
}

function printList( n) {
    while (n != null) {
        document.write(n.data);
        document.write(" ");
        n = n.next;
    }
}

// takes first and last node,
// but do not break any links in
// the whole linked list
function partitionLast( start, end) {
    if (start == end || start == null || end == null)
        return start;

    var pivot_prev = start;
    var curr = start;
    var pivot = end.data;

    // iterate till one before the end,
    // no need to iterate till the end
    // because end is pivot
    while (start != end) {
        if (start.data < pivot) {
            // keep tracks of last modified item
            pivot_prev = curr;
            var temp = curr.data;
            curr.data = start.data;
            start.data = temp;
            curr = curr.next;
        }
        start = start.next;
    }

    // swap the position of curr i.e.
    // next suitable index and pivot
    var temp = curr.data;
    curr.data = pivot;
    end.data = temp;

    // return one previous to current
    // because current is now pointing to pivot
    return pivot_prev;
}

function sort( start, end) {
    if (start == null || start == end || start == end.next)
        return;

    // split list and partition recurse
    var pivot_prev = partitionLast(start, end);
    sort(start, pivot_prev);

    // if pivot is picked and moved to the start,
    // that means start and pivot is same
    // so pick from next of pivot
    if (pivot_prev != null && pivot_prev == start)
        sort(pivot_prev.next, end);

    // if pivot is in between of the list,
    // start from next of pivot,
    // since we have pivot_prev, so we move two nodes
    else if (pivot_prev != null && pivot_prev.next != null)
        sort(pivot_prev.next.next, end);
}

// Driver Code

    addNode(30);
    addNode(3);
    addNode(4);
    addNode(20);
    addNode(5);

    var n = head;
    while (n.next != null)
        n = n.next;

    document.write("Linked List before sorting<br/>");
    printList(head);

    sort(head, n);

    document.write("<br/>Linked List after sorting<br/>");
    printList(head);

// This code contributed by umadevi9616
