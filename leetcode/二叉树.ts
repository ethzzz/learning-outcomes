class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val: number, left: TreeNode | null, right: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

/* 
    二叉树前序遍历
*/

function preOrder(root: TreeNode | null): number[] {
    if (!root) return []
    let result: number[] = []
    while (root) {
        result.push(root.val)
        result.push(...preOrder(root.left))
        result.push(...preOrder(root.right))
    }
    return result
}

/* 
    二叉树中序遍历
*/
function inOrder(root: TreeNode | null): number[] {
    if (!root) return []
    let result: number[] = []
    while (root) {
        result.push(...preOrder(root.left))
        result.push(root.val)
        result.push(...preOrder(root.right))
    }
    return result
}

/* 
    二叉树后序遍历
*/
function postOrder(root: TreeNode | null): number[] {
    if (!root) return []
    let result: number[] = []
    while (root) {
        result.push(...preOrder(root.left))
        result.push(...preOrder(root.right))
        result.push(root.val)
    }
    return result
}

/* 
    二叉树的最大深度
*/

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

/* 
    二叉树翻转
*/

function reverseTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null
    let left = reverseTree(root.left)
    let right = reverseTree(root.right)

    root.left = right
    root.right = left

    return root
}

/* 
    二叉树完全对称
*/

function isSymmetric(root: TreeNode | null): boolean {
    function compare(left, right) {
        if (left == null && right == null) {
            return true
        }
        if (left == null || right == null) {
            return false
        }

        return (left.val === right.val) && compare(left.right, right.left) && compare(left.left, right.right)
    }

    return compare(root, root)
};

/* 
    二叉树的直径
    直径：两节点的最长路径（边数）
    不必经过根节点
*/

function diameterOfBinaryTree(root: TreeNode | null): number {
    let max = 0;
    function depth(root: TreeNode | null): number {
        if (!root) return 0
        let L: number = depth(root.left)
        let R: number = depth(root.right)
        if (L + R > max) {
            max = L + R
        }
        return 1 + Math.max(L, R)
    }
    depth(root)
    return max
};
