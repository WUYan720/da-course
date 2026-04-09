import { Course, Achievement } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Python 数据分析基础',
    description: '学习 Python 编程基础，掌握数据分析必备的编程技能',
    category: '编程基础',
    difficulty: 'beginner',
    duration: '20小时',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=python%20data%20analysis%20course%20cover&image_size=square_hd',
    lessons: [
      {
        id: '1-1',
        title: 'Python 入门',
        content: 'Python 是一种高级编程语言，具有简洁易读的语法。它在数据分析、人工智能、Web开发等领域广泛应用。\n\n## 基础语法\n\n### 变量和数据类型\n```python\n# 整数\nage = 25\n\n# 浮点数\nprice = 19.99\n\n# 字符串\nname = "张三"\n\n# 布尔值\nis_student = True\n```\n\n### 列表和字典\n```python\n# 列表\nnumbers = [1, 2, 3, 4, 5]\n\n# 字典\nstudent = {\n    "name": "李四",\n    "age": 20,\n    "major": "商务数据分析"\n}\n```',
        video: 'https://www.youtube.com/embed/rfscVS0vtbw',
        exercises: [
          {
            id: '1-1-1',
            question: 'Python 中用于定义列表的符号是？',
            type: 'multiple-choice',
            options: ['()', '[]', '{}', '<>'],
            answer: '[]',
            explanation: 'Python 中使用方括号 [] 来定义列表。'
          }
        ],
        quiz: [
          {
            id: '1-1-q1',
            question: 'Python 是一种编译型语言。',
            type: 'true-false',
            options: ['正确', '错误'],
            correctAnswer: 1,
            explanation: 'Python 是一种解释型语言，不是编译型语言。'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Excel 数据处理与分析',
    description: '掌握 Excel 高级功能，提高数据处理效率',
    category: '工具使用',
    difficulty: 'beginner',
    duration: '15小时',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=excel%20data%20analysis%20course%20cover&image_size=square_hd',
    lessons: [
      {
        id: '2-1',
        title: 'Excel 公式与函数',
        content: 'Excel 提供了丰富的函数来处理数据。常用函数包括：\n\n## 常用函数\n\n### 数学函数\n- SUM(): 求和\n- AVERAGE(): 平均值\n- MAX(): 最大值\n- MIN(): 最小值\n\n### 逻辑函数\n- IF(): 条件判断\n- AND(): 且\n- OR(): 或\n\n### 查找函数\n- VLOOKUP(): 垂直查找\n- INDEX(): 索引\n- MATCH(): 匹配',
        video: 'https://www.youtube.com/embed/7B2x_7GvQ3Q',
        exercises: [
          {
            id: '2-1-1',
            question: '计算 A1 到 A10 单元格的平均值，应该使用哪个函数？',
            type: 'multiple-choice',
            options: ['SUM(A1:A10)', 'AVERAGE(A1:A10)', 'MEAN(A1:A10)', 'AVG(A1:A10)'],
            answer: 'AVERAGE(A1:A10)',
            explanation: 'AVERAGE() 函数用于计算平均值。'
          }
        ],
        quiz: [
          {
            id: '2-1-q1',
            question: 'VLOOKUP 函数可以从左向右查找数据。',
            type: 'true-false',
            options: ['正确', '错误'],
            correctAnswer: 0,
            explanation: 'VLOOKUP 函数确实是从左向右查找数据。'
          }
        ]
      }
    ]
  },
  {
    id: '3',
    title: '数据可视化实战',
    description: '学习使用 Matplotlib 和 Seaborn 创建专业的数据图表',
    category: '可视化',
    difficulty: 'intermediate',
    duration: '25小时',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20visualization%20charts%20course%20cover&image_size=square_hd',
    lessons: [
      {
        id: '3-1',
        title: 'Matplotlib 基础',
        content: 'Matplotlib 是 Python 中最常用的数据可视化库。\n\n## 基础绘图\n\n```python\nimport matplotlib.pyplot as plt\nimport numpy as np\n\n# 创建数据\nx = np.linspace(0, 10, 100)\ny = np.sin(x)\n\n# 绘制折线图\nplt.figure(figsize=(10, 6))\nplt.plot(x, y)\nplt.title(\'正弦曲线\')\nplt.xlabel(\'x\')\nplt.ylabel(\'sin(x)\')\nplt.grid(True)\nplt.show()\n```',
        video: 'https://www.youtube.com/embed/UO98lJQ3QGI',
        exercises: [
          {
            id: '3-1-1',
            question: 'Matplotlib 中用于显示图表的函数是？',
            type: 'multiple-choice',
            options: ['plt.display()', 'plt.show()', 'plt.plot()', 'plt.draw()'],
            answer: 'plt.show()',
            explanation: 'plt.show() 函数用于显示图表。'
          }
        ],
        quiz: [
          {
            id: '3-1-q1',
            question: 'Seaborn 是基于 Matplotlib 的高级可视化库。',
            type: 'true-false',
            options: ['正确', '错误'],
            correctAnswer: 0,
            explanation: 'Seaborn 确实是基于 Matplotlib 构建的高级可视化库。'
          }
        ]
      }
    ]
  },
  {
    id: '4',
    title: '统计分析与假设检验',
    description: '学习统计学基础，掌握假设检验方法',
    category: '统计学',
    difficulty: 'intermediate',
    duration: '30小时',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=statistics%20analysis%20course%20cover&image_size=square_hd',
    lessons: [
      {
        id: '4-1',
        title: '描述性统计',
        content: '描述性统计用于总结和描述数据的基本特征。\n\n## 集中趋势\n- 均值（Mean）\n- 中位数（Median）\n- 众数（Mode）\n\n## 离散程度\n- 方差（Variance）\n- 标准差（Standard Deviation）\n- 四分位数（Quartiles）',
        video: 'https://www.youtube.com/embed/0M0tXaQd2Ss',
        exercises: [
          {
            id: '4-1-1',
            question: '不受极端值影响的集中趋势度量是？',
            type: 'multiple-choice',
            options: ['均值', '中位数', '众数', '方差'],
            answer: '中位数',
            explanation: '中位数不受极端值的影响，是稳健的集中趋势度量。'
          }
        ],
        quiz: [
          {
            id: '4-1-q1',
            question: '标准差是方差的平方根。',
            type: 'true-false',
            options: ['正确', '错误'],
            correctAnswer: 0,
            explanation: '标准差确实是方差的平方根。'
          }
        ]
      }
    ]
  },
  {
    id: '5',
    title: '机器学习入门',
    description: '了解机器学习基本概念，掌握常用算法',
    category: '机器学习',
    difficulty: 'advanced',
    duration: '40小时',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=machine%20learning%20course%20cover&image_size=square_hd',
    lessons: [
      {
        id: '5-1',
        title: '机器学习概述',
        content: '机器学习是人工智能的一个分支，使计算机能够从数据中学习。\n\n## 主要类型\n\n### 监督学习\n- 分类（Classification）\n- 回归（Regression）\n\n### 无监督学习\n- 聚类（Clustering）\n- 降维（Dimensionality Reduction）\n\n### 强化学习\n- 智能体与环境交互\n- 通过奖励学习',
        video: 'https://www.youtube.com/embed/ukzFI9rgwfU',
        exercises: [
          {
            id: '5-1-1',
            question: '预测房价属于什么类型的机器学习问题？',
            type: 'multiple-choice',
            options: ['分类', '回归', '聚类', '降维'],
            answer: '回归',
            explanation: '房价预测是回归问题，因为预测的是连续值。'
          }
        ],
        quiz: [
          {
            id: '5-1-q1',
            question: '监督学习需要标注数据。',
            type: 'true-false',
            options: ['正确', '错误'],
            correctAnswer: 0,
            explanation: '监督学习确实需要带有标签的训练数据。'
          }
        ]
      }
    ]
  }
];

export const achievements: Achievement[] = [
  {
    id: 'first-lesson',
    title: '初学者',
    description: '完成你的第一节课',
    icon: '🎓',
    type: 'completion',
    requirement: 1,
    points: 50
  },
  {
    id: 'course-complete',
    title: '课程达人',
    description: '完成一门完整的课程',
    icon: '🏆',
    type: 'completion',
    requirement: 1,
    points: 200
  },
  {
    id: 'quiz-master',
    title: '测验专家',
    description: '在一次测验中获得满分',
    icon: '⭐',
    type: 'score',
    requirement: 100,
    points: 100
  },
  {
    id: 'explorer',
    title: '探索者',
    description: '浏览所有课程',
    icon: '🔍',
    type: 'exploration',
    requirement: 5,
    points: 150
  },
  {
    id: 'high-scorer',
    title: '高分选手',
    description: '累计获得1000积分',
    icon: '💎',
    type: 'score',
    requirement: 1000,
    points: 300
  }
];
