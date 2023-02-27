class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    //iterative insert method
    insert(value) {
      let newNode = new Node(value);
      if (!this.root) {
        this.root = newNode;
        return this;
      }
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
  
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  
    // //recursive insert
    // insertRecursive(value) {
    //   const newNode=new Node(value)
  
      
  
    //   const insert=(current,value)=>{
    //     if(value<current.value){
    //       if(!current.left){
    //         current.left=newNode
    //       }else{
    //         insert(current.left,value)
    //       }
    //     }else{
    //       if(!current.right){
    //         current.right=newNode
    //       }else{
    //         insert(current.right,value)
    //       }
    //     }
    //   }
  
  
    //   if(!this.root){
    //     this.root=newNode
    //     return
    //   }else{
    //     insert(this.root,value)
    //   }
    // }
  
    // get(value) {
    //   if (!this.root) {
    //     return "no data found";
    //   }
  
    //   let current = this.root;
  
    //   while (current) {
    //     if (value < current.value) {
    //       current = current.left;
    //     } else if (value > current.value) {
    //       current = current.right;
    //     } else if (current.value === value) {
    //       return current;
    //     }
    //   }
    //   return "no such element";
    // }
  
  
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
  
    //   // Replace the node's value with the smallest value in the right subtree
      node.value = minRight.value;
  
      // Delete the smallest value in the right subtree
      node.right = this._deleteNode(node.right, minRight.value);
  
      return node;
    }
  
  
  
    // //inorder traversal
    // inorder(){ 
    //   this.inorderTraverse(this.root)
    // }
    // inorderTraverse(node){
    //   if(!node){
    //     return null
    //   }
    //   this.inorderTraverse(node.left)
    //   console.log(node.value);
    //   this.inorderTraverse(node.right)
      
    // }
  
    // preorder(){
    //   this.preorderTraverse(this.root)
    // }
    // preorderTraverse(node){
    //   if(!node){
    //     return null
    //   }
    //   console.log(node.value);
    //   this.preorderTraverse(node.left)
    //   this.preorderTraverse(node.right)
    // }
  
    // findClosestValue(target){
    //   let current=this.root
    //   let closestValue=current.value
  
    //   while(current){
    //     if(current.value===target){
    //       console.log('value already exist');
    //       return current.value
    //     }
  
    //     if(Math.abs(current.value-target)<Math.abs(closestValue-target)){
    //       closestValue=current.value
    //     }
  
    //     if(current.value<target){
    //       current=current.right
    //     }else{
    //       current=current.left
    //     }
  
    //   }
    //   return `closest value is ${closestValue}`
    // }
  }
  
  
  
  
  let bts = new BinarySearchTree();
  // bts.insert(100)
  // bts.insert(70);
  // bts.insert(110);
  // bts.insert(40);
  // bts.insert(50);
  // bts.insert(100);
  // bts.insert(90);
  // bts.insert(110);
  // console.log(bts.root.left.left.right);
  
  
  // bts.insertRecursive(111);
  // bts.insertRecursive(112);
  // bts.insertRecursive(90);
  // bts.delete(100)
  // console.log(bts.get(111));
  // console.log(bts.inorder());
  // console.log(bts.preorder());
  // console.log(bts);
  // console.log(bts.findClosestValue(90))