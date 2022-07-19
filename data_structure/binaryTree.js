// Each node in a binary tree data structure must have the following properties:-
// key: The key of the node
// value: The value of the node
// parent: The parent of the node (null if there is none)
// left: A pointer to the node's left child (null if there is none)
// right: A pointer to the node's right child (null if there is none)

// The main operations of a binary tree data structure are:-
// insert: Inserts a node as a child of the given parent node
// remove: Removes a node and its children from the binary tree
// find: Retrieves a given node
// preOrderTraversal: Traverses the binary tree by recursively traversing each node followed by its children
// postOrderTraversal: Traverses the binary tree by recursively traversing each node's children followed by the node
// inOrderTraversal: Traverses the binary tree by recursively traversing each node's left child, followed by the node, followed by its right child

// ------------------------------------------------------------------ //

class BinaryTreeNode {
    constructor(key, value = key, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    get isLeaf() {
        return this.left === null && this.right === null;
    }

    get hasChildren() {
        return !this.isLeaf;
    }
}

class BinaryTree {
    constructor(key, value = key) {
        this.root = new BinaryTreeNode(key, value);
    }

    * inOrderTraversal(node = this.root) {
        if (node.left) yield* this.inOrderTraversal(node.left);
        yield node;
        if (node.right) yield* this.inOrderTraversal(node.right);
    }

    * postOrderTraversal(node = this.root) {
        if (node.left) yield* this.postOrderTraversal(node.left);
        if (node.right) yield* this.postOrderTraversal(node.right);
        yield node;
    }

    * preOrderTraversal(node = this.root) {
        yield node;
        if (node.left) yield* this.preOrderTraversal(node.left);
        if (node.right) yield* this.preOrderTraversal(node.right);
    }

    insert(
        parentNodeKey,
        key,
        value = key, {
            left,
            right
        } = {
                left: true,
                right: true
            }
    ) {
        for (let node of this.preOrderTraversal()) {
            if (node.key === parentNodeKey) {
                const canInsertLeft = left && node.left === null;
                const canInsertRight = right && node.right === null;
                if (!canInsertLeft && !canInsertRight) return false;
                if (canInsertLeft) {
                    node.left = new BinaryTreeNode(key, value, node);
                    return true;
                }
                if (canInsertRight) {
                    node.right = new BinaryTreeNode(key, value, node);
                    return true;
                }
            }
        }
        return false;
    }

    remove(key) {
        for (let node of this.preOrderTraversal()) {
            if (node.left.key === key) {
                node.left = null;
                return true;
            }
            if (node.right.key === key) {
                node.right = null;
                return true;
            }
        }
        return false;
    }

    find(key) {
        for (let node of this.preOrderTraversal()) {
            if (node.key === key) return node;
        }
        return undefined;
    }
}
class BinarySearchTree {
    constructor(key, value = key) {
        this.root = new BinarySearchTreeNode(key, value);
    }

    * inOrderTraversal(node = this.root) {
        if (node.left) yield* this.inOrderTraversal(node.left);
        yield node;
        if (node.right) yield* this.inOrderTraversal(node.right);
    }

    * postOrderTraversal(node = this.root) {
        if (node.left) yield* this.postOrderTraversal(node.left);
        if (node.right) yield* this.postOrderTraversal(node.right);
        yield node;
    }

    * preOrderTraversal(node = this.root) {
        yield node;
        if (node.left) yield* this.preOrderTraversal(node.left);
        if (node.right) yield* this.preOrderTraversal(node.right);
    }

    insert(key, value = key) {
        let node = this.root;
        while (true) {
            if (node.key === key) return false;
            if (node.key > key) {
                if (node.left !== null) node = node.left;
                else {
                    node.left = new BinarySearchTreeNode(key, value, node);
                    return true;
                }
            } else if (node.key < key) {
                if (node.right !== null) node = node.right;
                else {
                    node.right = new BinarySearchTreeNode(key, value, node);
                    return true;
                }
            }
        }
    }

    has(key) {
        for (let node of this.postOrderTraversal()) {
            if (node.key === key) return true;
        }
        return false;
    }

    find(key) {
        for (let node of this.postOrderTraversal()) {
            if (node.key === key) return node;
        }
        return undefined;
    }

    remove(key) {
        const node = this.find(key);
        if (!node) return false;
        const isRoot = node.parent === null;
        const isLeftChild = !isRoot ? node.parent.left === node : false;
        const hasBothChildren = node.left !== null && node.right !== null;

        if (node.isLeaf) {
            if (!isRoot) {
                if (isLeftChild) node.parent.left = null;
                else node.parent.right = null;
            } else {
                this.root = null;
            }
            return true;
        } else if (!hasBothChildren) {
            const child = node.left !== null ? node.left : node.right;
            if (!isRoot) {
                if (isLeftChild) node.parent.left = child;
                else node.parent.right = child;
            } else {
                this.root = child;
            }
            child.parent = node.parent;
            return true;
        } else {
            const rightmostLeft = [...this.inOrderTraversal(node.left)].slice(-1)[0];
            rightmostLeft.parent = node.parent;
            if (!isRoot) {
                if (isLeftChild) node.parent.left = rightmostLeft;
                else node.parent.right = rightmostLeft;
            } else {
                this.root = rightmostLeft;
            }
            rightmostLeft.right = node.right;
            node.right.parent = rightmostLeft;
            return true;
        }
    }
}

const tree = new BinaryTree(1, 'AB');

tree.insert(1, 11, 'AC');
tree.insert(1, 12, 'BC');
tree.insert(12, 121, 'BG', {
    right: true
});

console.log(tree.root.value);
console.log(tree.root.hasChildren);
console.log(tree.find(12).isLeaf);
console.log(tree.find(121).isLeaf);
console.log(tree.find(121).parent.value);

console.log("Tree -- ");
[...tree.postOrderTraversal()].map(x => console.log(x.value));
tree.remove(12);
console.log("Tree -- ");
[...tree.postOrderTraversal()].map(x => console.log(x.value));
