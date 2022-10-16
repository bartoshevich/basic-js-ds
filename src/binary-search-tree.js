const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    if (!this.data) {
      return null;
    } else {
      return this.data;
    }
  }

  add(data) {
    this.data = add(this.data, data);

    function add(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = add(node.left, data)
      }

      if (data > node.data) {
        node.right = add(node.right, data)
      }

      return node;

    }
  }

  has(data) {
    return isInclude(this.data, data);

    function isInclude(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return isInclude(node.left, data)
      } else {
        return isInclude(node.right, data)
      }
    }
  }



  find(data) {

    // return this.has(data) ? this.data : null; 

    return find(this.data, data)

    function find(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return find(node.left, data)
      } else {
        return find(node.right, data)
      }
    }

  }


  remove(data) {
    this.data = this.remove(this.data, data);

    function remove(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.value) {
        node.left = remove(node.left, data);
        return node;
      } else if (data > node.value) {
        node.right = remove(node.right, data);
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

        let curruntNode = node.right;
        while (curruntNode.left) {
          curruntNode = curruntNode.left;
        }

        node.data = curruntNode.data;
        node.right = remove(node.right, curruntNode.data);

        return node;

      }

    }
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};