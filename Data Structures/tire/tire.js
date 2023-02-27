class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
    }
  
    search(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return node.isEndOfWord;
    }
  
    startsWith(prefix) {
      let node = this.root;
      for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return true;
    }
  
    delete(word) {
      const deleteHelper = (node, word, index) => {
        if (index === word.length) {
          if (!node.isEndOfWord) {
            return false;
          }
          node.isEndOfWord = false;
          return Object.keys(node.children).length === 0;
        }
        const char = word[index];
        if (!node.children[char]) {
          return false;
        }
        const shouldDeleteCurrentNode = deleteHelper(
          node.children[char],
          word,
          index + 1
        );
        if (shouldDeleteCurrentNode) {
          delete node.children[char];
          return Object.keys(node.children).length === 0;
        }
        return false;
      };
      deleteHelper(this.root, word, 0);
    }
  }


  t = new Trie();

  t.insert("fahiz")
  t.insert("food")
  t.insert("fund")
console.log(t.startsWith("food"));
console.log(t.delete("food"));
  console.log(t.root.children.f.children);
