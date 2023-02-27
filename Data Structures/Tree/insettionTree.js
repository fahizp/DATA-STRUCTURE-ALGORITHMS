// class Node {
//     constructor(value){
//         this.value=value;
//         this.left=null;
//         this.right=null;
//     }
    
// }

// class BinarySearchTree{
//     constructor(){
//         this.root=null;

//     }
//     insert(value){
//         let newNode = new Node(value);
//         if(!this.root){
//             this.root = newNode;
//             return this
//         }
//         let current = this.root;

//         while (true) {
//             if (value === current.value) return undefined;

//             if (value < current.value) {
//                 if (!current.left) {
//                     current.left= newNode;
//                     return this
//                 }
//                 current = current.left
//             }else{
//                 if (value>current.value) {
//                 if (!current.right) {
//                     current.right = newNode;
//                     return this;
//                 }
//                 current = current.right;
//                 }
//             }
//         }

//     }
// }


// let bts = new BinarySearchTree();
// bts.insert(100)
// bts.insert(70);
// bts.insert(110);
// bts.insert(40);
// bts.insert(50);
// bts.insert(100);
// bts.insert(90);
// bts.insert(110);

// console.log(bts.root);





class Node {
    constructor(value){
        this.value= value;
        this.left= null;
        this.right= null;

    }
}
class BinarySearchTree{
    constructor(){
        this.root=null;

    }

    insert(value){
      let newNode = new Node(value);
      if (!this.root) {
        this.root = newNode;
    return this;  
    }

    let current = this.root;

    while (true) {
        if (value === current.value) return this;

        if (value < current.value) {
            if (!current.left) {
                current.left = newNode;
                return this;
            }
            current = current.left
        }else{
            if (!current.right) {
                current.right= newNode;
                return this;
            }
            current = current.right
        }
    }

    }
   find(value){
       if(this.root===null) return false;
    var current = this.root,
    found= false;
    while (current&&!found) {
        if (value<current.value) {
            current=current.left;
        }else if(value<current.right){
            current = current.right;
        }else{
            found = true
        }
    }
    if(!found) return undefined;
    return current
   }

   BFS(){
    var node = this.root,
    queue=[],
    data = [];

    queue.push(node);
    while (queue.length) {
        node = queue.shift()
        data.push(node.value)
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }
    return data;
   }

 DFSPreOrder(){
    var data = [];
    function traverse(node) {
        data.push(node.value);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data
 }
 DFSPostOrder(){
  var data = [];
  function traverse(node) {
    if(node.left) traverse(node.left);
    if(node.right) traverse(node.right);
    data.push(node.value)
  }
  traverse(this.root);
  return data
 }
 DFSInOrder(){
    var data = [];
    function traverse(node) {
        if(node.left) traverse(node.left);
        data.push(node.value);
        if(node.right) traverse(node.right);

    }
    traverse(this.root);
    return data;
 }


 delete(value) {
    // Call recursive function to delete node
    this.root = this._deleteNode(this.root, value);
  }

  _deleteNode(node, value) {
    // Base case: node is null, so return null
    if (node === null) {
      return null;
    }

    // Check if the value to be deleted is less than the node's value,
    // then recursively call _deleteNode on the left subtree
    if (value < node.value) {
      node.left = this._deleteNode(node.left, value);
      return node;
    }

  //   // Check if the value to be deleted is greater than the node's value,
  //   // then recursively call _deleteNode on the right subtree
    if (value > node.value) {
      node.right = this._deleteNode(node.right, value);
      return node;
    }

  //   // If we reach here, we've found the node to delete

  //   // Case 1: Node has no children
    if (node.left === null && node.right === null) {
      return null;
    }

  //   // Case 2: Node has one child
    if (node.left === null) {
      return node.right;
    }

    if (node.right === null) {
      return node.left;
    }

  //   // Case 3: Node has two children
  //   // Find the smallest value in the right subtree
    let minRight = node.right;
    while (minRight.left !== null) {
      minRight = minRight.left;
    }

    // Replace the node's value with the smallest value in the right subtree
    node.value = minRight.value;

    // Delete the smallest value in the right subtree
    node.right = this._deleteNode(node.right, minRight.value);

}


}

let bts = new BinarySearchTree();
bts.insert(10)
bts.insert(6)
bts.insert(15)
bts.insert(3)
bts.insert(8)
bts.insert(20)
bts.delete(6)



// console.log(bts.find(70));

console.log(bts.BFS());
console.log(bts.DFSPreOrder());
console.log(bts.DFSPostOrder());
console.log(bts.DFSInOrder());

// console.log(bts.root);