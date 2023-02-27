class TrieNode {
    constructor(){
        this.children = [];
        this.root = null;

    }
}

class Trie {
    constructor(){
        this.root = new TrieNode;
    }
insert(word){
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node.children[char]) {
            node.children[char] = new TrieNode();
        }
        node= node.children[char];
    }
    node.isEndOfWord=true;
}

  
}

t = new Trie();

t.insert("fahiz");
t.insert("food");


console.log(t.root.children.f.children);