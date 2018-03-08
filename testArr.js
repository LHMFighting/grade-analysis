var numArr = [
  [
    [1],
    [2],
    [3]
  ],
  [
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4]
  ]
]

// 所有学生的成绩（数组里的每一个对象都是一个学生对象）
var student = {
  sum: 0,
  parent: '1班', // 隶属于哪一个班
  questions: [] // 数组里的每一个对象都是大题对象（一、二、三等）
}

var allGrade = [
  {
    sum: 0,
    parent: '1班',
    questions: [
      {
        parent: '1',
        sum: 15,
        questions: [
          1.5,
          1.5,
          1.5,
          1.5,
          1.5,
          1.5,
          1.5,
          1.5,
          1.5,
          1.5
        ]
      },
      {
        parent: '2',
        sum: 36.0,
        questions: [
          {
            parent: '2.1',
            sum: 9.0,
            questions: [
              1.5,
              1.5,
              1.5,
              1.5,
              1.5,
              1.5,
              1.5
            ]
          }
        ]
      }
    ]
  },
  {
    sum: 0,
    parent: '1班',
    questions: [
      {
        parent: '1',
        sum: 15,
        questions: [
          1.5,
          1.5,
          1.5,
          1.5,
          1.5,
          1.5,
          1.5,
          1.5,
          1.5,
          1.5
        ]
      },
      {
        parent: '2',
        sum: 36.0,
        questions: [
          {
            parent: '2.1',
            sum: 9.0,
            questions: [
              1.5,
              1.5,
              1.5,
              1.5,
              1.5,
              1.5,
              1.5
            ]
          }
        ]
      }
    ]
  }
]

console.log(numArr)
