const listTree = [
  {
    id: 1,
    name: '部门1',
    pid: 0,
    children: [
      {
        id: 2,
        name: '部门1-1',
        pid: 1,
        children: [
          {
            id: 4,
            name: '部门1-1-1',
            pid: 2,
            children: []
          }
        ]
      },
      {
        id: 3,
        name: '部门1-2',
        pid: 1,
        children: [
          {
            id: 5,
            name: '部门1-2-1',
            pid: 3,
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 6,
    name: '部门2',
    pid: 0,
    children: [
      {
        id: 7,
        name: '部门2-1',
        pid: 6,
        children: []
      }
    ]
  },
  {
    id: 8,
    name: '部门3',
    pid: 0,
    children: []
  }
]

// 期望结果

// const list = [
//   {id: 1, name: '部门1', pid: 0},
//   {id: 2, name: '部门1-1', pid: 1},
//   {id: 3, name: '部门1-2', pid: 1},
//   {id: 4, name: '部门1-1-1', pid: 2},
//   {id: 5, name: '部门1-2-1', pid: 3},
//   {id: 6, name: '部门2', pid: 0},
//   {id: 7, name: '部门2-1', pid: 6},
//   {id: 8, name: '部门3', pid: 0},
// ]


const allArr = []

function getAllArr(data) {
  data.map(item => {
    if (item.children && item.children.length > 0) {
      getAllArr(item.children)
      delete item.children
      allArr.push(item)
    } else {
      delete item.children
      allArr.push(item)
    }
  })
}

getAllArr(listTree)

console.log(`allArr ==>`, allArr.sort((a, b) => a.id - b.id));
// function getItem(tree, result) {
//   for (let i = 0; i < tree.length; i++) {
//     if (tree[i].children) {
//       getItem(tree[i].children, result)
//       delete tree[i].children;
//     }
//     result.push(tree[i])
//   }
//   return result;
// }

// function treeToList(tree) {
//   const result = [];
//   getItem(tree, result);
//   return result;
// }
// console.log(`treeToList(listTree) ==>`, treeToList(listTree).sort((a, b) => a.id - b.id));