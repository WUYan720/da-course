import { Course, Achievement } from '../types';

// Python数据分析AI训练平台课程
const aiTrainingCourse: Course = {
  id: '7',
  title: 'Python数据分析AI训练平台',
  description: '基于Cloudflare免费资源的Python数据分析实操训练平台，采用"3步认知+10个梯度项目+AI错题倒逼"模式',
  category: 'AI训练',
  difficulty: 'beginner',
  duration: '30小时',
  image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=python%20data%20analysis%20ai%20training%20platform%20modern%20interface&image_size=square_hd',
  lessons: [
    {
      id: '7-1',
      title: '第一天：底层认知',
      content: `# 第一天：底层认知

## 思维模型

### 数据分析的核心思维
- 问题导向：以业务问题为核心，数据为工具
- 逻辑推理：从数据到洞察的严谨推导
- 可视化表达：将复杂数据转化为清晰图表
- 批判性思维：对数据和结论保持怀疑态度

### 数据分析的流程
1. 问题定义：明确分析目标和业务问题
2. 数据收集：获取相关数据集
3. 数据清洗：处理缺失值、异常值
4. 探索分析：发现数据中的模式和趋势
5. 建模分析：应用统计或机器学习方法
6. 结果呈现：用图表和报告展示发现
7. 行动建议：基于分析结果提出建议

## 行业争议

### 数据分析的局限性
- 数据质量问题：数据不完整、不准确
- 相关性 vs 因果性：相关不等于因果
- 过度拟合：模型过于复杂，泛化能力差
- 伦理问题：数据隐私、算法偏见

### 数据分析的未来趋势
- 自动化分析：AI辅助数据分析
- 实时分析：实时处理和分析数据
- 跨领域融合：结合领域知识和数据分析
- 可解释性：提高模型的可解释性

## 辨析题

1. 数据分析的核心是统计工具的使用。
   - 错误：数据分析的核心是解决业务问题，工具只是手段

2. 数据越多，分析结果越准确。
   - 错误：数据质量比数量更重要

3. 机器学习模型可以完全替代人工分析。
   - 错误：机器学习是辅助工具，需要人类的专业判断

4. 相关性分析可以证明因果关系。
   - 错误：相关性不等于因果性，需要实验验证`,
      exercises: [
        {
          id: '7-1-1',
          question: '数据分析的核心是什么？',
          type: 'multiple-choice',
          options: ['统计工具的使用', '解决业务问题', '数据可视化', '机器学习模型'],
          answer: '解决业务问题',
          explanation: '数据分析的核心是解决业务问题，工具只是手段。'
        },
        {
          id: '7-1-2',
          question: '数据分析流程的第一步是什么？',
          type: 'multiple-choice',
          options: ['数据收集', '数据清洗', '问题定义', '探索分析'],
          answer: '问题定义',
          explanation: '数据分析流程的第一步是明确分析目标和业务问题。'
        },
        {
          id: '7-1-3',
          question: '以下哪种说法是正确的？',
          type: 'multiple-choice',
          options: ['数据越多越好', '相关性等于因果性', '机器学习可以完全替代人工分析', '数据质量比数量更重要'],
          answer: '数据质量比数量更重要',
          explanation: '数据质量比数量更重要，不准确的数据会导致错误的结论。'
        },
        {
          id: '7-1-4',
          question: '数据分析的局限性不包括？',
          type: 'multiple-choice',
          options: ['数据质量问题', '相关性 vs 因果性', '过度拟合', '实时处理能力'],
          answer: '实时处理能力',
          explanation: '实时处理能力是数据分析的未来趋势，不是局限性。'
        },
        {
          id: '7-1-5',
          question: '数据分析的核心思维不包括？',
          type: 'multiple-choice',
          options: ['问题导向', '逻辑推理', '可视化表达', '算法偏见'],
          answer: '算法偏见',
          explanation: '算法偏见是数据分析的伦理问题，不是核心思维。'
        },
        {
          id: '7-1-6',
          question: '简述数据分析的完整流程。',
          type: 'short-answer',
          answer: '1. 问题定义 2. 数据收集 3. 数据清洗 4. 探索分析 5. 建模分析 6. 结果呈现 7. 行动建议',
          explanation: '这是数据分析的标准流程，每个步骤都不可或缺。'
        }
      ],
      quiz: [
        {
          id: '7-1-q1',
          question: '数据分析的核心是解决业务问题。',
          type: 'true-false',
          options: ['正确', '错误'],
          correctAnswer: 0,
          explanation: '是的，数据分析的核心是解决业务问题，工具只是手段。'
        },
        {
          id: '7-1-q2',
          question: '相关性等于因果性。',
          type: 'true-false',
          options: ['正确', '错误'],
          correctAnswer: 1,
          explanation: '错误，相关性不等于因果性，需要实验验证。'
        }
      ]
    },
    {
      id: '7-2',
      title: '项目1：数据基础与环境搭建',
      content: `# 项目1：数据基础与环境搭建

## 项目目标
- 了解Python数据分析的基本环境
- 掌握Pyodide在浏览器中运行Python的方法
- 熟悉基本的数据结构和操作

## 任务清单
1. 初始化Pyodide环境
2. 安装和导入必要的库
3. 创建和操作基本数据结构
4. 进行简单的数据计算

## 数据集
本项目使用随机生成的数据集，包含学生的基本信息和成绩。

## 代码示例

python
# 导入必要的库
import pandas as pd
import numpy as np

# 生成随机数据集
np.random.seed(42)

# 创建学生数据
data = {
    '姓名': [f'学生{i}' for i in range(1, 11)],
    '年龄': np.random.randint(18, 25, 10),
    '数学': np.random.randint(60, 100, 10),
    '英语': np.random.randint(60, 100, 10),
    '语文': np.random.randint(60, 100, 10)
}

# 创建DataFrame
df = pd.DataFrame(data)

# 计算平均分
df['平均分'] = df[['数学', '英语', '语文']].mean(axis=1)

# 显示数据
print(df)

# 分析最高分
print('\n各科目最高分:')
print(df[['数学', '英语', '语文']].max())


## 预期输出
- 显示包含学生信息和成绩的DataFrame
- 显示各科目最高分
- 计算并显示平均分`,
      exercises: [
        {
          id: '7-2-1',
          question: 'Pyodide是什么？',
          type: 'multiple-choice',
          options: ['Python的一个库', '在浏览器中运行Python的工具', '数据分析框架', '机器学习库'],
          answer: '在浏览器中运行Python的工具',
          explanation: 'Pyodide是一个在浏览器中运行Python的工具。'
        },
        {
          id: '7-2-2',
          question: '创建DataFrame使用的函数是？',
          type: 'multiple-choice',
          options: ['pd.DataFrame()', 'pd.create()', 'pd.make()', 'pd.build()'],
          answer: 'pd.DataFrame()',
          explanation: '使用pd.DataFrame()函数创建DataFrame。'
        },
        {
          id: '7-2-3',
          question: '计算平均分使用的函数是？',
          type: 'multiple-choice',
          options: ['sum()', 'mean()', 'average()', 'avg()'],
          answer: 'mean()',
          explanation: '使用mean()函数计算平均值。'
        },
        {
          id: '7-2-4',
          question: '生成随机数使用的库是？',
          type: 'multiple-choice',
          options: ['pandas', 'numpy', 'matplotlib', 'seaborn'],
          answer: 'numpy',
          explanation: '使用numpy库生成随机数。'
        },
        {
          id: '7-2-5',
          question: 'axis=1表示什么？',
          type: 'multiple-choice',
          options: ['按行计算', '按列计算', '按对角线计算', '按整个数据计算'],
          answer: '按行计算',
          explanation: 'axis=1表示按行计算，axis=0表示按列计算。'
        },
        {
          id: '7-2-6',
          question: '编写代码生成一个包含5个学生信息的DataFrame，包括姓名、年龄、数学成绩，并计算平均分。',
          type: 'short-answer',
          answer: 'import pandas as pd\nimport numpy as np\n\ndata = {\n    \'姓名\': [\'学生1\', \'学生2\', \'学生3\', \'学生4\', \'学生5\'],\n    \'年龄\': [18, 19, 20, 19, 18],\n    \'数学\': [85, 92, 78, 90, 88]\n}\n\ndf = pd.DataFrame(data)\ndf[\'平均分\'] = df[\'数学\']\nprint(df)',
          explanation: '创建包含学生信息的字典，转换为DataFrame，并计算平均分。'
        }
      ],
      quiz: [
        {
          id: '7-2-q1',
          question: 'Pyodide可以在浏览器中运行Python代码。',
          type: 'true-false',
          options: ['正确', '错误'],
          correctAnswer: 0,
          explanation: '是的，Pyodide可以在浏览器中运行Python代码。'
        },
        {
          id: '7-2-q2',
          question: 'pandas是Python中用于数据分析的核心库。',
          type: 'true-false',
          options: ['正确', '错误'],
          correctAnswer: 0,
          explanation: '是的，pandas是Python中用于数据分析的核心库。'
        }
      ]
    },
    {
      id: '7-3',
      title: '项目2：数据清洗与预处理',
      content: `# 项目2：数据清洗与预处理

## 项目目标
- 掌握数据清洗的基本方法
- 学习处理缺失值和异常值
- 了解数据转换和标准化

## 任务清单
1. 导入和查看数据集
2. 识别和处理缺失值
3. 检测和处理异常值
4. 数据转换和标准化

## 数据集
本项目使用包含缺失值和异常值的销售数据集。

## 代码示例

python
import pandas as pd
import numpy as np

# 生成包含缺失值和异常值的数据集
np.random.seed(42)

data = {
    '日期': pd.date_range('2023-01-01', periods=20),
    '销售额': np.random.normal(1000, 200, 20),
    '销售量': np.random.randint(50, 150, 20),
    '地区': np.random.choice(['北京', '上海', '广州', '深圳'], 20)
}

# 创建DataFrame
df = pd.DataFrame(data)

# 人为添加缺失值
df.loc[2, '销售额'] = np.nan
df.loc[5, '销售量'] = np.nan
df.loc[8, '地区'] = np.nan

# 人为添加异常值
df.loc[12, '销售额'] = 5000  # 异常高值
df.loc[15, '销售量'] = -10  # 异常负值

print('原始数据:')
print(df)

# 处理缺失值
print('\n处理缺失值:')
df_clean = df.copy()
df_clean['销售额'] = df_clean['销售额'].fillna(df_clean['销售额'].mean())
df_clean['销售量'] = df_clean['销售量'].fillna(df_clean['销售量'].median())
df_clean['地区'] = df_clean['地区'].fillna('未知')

# 处理异常值
print('\n处理异常值:')
# 销售额异常值处理（超过3倍标准差）
std_sales = df_clean['销售额'].std()
mean_sales = df_clean['销售额'].mean()
outlier_threshold = 3 * std_sales
df_clean['销售额'] = np.where(
    (df_clean['销售额'] > mean_sales + outlier_threshold) | (df_clean['销售额'] < mean_sales - outlier_threshold),
    mean_sales,
    df_clean['销售额']
)

# 销售量异常值处理（负值）
df_clean['销售量'] = np.where(df_clean['销售量'] < 0, 0, df_clean['销售量'])

print('\n清洗后数据:')
print(df_clean)

# 数据转换：计算单价
df_clean['单价'] = df_clean['销售额'] / df_clean['销售量']

print('\n添加单价后的数据:')
print(df_clean)


## 预期输出
- 显示原始数据（包含缺失值和异常值）
- 显示处理缺失值后的数据
- 显示处理异常值后的数据
- 显示添加单价后的数据`,
      exercises: [
        {
          id: '7-3-1',
          question: '处理缺失值的方法不包括？',
          type: 'multiple-choice',
          options: ['删除包含缺失值的行', '用均值填充', '用中位数填充', '用最大值填充'],
          answer: '用最大值填充',
          explanation: '用最大值填充不是常见的缺失值处理方法。'
        },
        {
          id: '7-3-2',
          question: '检测异常值的方法是？',
          type: 'multiple-choice',
          options: ['3倍标准差', '均值', '中位数', '众数'],
          answer: '3倍标准差',
          explanation: '常用3倍标准差方法检测异常值。'
        },
        {
          id: '7-3-3',
          question: 'fillna()函数的作用是？',
          type: 'multiple-choice',
          options: ['删除缺失值', '填充缺失值', '检测缺失值', '替换异常值'],
          answer: '填充缺失值',
          explanation: 'fillna()函数用于填充缺失值。'
        },
        {
          id: '7-3-4',
          question: 'np.where()函数的作用是？',
          type: 'multiple-choice',
          options: ['条件判断', '循环', '排序', '分组'],
          answer: '条件判断',
          explanation: 'np.where()函数用于条件判断和替换。'
        },
        {
          id: '7-3-5',
          question: '数据清洗的步骤不包括？',
          type: 'multiple-choice',
          options: ['处理缺失值', '处理异常值', '数据转换', '模型训练'],
          answer: '模型训练',
          explanation: '模型训练是数据清洗之后的步骤。'
        },
        {
          id: '7-3-6',
          question: '编写代码处理以下数据中的缺失值和异常值：\n\ndata = {\n    \'名称\': [\'A\', \'B\', \'C\', \'D\', \'E\'],\n    \'数值\': [10, np.nan, 15, 100, 20]\n}',
          type: 'short-answer',
          answer: 'import pandas as pd\nimport numpy as np\n\ndata = {\n    \'名称\': [\'A\', \'B\', \'C\', \'D\', \'E\'],\n    \'数值\': [10, np.nan, 15, 100, 20]\n}\n\ndf = pd.DataFrame(data)\n\n# 处理缺失值\ndf[\'数值\'] = df[\'数值\'].fillna(df[\'数值\'].mean())\n\n# 处理异常值\nmean_val = df[\'数值\'].mean()\nstd_val = df[\'数值\'].std()\ndf[\'数值\'] = np.where(df[\'数值\'] > mean_val + 3*std_val, mean_val, df[\'数值\'])\n\nprint(df)',
          explanation: '使用fillna()填充缺失值，使用3倍标准差方法处理异常值。'
        }
      ],
      quiz: [
        {
          id: '7-3-q1',
          question: '数据清洗是数据分析的重要步骤。',
          type: 'true-false',
          options: ['正确', '错误'],
          correctAnswer: 0,
          explanation: '是的，数据清洗是数据分析的重要步骤，直接影响分析结果的准确性。'
        },
        {
          id: '7-3-q2',
          question: '处理缺失值时，应该直接删除包含缺失值的行。',
          type: 'true-false',
          options: ['正确', '错误'],
          correctAnswer: 1,
          explanation: '错误，直接删除可能会导致数据丢失，应该根据情况选择合适的填充方法。'
        }
      ]
    }
  ]
};

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
        exercises: [
          {
            id: '1-1-1',
            question: 'Python 中用于定义列表的符号是？',
            type: 'multiple-choice',
            options: ['()', '[]', '{}', '<>'],
            answer: '[]',
            explanation: 'Python 中使用方括号 [] 来定义列表。'
          },
          {
            id: '1-1-2',
            question: 'Python 中正确的变量名是？',
            type: 'multiple-choice',
            options: ['123abc', 'my-var', 'my_var', 'class'],
            answer: 'my_var',
            explanation: 'Python 变量名不能以数字开头，不能包含连字符，也不能使用关键字。'
          },
          {
            id: '1-1-3',
            question: 'Python 中用于定义字典的符号是？',
            type: 'multiple-choice',
            options: ['()', '[]', '{}', '<>'],
            answer: '{}',
            explanation: 'Python 中使用花括号 {} 来定义字典。'
          },
          {
            id: '1-1-4',
            question: '以下哪个是 Python 中的布尔值？',
            type: 'multiple-choice',
            options: ['"True"', 'true', 'True', '1'],
            answer: 'True',
            explanation: 'Python 中的布尔值首字母大写：True 和 False。'
          },
          {
            id: '1-1-5',
            question: 'Python 中字符串可以使用什么符号表示？',
            type: 'multiple-choice',
            options: ['单引号', '双引号', '三引号', '以上都可以'],
            answer: '以上都可以',
            explanation: 'Python 中可以使用单引号、双引号或三引号来表示字符串。'
          },
          {
            id: '1-1-6',
            question: '编写一个 Python 程序，创建一个包含 5 个数字的列表，然后计算它们的和。',
            type: 'short-answer',
            answer: 'numbers = [1, 2, 3, 4, 5]\nprint(sum(numbers))',
            explanation: '可以使用 sum() 函数快速计算列表中所有元素的和。'
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
        exercises: [
          {
            id: '2-1-1',
            question: '计算 A1 到 A10 单元格的平均值，应该使用哪个函数？',
            type: 'multiple-choice',
            options: ['SUM(A1:A10)', 'AVERAGE(A1:A10)', 'MEAN(A1:A10)', 'AVG(A1:A10)'],
            answer: 'AVERAGE(A1:A10)',
            explanation: 'AVERAGE() 函数用于计算平均值。'
          },
          {
            id: '2-1-2',
            question: 'Excel 中用于垂直查找的函数是？',
            type: 'multiple-choice',
            options: ['HLOOKUP', 'VLOOKUP', 'INDEX', 'MATCH'],
            answer: 'VLOOKUP',
            explanation: 'VLOOKUP 函数用于垂直查找数据。'
          },
          {
            id: '2-1-3',
            question: 'Excel 中用于条件判断的函数是？',
            type: 'multiple-choice',
            options: ['CASE', 'IF', 'SWITCH', 'CHOOSE'],
            answer: 'IF',
            explanation: 'IF 函数用于条件判断。'
          },
          {
            id: '2-1-4',
            question: '计算 A1 到 A10 单元格的最大值，应该使用哪个函数？',
            type: 'multiple-choice',
            options: ['MAX(A1:A10)', 'MIN(A1:A10)', 'LARGE(A1:A10,1)', 'TOP(A1:A10,1)'],
            answer: 'MAX(A1:A10)',
            explanation: 'MAX() 函数用于计算最大值。'
          },
          {
            id: '2-1-5',
            question: 'Excel 中用于求和的函数是？',
            type: 'multiple-choice',
            options: ['ADD', 'TOTAL', 'SUM', 'PLUS'],
            answer: 'SUM',
            explanation: 'SUM() 函数用于求和。'
          },
          {
            id: '2-1-6',
            question: '在 Excel 中，使用 IF 函数判断 A1 单元格的值是否大于 100，如果是则显示"合格"，否则显示"不合格"。',
            type: 'short-answer',
            answer: '=IF(A1>100,"合格","不合格")',
            explanation: 'IF 函数的语法是 IF(条件, 条件为真时的值, 条件为假时的值)。'
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
        exercises: [
          {
            id: '3-1-1',
            question: 'Matplotlib 中用于显示图表的函数是？',
            type: 'multiple-choice',
            options: ['plt.display()', 'plt.show()', 'plt.plot()', 'plt.draw()'],
            answer: 'plt.show()',
            explanation: 'plt.show() 函数用于显示图表。'
          },
          {
            id: '3-1-2',
            question: 'Matplotlib 中用于创建图形对象的函数是？',
            type: 'multiple-choice',
            options: ['plt.figure()', 'plt.create()', 'plt.graph()', 'plt.image()'],
            answer: 'plt.figure()',
            explanation: 'plt.figure() 函数用于创建图形对象。'
          },
          {
            id: '3-1-3',
            question: 'Matplotlib 中用于绘制折线图的函数是？',
            type: 'multiple-choice',
            options: ['plt.line()', 'plt.plot()', 'plt.lineplot()', 'plt.draw()'],
            answer: 'plt.plot()',
            explanation: 'plt.plot() 函数用于绘制折线图。'
          },
          {
            id: '3-1-4',
            question: 'Matplotlib 中用于添加标题的函数是？',
            type: 'multiple-choice',
            options: ['plt.header()', 'plt.title()', 'plt.label()', 'plt.name()'],
            answer: 'plt.title()',
            explanation: 'plt.title() 函数用于添加标题。'
          },
          {
            id: '3-1-5',
            question: 'Matplotlib 中用于添加 x 轴标签的函数是？',
            type: 'multiple-choice',
            options: ['plt.xlabel()', 'plt.xaxis()', 'plt.labelx()', 'plt.axisx()'],
            answer: 'plt.xlabel()',
            explanation: 'plt.xlabel() 函数用于添加 x 轴标签。'
          },
          {
            id: '3-1-6',
            question: '使用 Matplotlib 绘制一个包含 50 个点的散点图，x 轴为 1 到 50，y 轴为随机数。',
            type: 'short-answer',
            answer: 'import matplotlib.pyplot as plt\nimport numpy as np\nx = np.arange(1, 51)\ny = np.random.rand(50)\nplt.scatter(x, y)\nplt.show()',
            explanation: '使用 plt.scatter() 函数可以绘制散点图。'
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
        exercises: [
          {
            id: '4-1-1',
            question: '不受极端值影响的集中趋势度量是？',
            type: 'multiple-choice',
            options: ['均值', '中位数', '众数', '方差'],
            answer: '中位数',
            explanation: '中位数不受极端值的影响，是稳健的集中趋势度量。'
          },
          {
            id: '4-1-2',
            question: '方差是标准差的什么？',
            type: 'multiple-choice',
            options: ['平方根', '平方', '倒数', '两倍'],
            answer: '平方',
            explanation: '标准差是方差的平方根，方差是标准差的平方。'
          },
          {
            id: '4-1-3',
            question: '集中趋势的度量不包括？',
            type: 'multiple-choice',
            options: ['均值', '中位数', '众数', '标准差'],
            answer: '标准差',
            explanation: '标准差是离散程度的度量，不是集中趋势的度量。'
          },
          {
            id: '4-1-4',
            question: '在数据分布偏斜时，哪个指标更适合描述集中趋势？',
            type: 'multiple-choice',
            options: ['均值', '中位数', '众数', '标准差'],
            answer: '中位数',
            explanation: '在数据分布偏斜时，中位数比均值更适合描述集中趋势。'
          },
          {
            id: '4-1-5',
            question: '四分位数将数据分成了几个部分？',
            type: 'multiple-choice',
            options: ['2个', '3个', '4个', '5个'],
            answer: '4个',
            explanation: '四分位数将数据分成了4个相等的部分。'
          },
          {
            id: '4-1-6',
            question: '给定数据：1, 2, 3, 4, 5, 6, 7, 8, 9, 10，请计算均值和中位数。',
            type: 'short-answer',
            answer: '均值 = 5.5，中位数 = 5.5',
            explanation: '对于对称分布的数据，均值和中位数通常相等。'
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
        exercises: [
          {
            id: '5-1-1',
            question: '预测房价属于什么类型的机器学习问题？',
            type: 'multiple-choice',
            options: ['分类', '回归', '聚类', '降维'],
            answer: '回归',
            explanation: '房价预测是回归问题，因为预测的是连续值。'
          },
          {
            id: '5-1-2',
            question: '将电子邮件分类为垃圾邮件或正常邮件属于什么类型的机器学习问题？',
            type: 'multiple-choice',
            options: ['分类', '回归', '聚类', '降维'],
            answer: '分类',
            explanation: '垃圾邮件分类是分类问题，因为预测的是离散类别。'
          },
          {
            id: '5-1-3',
            question: '监督学习需要什么类型的数据？',
            type: 'multiple-choice',
            options: ['无标签数据', '有标签数据', '文本数据', '图像数据'],
            answer: '有标签数据',
            explanation: '监督学习需要带有标签的训练数据。'
          },
          {
            id: '5-1-4',
            question: '无监督学习的主要目标是什么？',
            type: 'multiple-choice',
            options: ['预测标签', '发现数据中的模式', '最大化奖励', '最小化误差'],
            answer: '发现数据中的模式',
            explanation: '无监督学习的主要目标是发现数据中的模式和结构。'
          },
          {
            id: '5-1-5',
            question: '强化学习通过什么来学习？',
            type: 'multiple-choice',
            options: ['标签', '奖励', '模式', '误差'],
            answer: '奖励',
            explanation: '强化学习通过奖励信号来学习最佳策略。'
          },
          {
            id: '5-1-6',
            question: '简述监督学习、无监督学习和强化学习的主要区别。',
            type: 'short-answer',
            answer: '监督学习使用有标签数据进行训练，无监督学习发现无标签数据中的模式，强化学习通过与环境交互和奖励信号来学习。',
            explanation: '这三种学习类型在数据需求和学习方式上有本质区别。'
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
- 实时代码编辑器：内置 Jupyter 风格的代码编辑器，支持实时执行和结果展示
- 数据可视化实验室：提供多种可视化工具，让数据故事更加生动
- 真实数据集练习：使用真实的商业数据集进行实战演练
- 个性化学习路径：根据学习者的基础和目标定制学习计划

### 技术栈覆盖
- Python 数据科学生态：Pandas、NumPy、Matplotlib、Scikit-learn 等
- SQL 数据库技术：基础查询、复杂连接、窗口函数等
- 数据可视化工具：Matplotlib、Seaborn、Tableau、Power BI
- 大数据处理框架：Hadoop、Spark、Flink
- 商业智能平台：数据仓库、OLAP、BI 仪表板

## 整体能力结构
1. 数据获取与导入：从各种数据源获取数据
2. 数据清洗与预处理：处理缺失值、重复值、异常值
3. 数据计算与统计分析：描述性统计、推断统计
4. 数据可视化：创建各种图表和仪表板
5. 业务分析与报告输出：撰写专业的数据分析报告

## 学习路径
- 基础阶段：Python 基础、Excel 基础、SQL 基础
- 进阶阶段：数据处理、数据可视化、统计分析
- 高级阶段：机器学习、大数据处理、商业分析实战`,
        exercises: [
          {
            id: '6-1-1',
            question: '数据分析技术平台的主要特色是什么？',
            type: 'multiple-choice',
            options: ['理论学习', '交互式实践', '被动观看', '考试认证'],
            answer: '交互式实践',
            explanation: '平台的主要特色是提供交互式实践环境，让用户能够实时操作和学习。'
          },
          {
            id: '6-1-2',
            question: '以下哪个不属于数据分析的整体能力结构？',
            type: 'multiple-choice',
            options: ['数据获取与导入', '数据清洗与预处理', '网页设计', '业务分析与报告输出'],
            answer: '网页设计',
            explanation: '网页设计不属于数据分析的核心能力结构。'
          },
          {
            id: '6-1-3',
            question: '数据分析技术平台不覆盖以下哪个技术栈？',
            type: 'multiple-choice',
            options: ['Python 数据科学生态', 'SQL 数据库技术', '游戏开发', '商业智能平台'],
            answer: '游戏开发',
            explanation: '游戏开发不是本平台覆盖的技术栈。'
          },
          {
            id: '6-1-4',
            question: '数据分析学习路径的进阶阶段不包括？',
            type: 'multiple-choice',
            options: ['数据处理', '数据可视化', 'Python 基础', '统计分析'],
            answer: 'Python 基础',
            explanation: 'Python 基础属于基础阶段，不是进阶阶段。'
          },
          {
            id: '6-1-5',
            question: '以下哪个不是数据可视化工具？',
            type: 'multiple-choice',
            options: ['Matplotlib', 'Seaborn', 'Word', 'Tableau'],
            answer: 'Word',
            explanation: 'Word 是文字处理软件，不是数据可视化工具。'
          },
          {
            id: '6-1-6',
            question: '简述数据分析的 5 个核心能力结构。',
            type: 'short-answer',
            answer: '1. 数据获取与导入 2. 数据清洗与预处理 3. 数据计算与统计分析 4. 数据可视化 5. 业务分析与报告输出',
            explanation: '这 5 个能力构成了数据分析的完整流程。'
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
        title: 'Excel 模块',
        content: `Excel 是商务数据分析中最常用的工具之一，掌握其高级功能可以大大提高工作效率。

## 基础操作
- 数据整理：排序、筛选、条件格式
- 快捷键：常用快捷键提高操作速度
- 单元格格式：数字格式、日期格式、条件格式
- 数据验证：设置数据输入规则和提示

## 常用函数
- 查找匹配：VLOOKUP、HLOOKUP、INDEX+MATCH
- 多条件统计：SUMIFS、COUNTIFS、AVERAGEIFS
- 文本处理：LEFT、RIGHT、MID、CONCATENATE
- 日期处理：TODAY、NOW、DATEDIF、YEAR/MONTH/DAY
- 逻辑函数：IF、AND、OR、NOT

## 数据透视表
- 创建数据透视表：快速汇总和分析数据
- 多维度分析：行、列、值、筛选器
- 计算字段：创建自定义计算
- 数据透视图表：将分析结果可视化

## Power Query 自动化数据清洗
- 连接数据源：Excel、CSV、数据库等
- 数据转换：筛选、排序、分组、合并
- 数据清洗：处理缺失值、重复值、错误值
- 自动化流程：创建查询并刷新数据

## 图表制作与动态看板
- 图表类型：柱形图、折线图、饼图、散点图等
- 图表美化：标题、图例、数据标签、颜色方案
- 动态看板：使用切片器、表单控件创建交互式仪表板
- 数据故事：通过图表讲述数据背后的故事`,
        exercises: [
          {
            id: '6-2-1',
            question: 'Excel 中用于垂直查找的函数是？',
            type: 'multiple-choice',
            options: ['HLOOKUP', 'VLOOKUP', 'INDEX', 'MATCH'],
            answer: 'VLOOKUP',
            explanation: 'VLOOKUP 函数用于垂直查找数据。'
          },
          {
            id: '6-2-2',
            question: 'Excel 中用于多条件统计求和的函数是？',
            type: 'multiple-choice',
            options: ['SUMIF', 'SUMIFS', 'COUNTIF', 'COUNTIFS'],
            answer: 'SUMIFS',
            explanation: 'SUMIFS 函数用于多条件统计求和。'
          },
          {
            id: '6-2-3',
            question: 'Excel 中用于自动化数据清洗的工具是？',
            type: 'multiple-choice',
            options: ['数据透视表', 'Power Query', 'VLOOKUP', '条件格式'],
            answer: 'Power Query',
            explanation: 'Power Query 用于自动化数据清洗和转换。'
          },
          {
            id: '6-2-4',
            question: 'Excel 数据透视表不能实现以下哪个功能？',
            type: 'multiple-choice',
            options: ['多维度汇总', '创建计算字段', '编写 Python 代码', '数据可视化'],
            answer: '编写 Python 代码',
            explanation: '数据透视表不能直接编写 Python 代码。'
          },
          {
            id: '6-2-5',
            question: 'Excel 中 LEFT 函数的作用是？',
            type: 'multiple-choice',
            options: ['从右边提取字符', '从左边提取字符', '从中间提取字符', '合并字符串'],
            answer: '从左边提取字符',
            explanation: 'LEFT 函数用于从字符串左边提取指定数量的字符。'
          },
          {
            id: '6-2-6',
            question: '使用 Excel 创建一个数据透视表，按月份汇总销售额。',
            type: 'short-answer',
            answer: '1. 选择数据区域 2. 点击插入 → 数据透视表 3. 将日期拖到行区域 4. 将销售额拖到值区域 5. 按月份分组',
            explanation: '数据透视表是 Excel 中快速汇总和分析数据的强大工具。'
          }
        ],
        quiz: [
          {
            id: '6-2-q1',
            question: 'Power Query 可以自动化数据清洗流程。',
            type: 'true-false',
            options: ['正确', '错误'],
            correctAnswer: 0,
            explanation: '是的，Power Query 可以自动化数据清洗流程，提高工作效率。'
          }
        ]
      },
      {
        id: '6-3',
        title: 'SQL 模块',
        content: `SQL（Structured Query Language）是处理关系型数据库的标准语言，是数据分析的重要工具。

## 数据库基础
- 表结构：字段、数据类型、约束
- 关系模型：主键、外键、关联关系
- SQL 语法：SELECT、FROM、WHERE、ORDER BY 等
- 数据库类型：MySQL、PostgreSQL、SQL Server、Oracle

## 基础查询
- 数据检索：SELECT 语句
- 条件筛选：WHERE 子句
- 排序：ORDER BY 子句
- 限制结果：LIMIT 子句

## 分组聚合与多表连接
- 分组：GROUP BY 子句
- 聚合函数：SUM、AVG、MAX、MIN、COUNT
- 多表连接：INNER JOIN、LEFT JOIN、RIGHT JOIN、FULL JOIN
- 子查询：嵌套查询、相关子查询

## 条件判断与空值处理
- 条件判断：CASE 语句
- 空值处理：IS NULL、IS NOT NULL、COALESCE
- 字符串处理：CONCAT、SUBSTRING、UPPER、LOWER
- 数值计算：数学函数、日期函数

## 窗口函数与复杂查询
- 窗口函数：ROW_NUMBER、RANK、DENSE_RANK、NTILE
- 窗口框架：ROWS BETWEEN、RANGE BETWEEN
- 复杂查询：联合查询、交叉查询、递归查询
- 性能优化：索引、查询计划、执行效率

## 业务数据提取实战
- 销售数据提取：销售趋势、产品分析、客户分析
- 用户行为数据：访问量、转化率、留存率
- 财务数据：收入、成本、利润分析
- 运营数据：KPI 监控、业务指标分析`,
        exercises: [
          {
            id: '6-3-1',
            question: 'SQL 中用于分组的关键字是？',
            type: 'multiple-choice',
            options: ['GROUP', 'BY', 'GROUP BY', 'AGGREGATE'],
            answer: 'GROUP BY',
            explanation: 'GROUP BY 子句用于对结果集进行分组。'
          },
          {
            id: '6-3-2',
            question: 'SQL 中用于内连接的关键字是？',
            type: 'multiple-choice',
            options: ['LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'FULL JOIN'],
            answer: 'INNER JOIN',
            explanation: 'INNER JOIN 用于内连接，只返回两个表中匹配的记录。'
          },
          {
            id: '6-3-3',
            question: 'SQL 中用于条件判断的语句是？',
            type: 'multiple-choice',
            options: ['IF', 'CASE', 'SWITCH', 'CONDITION'],
            answer: 'CASE',
            explanation: 'CASE 语句用于 SQL 中的条件判断。'
          },
          {
            id: '6-3-4',
            question: '以下哪个不是 SQL 中的聚合函数？',
            type: 'multiple-choice',
            options: ['SUM', 'AVG', 'MAX', 'UPPER'],
            answer: 'UPPER',
            explanation: 'UPPER 是字符串函数，不是聚合函数。'
          },
          {
            id: '6-3-5',
            question: 'SQL 中用于排序的关键字是？',
            type: 'multiple-choice',
            options: ['SORT', 'ORDER BY', 'ARRANGE', 'RANK'],
            answer: 'ORDER BY',
            explanation: 'ORDER BY 子句用于对结果集进行排序。'
          },
          {
            id: '6-3-6',
            question: '编写一个 SQL 查询，从 sales 表中按产品分组，计算每个产品的总销售额。',
            type: 'short-answer',
            answer: 'SELECT product, SUM(amount) as total_sales FROM sales GROUP BY product;',
            explanation: '使用 GROUP BY 和 SUM() 函数可以按组计算聚合值。'
          }
        ],
        quiz: [
          {
            id: '6-3-q1',
            question: 'LEFT JOIN 会返回左表的所有记录，即使右表没有匹配的记录。',
            type: 'true-false',
            options: ['正确', '错误'],
            correctAnswer: 0,
            explanation: '是的，LEFT JOIN 会返回左表的所有记录，右表没有匹配的记录时会显示 NULL。'
          }
        ]
      },
      {
        id: '6-4',
        title: 'Python 数据分析模块（核心）',
        content: `Python 是数据分析的强大工具，其丰富的库生态系统使其成为数据科学家的首选语言。

## Python 基础语法
- 变量和数据类型：整数、浮点数、字符串、布尔值
- 控制流：条件语句、循环语句
- 数据结构：列表、元组、字典、集合
- 函数和模块：定义函数、导入模块

## NumPy 数值计算
- 数组创建：一维数组、二维数组
- 数组操作：索引、切片、形状操作
- 数学运算：基本运算、广播
- 线性代数：矩阵运算、线性方程组

## Pandas 数据处理
- 数据读取与导出：CSV、Excel、SQL、JSON
- 数据查看与探索：head、tail、info、describe
- 缺失值、重复值、异常值处理：dropna、fillna、drop_duplicates
- 条件筛选与索引：布尔索引、loc、iloc
- 分组聚合与数据透视：groupby、agg、pivot_table
- 多表合并与数据转换：merge、concat、apply、map

## 数据可视化
- Matplotlib 基础图表：折线图、柱状图、饼图、散点图
- Seaborn 统计绘图：热力图、箱线图、小提琴图、配对图
- 图表美化：标题、标签、图例、颜色、样式
- 图表保存：保存为图片、PDF 等格式

## 全流程实战项目
- 数据获取：从各种数据源获取数据
- 数据清洗：处理数据质量问题
- 数据分析：应用统计方法和算法
- 数据可视化：创建图表和仪表板
- 报告生成：撰写分析报告和建议`,
        exercises: [
          {
            id: '6-4-1',
            question: 'Python 中用于数据处理的核心库是？',
            type: 'multiple-choice',
            options: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
            answer: 'Pandas',
            explanation: 'Pandas 是 Python 中用于数据处理和分析的核心库。'
          },
          {
            id: '6-4-2',
            question: 'Pandas 中用于查看数据前几行的方法是？',
            type: 'multiple-choice',
            options: ['first()', 'head()', 'top()', 'begin()'],
            answer: 'head()',
            explanation: 'head() 方法用于查看 DataFrame 的前几行数据。'
          },
          {
            id: '6-4-3',
            question: 'NumPy 中用于创建数组的函数是？',
            type: 'multiple-choice',
            options: ['list()', 'array()', 'matrix()', 'table()'],
            answer: 'array()',
            explanation: 'np.array() 函数用于创建 NumPy 数组。'
          },
          {
            id: '6-4-4',
            question: 'Pandas 中用于处理缺失值的方法是？',
            type: 'multiple-choice',
            options: ['remove()', 'dropna()', 'delete()', 'clean()'],
            answer: 'dropna()',
            explanation: 'dropna() 方法用于删除包含缺失值的行或列。'
          },
          {
            id: '6-4-5',
            question: 'Matplotlib 中用于绘制柱状图的函数是？',
            type: 'multiple-choice',
            options: ['plt.bar()', 'plt.column()', 'plt.hist()', 'plt.box()'],
            answer: 'plt.bar()',
            explanation: 'plt.bar() 函数用于绘制柱状图。'
          },
          {
            id: '6-4-6',
            question: '使用 Pandas 读取一个 CSV 文件，然后显示前 5 行数据。',
            type: 'short-answer',
            answer: 'import pandas as pd\ndf = pd.read_csv("data.csv")\nprint(df.head())',
            explanation: '使用 pd.read_csv() 读取 CSV 文件，head() 方法显示前几行。'
          }
        ],
        quiz: [
          {
            id: '6-4-q1',
            question: 'NumPy 数组比 Python 列表运算速度更快。',
            type: 'true-false',
            options: ['正确', '错误'],
            correctAnswer: 0,
            explanation: '是的，NumPy 数组使用 C 语言实现，运算速度比 Python 列表快得多。'
          }
        ]
      },
      {
        id: '6-5',
        title: '统计与业务分析',
        content: `统计分析是数据分析的基础，掌握统计方法可以帮助我们从数据中提取有价值的信息。

## 描述性统计
- 集中趋势：均值、中位数、众数
- 离散程度：方差、标准差、四分位数、极差
- 分布特征：偏度、峰度、正态分布
- 统计图表：直方图、箱线图、茎叶图

## 对比、拆解、漏斗、归因分析
- 对比分析：横向对比、纵向对比、环比、同比
- 拆解分析：因素拆解、层次拆解、结构分析
- 漏斗分析：用户转化漏斗、销售漏斗、业务流程漏斗
- 归因分析：多触点归因、线性归因、时间衰减归因

## 常用指标体系搭建
- 业务指标：销售额、利润、市场份额
- 用户指标：活跃用户、留存率、转化率
- 运营指标：获客成本、客单价、复购率
- 产品指标：功能使用率、用户满意度、NPS

## 数据分析报告撰写
- 报告结构：摘要、数据来源、分析方法、结果、建议
- 数据可视化：选择合适的图表类型
- 故事讲述：以数据为基础讲述业务故事
-  actionable 建议：基于分析结果提供可执行的建议

## 商业场景应用
- 市场分析：市场规模、竞争格局、趋势预测
- 运营分析：活动效果、用户行为、渠道分析
- 用户画像：用户特征、偏好、分群
- 财务分析：财务状况、盈利能力、风险评估

## AI 赋能分析
- 利用 ChatGPT/Copilot 辅助生成代码
- 自然语言处理：文本分析、情感分析
- 机器学习：预测模型、分类模型、聚类分析
- 自动化分析：使用 AI 工具自动生成分析报告`,
        exercises: [
          {
            id: '6-5-1',
            question: '不受极端值影响的集中趋势度量是？',
            type: 'multiple-choice',
            options: ['均值', '中位数', '众数', '方差'],
            answer: '中位数',
            explanation: '中位数不受极端值的影响，是稳健的集中趋势度量。'
          },
          {
            id: '6-5-2',
            question: '以下哪个不属于业务分析方法？',
            type: 'multiple-choice',
            options: ['对比分析', '漏斗分析', '代码分析', '归因分析'],
            answer: '代码分析',
            explanation: '代码分析不属于常用的业务分析方法。'
          },
          {
            id: '6-5-3',
            question: '用于理解用户转化过程中流失情况的分析方法是？',
            type: 'multiple-choice',
            options: ['对比分析', '漏斗分析', '拆解分析', '归因分析'],
            answer: '漏斗分析',
            explanation: '漏斗分析可以清晰地展示用户在各个阶段的转化情况和流失率。'
          },
          {
            id: '6-5-4',
            question: '以下哪个不是常用的用户指标？',
            type: 'multiple-choice',
            options: ['活跃用户', '留存率', '转化率', '代码行数'],
            answer: '代码行数',
            explanation: '代码行数不是用户指标，而是软件开发相关的指标。'
          },
          {
            id: '6-5-5',
            question: '数据分析报告的结构通常不包括？',
            type: 'multiple-choice',
            options: ['摘要', '数据来源', '代码仓库', '建议'],
            answer: '代码仓库',
            explanation: '代码仓库通常不是数据分析报告的标准结构部分。'
          },
          {
            id: '6-5-6',
            question: '简述漏斗分析在业务中的应用场景。',
            type: 'short-answer',
            answer: '漏斗分析常用于用户转化流程分析，如：电商购买流程、用户注册流程、营销活动转化等，帮助识别流失节点。',
            explanation: '漏斗分析是业务分析中的重要方法，可以直观展示转化过程。'
          }
        ],
        quiz: [
          {
            id: '6-5-q1',
            question: '漏斗分析可以帮助我们理解用户转化过程中的流失情况。',
            type: 'true-false',
            options: ['正确', '错误'],
            correctAnswer: 0,
            explanation: '是的，漏斗分析可以清晰地展示用户在各个阶段的转化情况和流失率。'
          }
        ]
      }
    ]
  },
  aiTrainingCourse
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
