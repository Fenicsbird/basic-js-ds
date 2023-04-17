const { NotImplementedError } = require('../extensions/index.js');

//const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root1 = null;
    }

    root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.root1;
    }

    add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.root1 = addWithIn(this.root1, data);

    function addWithIn(node, data) {
        if (!node) {
            return new Node(data);
        }

        if (node.data === data) {
            return node;
        }

        if (data < node.data) {
            node.left = addWithIn(node.left, data);
        } else {
            node.right = addWithIn(node.right, data);
        }
        return node;
    }
    }

    has(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return searchWithIn(this.root1, data);

    function searchWithIn(node, data) {
        if (!node) {
            return false;
        }

        if (node.data === data) {
            return true;
        }
        return data < node.data ?
        searchWithIn(node.left, data) :
        searchWithIn(node.right, data);
    }
}

    find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let current = this.root1;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }

    remove(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.root1 = removeNode(this.root1, data);

    function removeNode(node, data) {
        if (!node) {
            return null;
        }

        if (data < node.data) {
            node.left = removeNode(node.left, data);
            return node;
        } else if (node.data < data) {
            node.right = removeNode(node.right, data);
            return node;
        } else {
            if (!node.left && !node.right) {
                return null;
            }

            if (!node.left) {
                node = node.right;
                return node;
            }

            if (!node.right) {
                node = node.left;
                return node;
            }

        let minFromRight = node.right;
        while (minFromRight.left) {
            minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
        }
    }
}

    min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.root1) {
        return;
    }

    let node = this.root1;
    while (node.left) {
        node = node.left;
    }
    return node.data;
    }

    max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.root1) {
        return;
    }

    let node = this.root1;
    while (node.right) {
        node = node.right;
    }
    return node.data;
    }
}


module.exports = {
    BinarySearchTree
};