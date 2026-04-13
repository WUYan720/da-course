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
  },
  {
    id: '6',
    title: '数据分析技术平台',
    description: '一个完整的数据分析技术学习平台，包含数据处理、可视化、大数据分析等核心技术',
    category: '技术栈',
    difficulty: 'intermediate',
    duration: '50小时',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20analysis%20platform%20dashboard%20modern%20interface&image_size=square_hd',
    lessons: [
      {
        id: '6-1',
        title: '平台介绍与技术栈概述',
        content: `欢迎来到数据分析技术平台！本平台旨在帮助您掌握现代数据分析的核心技术。

## 平台特色

### 交互式学习
- 实时代码编辑器
- 数据可视化实验室
- 真实数据集练习

### 技术栈覆盖
- Python 数据科学生态
- SQL 数据库技术
- 数据可视化工具
- 大数据处理框架
- 商业智能平台`,
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        exercises: [
          {
            id: '6-1-1',
            question: '数据分析技术平台的主要特色是什么？',
            type: 'multiple-choice',
            options: ['理论学习', '交互式实践', '被动观看', '考试认证'],
            answer: '交互式实践',
            explanation: '平台的主要特色是提供交互式实践环境，让用户能够实时操作和学习。'
          }
        ],
        quiz: [
          {
            id: '6-1-q1',
            question: '本平台涵盖了完整的数据分析技术栈。',
            type: 'true-false',
            options: ['正确', '错误'],
            correctAnswer: 0,
            explanation: '是的，本平台涵盖了从数据处理、可视化到大数据分析的完整技术栈。'
          }
        ]
      },
      {
        id: '6-2',
        title: 'Python 数据处理实验室',
        content: `通过交互式实验室学习 Python 数据处理技术。

## 核心功能

### 实时代码编辑器
- 内置 Jupyter 风格编辑器
- 实时执行代码
- 数据可视化输出

### 练习数据集
- 销售数据
- 用户行为数据
- 金融市场数据
- 社交媒体数据`,
        video: 'https://www.youtube.com/embed/UO98lJQ3QGI',
        exercises: [
          {
            id: '6-2-1',
            question: 'Python 中用于数据处理的核心库是？',
            type: 'multiple-choice',
            options: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
            answer: 'Pandas',
            explanation: 'Pandas 是 Python 中用于数据处理和分析的核心库。'
          }
        ],
        quiz: [
          {
            id: '6-2-q1',
            question: 'Jupyter 编辑器可以实时执行代码。',
            type: 'true-false',
            options: ['正确', '错误'],
            correctAnswer: 0,
            explanation: '是的，Jupyter 编辑器支持实时执行代码并显示结果。'
          }
        ]
      },
      {
        id: '6-3',
        title: '数据可视化仪表板',
        content: `学习创建交互式数据可视化仪表板。

## 可视化工具

### Python 可视化库
- Matplotlib
- Seaborn
- Plotly
- Bokeh

### 商业智能工具
- Tableau
- Power BI
- Google Data Studio

### 仪表板设计原则
- 数据故事讲述
- 交互设计
- 视觉层次
- 响应式布局`,
        video: 'https://www.youtube.com/embed/rfscVS0vtbw',
        exercises: [
          {
            id: '6-3-1',
            question: '哪个工具不是商业智能工具？',
            type: 'multiple-choice',
            options: ['Tableau', 'Power BI', 'Matplotlib', 'Google Data Studio'],
            answer: 'Matplotlib',
            explanation: 'Matplotlib 是 Python 的可视化库，不是商业智能工具。'
          }
        ],
        quiz: [
          {
            id: '6-3-q1',
            question: '数据可视化的核心是展示数据而不是讲述故事。',
            type: 'true-false',
            options: ['正确', '错误'],
            correctAnswer: 1,
            explanation: '数据可视化的核心不仅是展示数据，更重要的是通过数据讲述有意义的故事。'
          }
        ]
      },
      {
        id: '6-4',
        title: '大数据处理平台',
        content: `了解大数据处理技术和平台。

## 大数据技术

### 分布式计算框架
- Hadoop
- Spark
- Flink

### 数据存储
- HDFS
- NoSQL 数据库
- 数据湖
- 数据仓库

### 实时数据处理
- Kafka
- Stream Processing
- Real-time Analytics`,
        video: 'https://www.youtube.com/embed/ukzFI9rgwfU',
        exercises: [
          {
            id: '6-4-1',
            question: '哪个不是分布式计算框架？',
            type: 'multiple-choice',
            options: ['Hadoop', 'Spark', 'Flink', 'MySQL'],
            answer: 'MySQL',
            explanation: 'MySQL 是关系型数据库，不是分布式计算框架。'
          }
        ],
        quiz: [
          {
            id: '6-4-q1',
            question: 'Spark 比 Hadoop 处理速度更快。',
            type: 'true-false',
            options: ['正确', '错误'],
            correctAnswer: 0,
            explanation: '是的，Spark 使用内存计算，比 Hadoop 的磁盘计算速度更快。'
          }
        ]
      },
      {
        id: '6-5',
        title: '综合项目实践',
        content: `通过综合项目实践应用所学技术。

## 项目案例

### 销售数据分析
- 销售趋势分析
- 客户细分
- 预测模型

### 用户行为分析
- 漏斗分析
- 留存率分析
- 用户画像

### 金融市场分析
- 股票趋势分析
- 风险评估
- 投资组合优化`,
        video: 'https://www.youtube.com/embed/7B2x_7GvQ3Q',
        exercises: [
          {
            id: '6-5-1',
            question: '以下哪个不是数据分析项目案例？',
            type: 'multiple-choice',
            options: ['销售数据分析', '用户行为分析', '金融市场分析', '网络安全分析'],
            answer: '网络安全分析',
            explanation: '网络安全分析不属于传统的数据分析项目案例。'
          }
        ],
        quiz: [
          {
            id: '6-5-q1',
            question: '综合项目实践是学习数据分析的重要环节。',
            type: 'true-false',
            options: ['正确', '错误'],
            correctAnswer: 0,
            explanation: '是的，通过项目实践可以将理论知识应用到实际场景中，是学习数据分析的重要环节。'
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
