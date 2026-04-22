export interface Course {
  id: string;
  title: string;
  description: string;
  modules: Module[];
}

export interface Module {
  id: string;
  name: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  codeExample: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const courses: Course[] = [
  {
    id: 'python-basics',
    title: 'Python基础',
    description: 'Python编程语言的基础知识，包括语法、数据类型、控制流等',
    modules: [
      {
        id: 'module-1',
        name: 'Python入门',
        lessons: [
          {
            id: 'lesson-1',
            title: 'Python简介',
            content: 'Python是一种高级编程语言，以其简洁的语法和强大的功能而闻名。它被广泛应用于数据分析、人工智能、Web开发等领域。',
            codeExample: 'print("Hello, Python!")',
            difficulty: 'beginner'
          },
          {
            id: 'lesson-2',
            title: '变量与数据类型',
            content: 'Python支持多种数据类型，包括整数、浮点数、字符串、布尔值等。变量用于存储这些数据。',
            codeExample: `# 变量定义
name = "Python"
age = 30
price = 19.99
is_active = True

print(name, age, price, is_active)`,
            difficulty: 'beginner'
          },
          {
            id: 'lesson-3',
            title: '控制流',
            content: '控制流语句包括条件语句（if-elif-else）和循环语句（for、while），用于控制程序的执行流程。',
            codeExample: `# 条件语句
age = 18
if age >= 18:
    print("成年人")
else:
    print("未成年人")

# 循环语句
for i in range(5):
    print(i)`,
            difficulty: 'beginner'
          }
        ]
      },
      {
        id: 'module-2',
        name: '函数与模块',
        lessons: [
          {
            id: 'lesson-4',
            title: '函数定义与调用',
            content: '函数是一段可重用的代码块，用于执行特定的任务。通过def关键字定义函数。',
            codeExample: `def greet(name):
    return f"Hello, {name}!"

print(greet("Python"))`,
            difficulty: 'beginner'
          },
          {
            id: 'lesson-5',
            title: '模块导入',
            content: '模块是一个包含Python定义和语句的文件。通过import语句导入模块。',
            codeExample: `import math

print(math.pi)
print(math.sqrt(16))`,
            difficulty: 'beginner'
          }
        ]
      }
    ]
  },
  {
    id: 'numpy-basics',
    title: 'NumPy基础',
    description: 'NumPy库的基础知识，包括数组操作、数学函数、线性代数等',
    modules: [
      {
        id: 'module-1',
        name: 'NumPy入门',
        lessons: [
          {
            id: 'lesson-1',
            title: 'NumPy简介',
            content: 'NumPy是Python中用于科学计算的核心库，提供了高效的多维数组对象和各种数学函数。',
            codeExample: `import numpy as np

# 创建数组
arr = np.array([1, 2, 3, 4, 5])
print(arr)
print(type(arr))`,
            difficulty: 'beginner'
          },
          {
            id: 'lesson-2',
            title: '数组操作',
            content: 'NumPy数组支持各种操作，如索引、切片、形状操作等。',
            codeExample: `import numpy as np

# 创建二维数组
arr = np.array([[1, 2, 3], [4, 5, 6]])
print("数组形状:", arr.shape)
print("数组元素:", arr)
print("第一行:", arr[0])
print("第二列:", arr[:, 1])`,
            difficulty: 'beginner'
          }
        ]
      }
    ]
  },
  {
    id: 'pandas-data-analysis',
    title: 'Pandas数据分析',
    description: '使用Pandas库进行数据分析和处理，包括数据读取、清洗、转换等',
    modules: [
      {
        id: 'module-1',
        name: 'Pandas基础',
        lessons: [
          {
            id: 'lesson-1',
            title: 'Pandas简介',
            content: 'Pandas是Python中用于数据分析的重要库，提供了DataFrame和Series等数据结构，方便数据处理和分析。',
            codeExample: `import pandas as pd
import numpy as np

# 创建Series
s = pd.Series([1, 3, 5, np.nan, 6, 8])
print(s)`,
            difficulty: 'intermediate'
          },
          {
            id: 'lesson-2',
            title: 'DataFrame操作',
            content: 'DataFrame是Pandas中最常用的数据结构，类似于表格，包含行和列。',
            codeExample: `import pandas as pd

# 创建DataFrame
df = pd.DataFrame({
    "name": ["Alice", "Bob", "Charlie"],
    "age": [25, 30, 35],
    "city": ["New York", "London", "Paris"]
})

print(df)`,
            difficulty: 'intermediate'
          }
        ]
      }
    ]
  },
  {
    id: 'data-visualization',
    title: '数据可视化',
    description: '使用Matplotlib和Seaborn等库创建各种数据可视化图表',
    modules: [
      {
        id: 'module-1',
        name: 'Matplotlib基础',
        lessons: [
          {
            id: 'lesson-1',
            title: 'Matplotlib简介',
            content: 'Matplotlib是Python中最常用的数据可视化库，可以创建各种类型的图表，如折线图、散点图、柱状图等。',
            codeExample: `import matplotlib.pyplot as plt
import numpy as np

# 创建数据
x = np.linspace(0, 10, 100)
y = np.sin(x)

# 绘制图表
plt.plot(x, y)
plt.title("Sin Wave")
plt.xlabel("x")
plt.ylabel("sin(x)")
plt.show()`,
            difficulty: 'intermediate'
          }
        ]
      }
    ]
  },
  {
    id: 'machine-learning-basics',
    title: '机器学习基础',
    description: '机器学习的基本概念和算法，包括监督学习、无监督学习等',
    modules: [
      {
        id: 'module-1',
        name: '机器学习入门',
        lessons: [
          {
            id: 'lesson-1',
            title: '机器学习简介',
            content: '机器学习是人工智能的一个分支，通过算法让计算机从数据中学习并做出预测或决策。',
            codeExample: `# 简单的线性回归示例
import numpy as np

# 生成数据
X = np.array([1, 2, 3, 4, 5])
y = np.array([2, 4, 6, 8, 10])

# 计算斜率和截距
slope = np.sum((X - np.mean(X)) * (y - np.mean(y))) / np.sum((X - np.mean(X)) ** 2)
intercept = np.mean(y) - slope * np.mean(X)

print(f"斜率: {slope}")
print(f"截距: {intercept}")`,
            difficulty: 'intermediate'
          }
        ]
      }
    ]
  },
  {
    id: 'web-scraping',
    title: 'Python爬虫',
    description: '使用Python进行网络数据采集，包括requests、BeautifulSoup等库的使用',
    modules: [
      {
        id: 'module-1',
        name: '爬虫基础',
        lessons: [
          {
            id: 'lesson-1',
            title: '爬虫简介',
            content: '网络爬虫是一种自动获取网页内容的程序，用于数据采集、信息监控等任务。',
            codeExample: `import requests
from bs4 import BeautifulSoup

# 发送请求
response = requests.get('https://example.com')

# 解析HTML
soup = BeautifulSoup(response.text, 'html.parser')

# 提取标题
title = soup.find('h1').text
print(f"网页标题: {title}")`,
            difficulty: 'intermediate'
          }
        ]
      }
    ]
  },
  {
    id: 'gradient-projects',
    title: '10个梯度项目',
    description: '基于Cloudflare免费资源的10个Python数据分析梯度项目，从基础到进阶',
    modules: [
      {
        id: 'project-1',
        name: '项目1：数据基础处理',
        lessons: [
          {
            id: 'lesson-1',
            title: '项目介绍',
            content: '本项目主要学习Python基础数据处理，包括数据读取、清洗、转换等基本操作。通过实际案例，掌握数据分析的基本流程。',
            codeExample: `# 数据基础处理示例
import pandas as pd
import numpy as np

# 生成示例数据
data = {
    'name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
    'age': [25, 30, 35, 40, 45],
    'salary': [50000, 60000, 70000, 80000, 90000]
}

df = pd.DataFrame(data)
print(df)

# 基本数据处理
print('\n数据描述:')
print(df.describe())

print('\n按年龄排序:')
print(df.sort_values('age'))`,
            difficulty: 'beginner'
          }
        ]
      },
      {
        id: 'project-2',
        name: '项目2：数据可视化',
        lessons: [
          {
            id: 'lesson-1',
            title: '项目介绍',
            content: '本项目主要学习使用Matplotlib和Seaborn进行数据可视化，通过各种图表展示数据特征和趋势。',
            codeExample: `# 数据可视化示例
import matplotlib.pyplot as plt
import numpy as np

# 生成数据
x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)

# 绘制图表
plt.figure(figsize=(10, 6))
plt.plot(x, y1, label='sin(x)', color='blue')
plt.plot(x, y2, label='cos(x)', color='red')
plt.title('三角函数图像')
plt.xlabel('x')
plt.ylabel('y')
plt.legend()
plt.grid(True)
plt.show()`,
            difficulty: 'beginner'
          }
        ]
      },
      {
        id: 'project-3',
        name: '项目3：统计分析',
        lessons: [
          {
            id: 'lesson-1',
            title: '项目介绍',
            content: '本项目主要学习基本的统计分析方法，包括描述性统计、假设检验、相关性分析等。',
            codeExample: `# 统计分析示例
import numpy as np
import pandas as pd

# 生成随机数据
np.random.seed(42)
data = np.random.normal(100, 15, 1000)

# 计算基本统计量
mean = np.mean(data)
median = np.median(data)
std = np.std(data)

print(f'均值: {mean:.2f}')
print(f'中位数: {median:.2f}')
print(f'标准差: {std:.2f}')

# 计算分位数
q25, q75 = np.percentile(data, [25, 75])
print(f'25%分位数: {q25:.2f}')
print(f'75%分位数: {q75:.2f}')`,
            difficulty: 'intermediate'
          }
        ]
      },
      {
        id: 'project-4',
        name: '项目4：回归分析',
        lessons: [
          {
            id: 'lesson-1',
            title: '项目介绍',
            content: '本项目主要学习线性回归和多元回归分析，通过实际案例掌握回归模型的构建和评估方法。',
            codeExample: `# 回归分析示例
import numpy as np
import matplotlib.pyplot as plt

# 生成数据
np.random.seed(42)
X = np.linspace(0, 10, 100)
y = 2 * X + 1 + np.random.normal(0, 1, 100)

# 计算回归系数
X_mean = np.mean(X)
y_mean = np.mean(y)

numerator = np.sum((X - X_mean) * (y - y_mean))
denominator = np.sum((X - X_mean) ** 2)

slope = numerator / denominator
intercept = y_mean - slope * X_mean

print(f'斜率: {slope:.2f}')
print(f'截距: {intercept:.2f}')

# 绘制回归直线
plt.figure(figsize=(10, 6))
plt.scatter(X, y, label='数据点')
plt.plot(X, slope * X + intercept, color='red', label='回归直线')
plt.title('线性回归示例')
plt.xlabel('X')
plt.ylabel('y')
plt.legend()
plt.show()`,
            difficulty: 'intermediate'
          }
        ]
      },
      {
        id: 'project-5',
        name: '项目5：分类算法',
        lessons: [
          {
            id: 'lesson-1',
            title: '项目介绍',
            content: '本项目主要学习分类算法，包括决策树、K近邻、逻辑回归等，通过实际案例掌握分类模型的构建和评估方法。',
            codeExample: `# 分类算法示例
import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# 生成分类数据
X, y = make_classification(n_samples=1000, n_features=2, n_informative=2, n_redundant=0, random_state=42)

# 划分训练集和测试集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 训练逻辑回归模型
model = LogisticRegression()
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 计算准确率
accuracy = accuracy_score(y_test, y_pred)
print(f'准确率: {accuracy:.2f}')

# 绘制决策边界
plt.figure(figsize=(10, 6))
h = 0.02
x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1
y_min, y_max = X[:, 1].min() - 1, X[:, 1].max() + 1
xx, yy = np.meshgrid(np.arange(x_min, x_max, h), np.arange(y_min, y_max, h))
Z = model.predict(np.c_[xx.ravel(), yy.ravel()])
Z = Z.reshape(xx.shape)
plt.contourf(xx, yy, Z, alpha=0.8)
plt.scatter(X[:, 0], X[:, 1], c=y, edgecolors='k')
plt.title('逻辑回归决策边界')
plt.show()`,
            difficulty: 'intermediate'
          }
        ]
      },
      {
        id: 'project-6',
        name: '项目6：聚类分析',
        lessons: [
          {
            id: 'lesson-1',
            title: '项目介绍',
            content: '本项目主要学习聚类分析算法，包括K-means、层次聚类等，通过实际案例掌握聚类模型的构建和评估方法。',
            codeExample: `# 聚类分析示例
import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import make_blobs
from sklearn.cluster import KMeans

# 生成聚类数据
X, y_true = make_blobs(n_samples=300, centers=4, cluster_std=0.60, random_state=42)

# 应用K-means聚类
kmeans = KMeans(n_clusters=4, random_state=42)
y_kmeans = kmeans.fit_predict(X)

# 绘制聚类结果
plt.figure(figsize=(10, 6))
plt.scatter(X[:, 0], X[:, 1], c=y_kmeans, s=50, cmap='viridis')
centers = kmeans.cluster_centers_
plt.scatter(centers[:, 0], centers[:, 1], c='red', s=200, alpha=0.75)
plt.title('K-means聚类结果')
plt.show()`,
            difficulty: 'intermediate'
          }
        ]
      },
      {
        id: 'project-7',
        name: '项目7：时间序列分析',
        lessons: [
          {
            id: 'lesson-1',
            title: '项目介绍',
            content: '本项目主要学习时间序列分析方法，包括趋势分析、季节性分析、预测等，通过实际案例掌握时间序列数据的处理和分析方法。',
            codeExample: `# 时间序列分析示例
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

# 生成时间序列数据
dates = pd.date_range('2020-01-01', periods=365)
values = 100 + np.cumsum(np.random.randn(365)) + np.sin(np.arange(365) * 2 * np.pi / 30) * 10

# 创建DataFrame
df = pd.DataFrame({'date': dates, 'value': values})
df.set_index('date', inplace=True)

# 绘制时间序列
plt.figure(figsize=(12, 6))
plt.plot(df.index, df['value'])
plt.title('时间序列数据')
plt.xlabel('日期')
plt.ylabel('值')
plt.grid(True)
plt.show()

# 计算移动平均
df['MA7'] = df['value'].rolling(window=7).mean()
plt.figure(figsize=(12, 6))
plt.plot(df.index, df['value'], label='原始数据')
plt.plot(df.index, df['MA7'], label='7天移动平均', color='red')
plt.title('时间序列与移动平均')
plt.xlabel('日期')
plt.ylabel('值')
plt.legend()
plt.grid(True)
plt.show()`,
            difficulty: 'advanced'
          }
        ]
      },
      {
        id: 'project-8',
        name: '项目8：特征工程',
        lessons: [
          {
            id: 'lesson-1',
            title: '项目介绍',
            content: '本项目主要学习特征工程方法，包括特征选择、特征提取、特征转换等，通过实际案例掌握如何构建有效的特征集。',
            codeExample: `# 特征工程示例
import numpy as np
import pandas as pd
from sklearn.feature_selection import SelectKBest, f_regression
from sklearn.preprocessing import StandardScaler, OneHotEncoder

# 生成示例数据
data = {
    'age': [25, 30, 35, 40, 45],
    'gender': ['M', 'F', 'M', 'F', 'M'],
    'salary': [50000, 60000, 70000, 80000, 90000],
    'experience': [2, 5, 8, 10, 15],
    'performance': [75, 82, 88, 90, 95]
}

df = pd.DataFrame(data)

# 类别特征编码
encoder = OneHotEncoder(drop='first', sparse_output=False)
gender_encoded = encoder.fit_transform(df[['gender']])
gender_df = pd.DataFrame(gender_encoded, columns=['gender_M'])
df = pd.concat([df, gender_df], axis=1)
df.drop('gender', axis=1, inplace=True)

# 特征标准化
scaler = StandardScaler()
scaled_features = scaler.fit_transform(df[['age', 'salary', 'experience']])
scaled_df = pd.DataFrame(scaled_features, columns=['age_scaled', 'salary_scaled', 'experience_scaled'])
df = pd.concat([df, scaled_df], axis=1)
df.drop(['age', 'salary', 'experience'], axis=1, inplace=True)

# 特征选择
X = df.drop('performance', axis=1)
y = df['performance']

selector = SelectKBest(f_regression, k=2)
X_selected = selector.fit_transform(X, y)

print('原始特征:')
print(X.columns.tolist())
print('\n选择的特征:')
print(X.columns[selector.get_support()].tolist())
print('\n特征得分:')
print(dict(zip(X.columns, selector.scores_)))`,
            difficulty: 'advanced'
          }
        ]
      },
      {
        id: 'project-9',
        name: '项目9：模型集成',
        lessons: [
          {
            id: 'lesson-1',
            title: '项目介绍',
            content: '本项目主要学习模型集成方法，包括 Bagging、Boosting、Stacking 等，通过实际案例掌握如何构建集成模型以提高预测性能。',
            codeExample: `# 模型集成示例
import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier, AdaBoostClassifier, VotingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score

# 生成分类数据
X, y = make_classification(n_samples=1000, n_features=20, n_informative=15, n_redundant=5, random_state=42)

# 划分训练集和测试集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 构建基础模型
rf = RandomForestClassifier(n_estimators=100, random_state=42)
adaboost = AdaBoostClassifier(n_estimators=100, random_state=42)
logreg = LogisticRegression(random_state=42)
svc = SVC(probability=True, random_state=42)

# 构建投票分类器
voting_clf = VotingClassifier(
    estimators=[('rf', rf), ('adaboost', adaboost), ('logreg', logreg), ('svc', svc)],
    voting='soft'
)

# 训练所有模型
models = {'Random Forest': rf, 'AdaBoost': adaboost, 'Logistic Regression': logreg, 'SVM': svc, 'Voting Classifier': voting_clf}

for name, model in models.items():
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print(f'{name} 准确率: {accuracy:.4f}')`,
            difficulty: 'advanced'
          }
        ]
      },
      {
        id: 'project-10',
        name: '项目10：完整数据分析项目',
        lessons: [
          {
            id: 'lesson-1',
            title: '项目介绍',
            content: '本项目是一个完整的数据分析项目，综合运用前面所学的各种方法，从数据获取、清洗、分析到可视化和报告生成，完成一个端到端的数据分析任务。',
            codeExample: `# 完整数据分析项目示例
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# 生成示例数据
np.random.seed(42)
n = 1000

# 特征
age = np.random.randint(20, 70, n)
experience = np.random.randint(1, 30, n)
education = np.random.randint(1, 5, n)  # 1-4代表不同教育水平

# 目标变量：薪资
salary = 50000 + age * 500 + experience * 2000 + education * 10000 + np.random.normal(0, 10000, n)

# 创建DataFrame
df = pd.DataFrame({
    'age': age,
    'experience': experience,
    'education': education,
    'salary': salary
})

# 数据探索
print('数据基本信息:')
print(df.info())
print('\n数据描述性统计:')
print(df.describe())

# 相关性分析
print('\n相关性矩阵:')
print(df.corr())

# 数据可视化
plt.figure(figsize=(12, 10))

# 薪资分布
plt.subplot(2, 2, 1)
sns.histplot(df['salary'], kde=True)
plt.title('薪资分布')

# 年龄与薪资关系
plt.subplot(2, 2, 2)
sns.scatterplot(x='age', y='salary', data=df)
plt.title('年龄与薪资关系')

# 工作经验与薪资关系
plt.subplot(2, 2, 3)
sns.scatterplot(x='experience', y='salary', data=df)
plt.title('工作经验与薪资关系')

# 教育水平与薪资关系
plt.subplot(2, 2, 4)
sns.boxplot(x='education', y='salary', data=df)
plt.title('教育水平与薪资关系')

plt.tight_layout()
plt.show()

# 构建回归模型
X = df[['age', 'experience', 'education']]
y = df['salary']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LinearRegression()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)

# 模型评估
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print('\n模型评估:')
print(f'均方误差 (MSE): {mse:.2f}')
print(f'R² 评分: {r2:.4f}')

# 模型系数
print('\n模型系数:')
print(f'截距: {model.intercept_:.2f}')
print(f'年龄系数: {model.coef_[0]:.2f}')
print(f'经验系数: {model.coef_[1]:.2f}')
print(f'教育系数: {model.coef_[2]:.2f}')`,
            difficulty: 'advanced'
          }
        ]
      }
    ]
  },
  {
    id: 'ai-business-analytics',
    title: 'AI时代商务数据分析',
    description: '面向商务数据分析与应用专业学生，紧扣AI时代发展趋势的10个递进式Python训练项目',
    modules: [
      {
        id: 'project-1',
        name: '项目1：零售销售数据清洗与探索性分析',
        lessons: [
          {
            id: 'lesson-1',
            title: '项目介绍',
            content: '在AI驱动的自动化分析体系中，高质量数据是智能体进行决策的前提。本项目强调"可信数据"原则，培养学生对数据质量的敏感度。针对某连锁超市的历史销售记录，识别并处理缺失、异常与重复数据，计算核心销售指标，完成初步的数据概览与分布分析。',
            codeExample: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 加载数据
df = pd.read_csv('sales_data.csv')

# 检查缺失值
print('缺失值检查:')
print(df.isnull().sum())

# 填充缺失值
df['Item_Weight'].fillna(df['Item_Weight'].median(), inplace=True)
df['Outlet_Size'].fillna(df['Outlet_Size'].mode()[0], inplace=True)

# 删除重复记录
df.drop_duplicates(inplace=True)

# 转换日期字段
df['Order_Date'] = pd.to_datetime(df['Order_Date'])

# 按商品类别分组统计
sales_by_category = df.groupby('Item_Type').agg({
    'Sales': 'sum',
    'Order_ID': 'count'
}).rename(columns={'Order_ID': 'Order_Count'})

sales_by_category['Average_Price'] = sales_by_category['Sales'] / sales_by_category['Order_Count']

print('按商品类别统计:')
print(sales_by_category)

# 绘制销售额分布
plt.figure(figsize=(10, 6))
plt.hist(df['Sales'], bins=30)
plt.title('销售额分布')
plt.xlabel('销售额')
plt.ylabel('频率')
plt.show()`,
            difficulty: 'beginner'
          }
        ]
      },
      {
        id: 'project-2',
        name: '项目2：电商平台用户行为可视化看板',
        lessons: [
          {
            id: 'lesson-1',
            title: '项目介绍',
            content: '响应"对话式探索"趋势，现代BI系统支持多轮交互与动态钻取，让数据主动讲述业务故事。本项目训练学生将数据转化为直观洞察的能力。基于淘宝双十一大促期间的用户行为日志，分析不同商品类目的访问趋势、用户活跃时段分布及流量来源构成。',
            codeExample: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# 加载数据
df = pd.read_csv('user_behavior.csv')
df['timestamp'] = pd.to_datetime(df['timestamp'])

# 按小时统计点击量
df['hour'] = df['timestamp'].dt.hour
df['day'] = df['timestamp'].dt.dayofweek

# 绘制时间趋势
hourly_counts = df.groupby('hour').size()
plt.figure(figsize=(12, 6))
hourly_counts.plot(kind='line')
plt.title('每小时用户点击量')
plt.xlabel('小时')
plt.ylabel('点击量')
plt.grid(True)
plt.show()

# 构建热力图
heatmap_data = df.groupby(['day', 'hour']).size().unstack()
plt.figure(figsize=(12, 6))
sns.heatmap(heatmap_data, cmap='YlOrRd')
plt.title('用户活跃热力图（星期-小时）')
plt.xlabel('小时')
plt.ylabel('星期')
plt.show()

# 流量来源分析
source_counts = df['source'].value_counts()
plt.figure(figsize=(8, 8))
source_counts.plot(kind='pie', autopct='%1.1f%%')
plt.title('流量来源分布')
plt.ylabel('')
plt.show()`,
            difficulty: 'beginner'
          }
        ]
      },
      {
        id: 'project-3',
        name: '项目3：客户价值分层（RFM模型）分析',
        lessons: [
          {
            id: 'lesson-1',
            title: '项目介绍',
            content: 'AI时代分析师角色正从"执行者"转向"思考者"，聚焦于高价值客户识别与个性化运营策略制定。RFM模型是实现精准营销的基础工具。利用全球商超采购数据，基于客户的最近购买时间、消费频率和消费金额三个维度，构建RFM评分体系，将客户划分为不同价值群体。',
            codeExample: `import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler

# 加载数据
df = pd.read_csv('customer_data.csv')
df['Order_Date'] = pd.to_datetime(df['Order_Date'])

# 计算RFM值
current_date = df['Order_Date'].max() + pd.Timedelta(days=1)
rfm = df.groupby('Customer_ID').agg({
    'Order_Date': lambda x: (current_date - x.max()).days,  # Recency
    'Order_ID': 'count',  # Frequency
    'Sales': 'sum'  # Monetary
}).rename(columns={'Order_Date': 'Recency', 'Order_ID': 'Frequency', 'Sales': 'Monetary'})

# RFM评分（1-5分，越高越好）
rfm['R_Score'] = pd.qcut(rfm['Recency'], 5, labels=[5, 4, 3, 2, 1])
rfm['F_Score'] = pd.qcut(rfm['Frequency'], 5, labels=[1, 2, 3, 4, 5])
rfm['M_Score'] = pd.qcut(rfm['Monetary'], 5, labels=[1, 2, 3, 4, 5])

# 计算综合得分（权重：R=0.3, F=0.4, M=0.3）
rfm['RFM_Score'] = rfm['R_Score'].astype(int) * 0.3 + rfm['F_Score'].astype(int) * 0.4 + rfm['M_Score'].astype(int) * 0.3

# 客户分层
def get_customer_segment(score):
    if score >= 4.5:
        return '高价值客户'
    elif score >= 3.5:
        return '潜力客户'
    elif score >= 2.5:
        return '一般客户'
    else:
        return '流失风险客户'

rfm['Segment'] = rfm['RFM_Score'].apply(get_customer_segment)

print('客户分层结果:')
print(rfm['Segment'].value_counts())

# 分析各层级客户特征
segment_stats = rfm.groupby('Segment').agg({
    'Recency': 'mean',
    'Frequency': 'mean',
    'Monetary': 'mean',
    'RFM_Score': 'mean'
}).round(2)

print('各层级客户特征:')
print(segment_stats)`,
            difficulty: 'intermediate'
          }
        ]
      },
      {
        id: 'project-4',
        name: '项目4：商品销量时间序列预测（Prophet）',
        lessons: [
          {
            id: 'lesson-1',
            title: '项目介绍',
            content: '轻量化AI模型正广泛应用于企业级预测场景，支撑从库存管理到营销规划的"全闭环分析"。Prophet因其对节假日效应的良好支持成为电商首选。基于服装品牌的日销量历史数据，使用Facebook开源的Prophet模型预测未来一周的销售额，特别处理双十一、618等大促事件的影响。',
            codeExample: `import pandas as pd
from prophet import Prophet
import matplotlib.pyplot as plt

# 加载数据
df = pd.read_csv('sales_time_series.csv')
df['ds'] = pd.to_datetime(df['date'])
df['y'] = df['sales']
df = df[['ds', 'y']]

# 定义大促活动
holidays = pd.DataFrame({
    'holiday': 'promotion',
    'ds': pd.to_datetime(['2023-11-11', '2023-06-18', '2024-11-11', '2024-06-18']),
    'lower_window': 0,
    'upper_window': 2,
})

# 初始化并训练模型
model = Prophet(
    yearly_seasonality=True,
    seasonality_mode='multiplicative',
    holidays=holidays
)
model.fit(df)

# 预测未来7天
future = model.make_future_dataframe(periods=7)
forecast = model.predict(future)

# 计算评估指标
actual = df['y'].values
predicted = forecast['yhat'][:-7].values
mape = np.mean(np.abs((actual - predicted) / actual)) * 100
rmse = np.sqrt(np.mean((actual - predicted) ** 2))

print(f'MAPE: {mape:.2f}%')
print(f'RMSE: {rmse:.2f}')

# 绘制预测结果
fig = model.plot(forecast)
plt.title('商品销量预测')
plt.xlabel('日期')
plt.ylabel('销量')
plt.show()

fig2 = model.plot_components(forecast)
plt.show()`,
            difficulty: 'intermediate'
          }
        ]
      },
      {
        id: 'project-5',
        name: '项目5：跨平台商品价格与销量对比分析',
        lessons: [
          {
            id: 'lesson-1',
            title: '项目介绍',
            content: '多源数据整合能力是构建企业"生态化协同"分析体系的关键。本项目模拟企业监控竞品定价、制定跨渠道策略的真实需求。采集淘宝、京东、拼多多等平台上同一品类商品的价格与销量数据，比较各平台的价格分布差异，分析价格与销量之间的相关性。',
            codeExample: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# 加载多平台数据
taobao_data = pd.read_csv('taobao_data.csv')
jd_data = pd.read_csv('jd_data.csv')
pdd_data = pd.read_csv('pdd_data.csv')

# 添加平台标识
taobao_data['platform'] = '淘宝'
jd_data['platform'] = '京东'
pdd_data['platform'] = '拼多多'

# 合并数据
all_data = pd.concat([taobao_data, jd_data, pdd_data], ignore_index=True)

# 价格分布分析
plt.figure(figsize=(12, 6))
sns.histplot(data=all_data, x='price', hue='platform', multiple='stack', bins=30)
plt.title('各平台价格分布')
plt.xlabel('价格')
plt.ylabel('商品数量')
plt.show()

# 价格与销量关系
plt.figure(figsize=(12, 6))
sns.scatterplot(data=all_data, x='price', y='sales', hue='platform', alpha=0.6)
plt.title('价格与销量关系')
plt.xlabel('价格')
plt.ylabel('销量')
plt.grid(True)
plt.show()

# 各平台平均价格和销量
platform_stats = all_data.groupby('platform').agg({
    'price': 'mean',
    'sales': 'mean'
}).round(2)

print('各平台统计:')
print(platform_stats)`,
            difficulty: 'intermediate'
          }
        ]
      },
      {
        id: 'project-6',
        name: '项目6：用户流失预警模型（逻辑回归）',
        lessons: [
          {
            id: 'lesson-1',
            title: '项目介绍',
            content: '"智能运营Agent"可根据行为信号实时执行用户干预策略，实现"周级"到"实时"的跃迁。本项目构建预测模型以识别高流失风险用户。基于银行客户营销数据，利用登录频次、账户余额、联系时长等特征，构建二分类模型预测客户是否会响应定期存款推广活动。',
            codeExample: `import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, roc_auc_score, roc_curve
import matplotlib.pyplot as plt

# 加载数据
df = pd.read_csv('bank_marketing.csv')

# 数据预处理
cat_cols = ['job', 'marital', 'education', 'default', 'housing', 'loan', 'contact', 'month', 'poutcome']
df = pd.get_dummies(df, columns=cat_cols, drop_first=True)
df['y'] = df['y'].map({'yes': 1, 'no': 0})

# 特征和目标变量
X = df.drop('y', axis=1)
y = df['y']

# 划分训练集和测试集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 训练逻辑回归模型
model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)
y_pred_proba = model.predict_proba(X_test)[:, 1]

# 模型评估
print(classification_report(y_test, y_pred))
print(f'AUC-ROC: {roc_auc_score(y_test, y_pred_proba):.4f}')

# 绘制ROC曲线
fpr, tpr, thresholds = roc_curve(y_test, y_pred_proba)
plt.figure(figsize=(10, 6))
plt.plot(fpr, tpr, label=f'ROC Curve (AUC = {roc_auc_score(y_test, y_pred_proba):.4f})')
plt.plot([0, 1], [0, 1], 'k--')
plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate')
plt.title('ROC Curve')
plt.legend()
plt.show()

# 特征重要性
feature_importance = pd.DataFrame({
    'feature': X.columns,
    'importance': np.abs(model.coef_[0])
}).sort_values('importance', ascending=False)

print('前10个重要特征:')
print(feature_importance.head(10))`,
            difficulty: 'intermediate'
          }
        ]
      },
      {
        id: 'project-7',
        name: '项目7：电商购物篮关联规则挖掘（Apriori）',
        lessons: [
          {
            id: 'lesson-1',
            title: '项目介绍',
            content: '发现隐藏的商品组合规律，可为"采购Agent"提供捆绑销售与货架陈列优化建议，提升连带率。Apriori算法是市场篮分析的经典方法。分析杂货店用户的交易记录，挖掘频繁出现的商品组合，计算支持度、置信度和提升度，找出具有商业价值的强关联规则。',
            codeExample: `import pandas as pd
from mlxtend.frequent_patterns import apriori, association_rules

# 加载数据
df = pd.read_csv('groceries.csv')

# 转换为事务-物品矩阵
basket = pd.get_dummies(df['items'].str.split(',').apply(pd.Series).stack()).groupby(level=0).sum()
basket = basket.applymap(lambda x: 1 if x > 0 else 0)

# 生成频繁项集
frequent_itemsets = apriori(basket, min_support=0.02, use_colnames=True)

# 生成关联规则
rules = association_rules(frequent_itemsets, metric="lift", min_threshold=1.2)

# 筛选强规则
strong_rules = rules[rules['lift'] > 1.2].sort_values('lift', ascending=False)

print('Top 10强关联规则:')
print(strong_rules[['antecedents', 'consequents', 'support', 'confidence', 'lift']].head(10))

# 规则可视化
plt.figure(figsize=(12, 8))
sns.scatterplot(data=strong_rules, x='support', y='confidence', size='lift', hue='lift', palette='viridis', sizes=(20, 200))
plt.title('关联规则支持度 vs 置信度')
plt.xlabel('支持度')
plt.ylabel('置信度')
plt.show()`,
            difficulty: 'intermediate'
          }
        ]
      },
      {
        id: 'project-8',
        name: '项目8：信用卡申请反欺诈评分卡',
        lessons: [
          {
            id: 'lesson-1',
            title: '项目介绍',
            content: '现代风控系统采用"模型+规则"混合决策机制，在提升效率的同时保障安全性。评分卡将复杂模型转化为业务人员可理解的信用等级。基于脱敏后的信贷申请数据，构建个人信用评分卡。通过变量分箱、WOE编码与逻辑回归建模，将预测概率映射为标准分值。',
            codeExample: `import pandas as pd
import numpy as np
from sklearn.linear_model import LogisticRegression

# 加载数据
df = pd.read_csv('credit_application.csv')

# 简单分箱函数
def bin_variable(df, var, target, bins=5):
    df[f'{var}_bin'] = pd.qcut(df[var], bins, duplicates='drop')
    # 计算WOE
    grouped = df.groupby(f'{var}_bin')[target].agg(['count', 'sum'])
    grouped['non_event'] = grouped['count'] - grouped['sum']
    grouped['event_rate'] = grouped['sum'] / grouped['sum'].sum()
    grouped['non_event_rate'] = grouped['non_event'] / grouped['non_event'].sum()
    grouped['woe'] = np.log(grouped['event_rate'] / grouped['non_event_rate'])
    grouped['iv'] = (grouped['event_rate'] - grouped['non_event_rate']) * grouped['woe']
    return grouped

# 对连续变量进行分箱和WOE编码
for var in ['age', 'income', 'loan_amount', 'credit_score']:
    bin_results = bin_variable(df, var, 'default')
    print(f'\n{var}的WOE和IV:')
    print(bin_results[['woe', 'iv']])
    print(f'Total IV: {bin_results["iv"].sum():.4f}')

# 筛选高价值特征（IV≥0.1）
high_iv_features = ['income', 'credit_score', 'loan_amount']

# 构建特征矩阵
X = df[high_iv_features]
y = df['default']

# 训练逻辑回归模型
model = LogisticRegression()
model.fit(X, y)

# 计算概率
probabilities = model.predict_proba(X)[:, 1]

# 映射为标准评分（300-900）
score_offset = 600
score_factor = 50
scores = score_offset - score_factor * np.log(probabilities / (1 - probabilities))

# 添加评分到数据框
df['credit_score'] = scores

print('\n信用评分分布:')
print(df['credit_score'].describe())

# 设置评分等级
def get_credit_rating(score):
    if score >= 750:
        return '优秀'
    elif score >= 650:
        return '良好'
    elif score >= 550:
        return '一般'
    else:
        return '较差'

df['rating'] = df['credit_score'].apply(get_credit_rating)
print('\n评分等级分布:')
print(df['rating'].value_counts())`,
            difficulty: 'advanced'
          }
        ]
      },
      {
        id: 'project-9',
        name: '项目9：个性化商品推荐系统（协同过滤）',
        lessons: [
          {
            id: 'lesson-1',
            title: '项目介绍',
            content: '推荐系统是"数字员工"级别的精准营销工具，能显著提升转化效率与用户体验。协同过滤是推荐算法的基础范式之一。基于Olist电商平台的用户-商品交互数据，实现基于用户的协同过滤算法，为指定用户推荐其可能感兴趣但尚未购买的商品。',
            codeExample: `import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

# 加载数据
orders = pd.read_csv('olist_orders.csv')
order_items = pd.read_csv('olist_order_items.csv')
customers = pd.read_csv('olist_customers.csv')

# 合并数据
df = pd.merge(orders, order_items, on='order_id')
df = pd.merge(df, customers, on='customer_id')

# 构建用户-商品矩阵
user_item_matrix = df.pivot_table(index='customer_unique_id', columns='product_id', values='price', aggfunc='count').fillna(0)

# 计算用户相似度
user_similarity = cosine_similarity(user_item_matrix)
user_similarity_df = pd.DataFrame(user_similarity, index=user_item_matrix.index, columns=user_item_matrix.index)

# 推荐函数
def recommend_products(user_id, n=10):
    # 获取用户相似度
    user_sim = user_similarity_df[user_id].sort_values(ascending=False)
    # 排除用户自己
    user_sim = user_sim[user_sim.index != user_id]
    # 取前10个最相似的用户
    top_similar_users = user_sim.head(10).index
    
    # 获取相似用户购买的商品
    similar_users_items = user_item_matrix.loc[top_similar_users]
    # 获取目标用户已购买的商品
    user_purchased = user_item_matrix.loc[user_id]
    user_purchased = user_purchased[user_purchased > 0].index
    
    # 计算商品推荐分数
    item_scores = similar_users_items.sum(axis=0)
    # 排除用户已购买的商品
    item_scores = item_scores.drop(user_purchased, errors='ignore')
    # 排序并推荐
    recommendations = item_scores.sort_values(ascending=False).head(n)
    
    return recommendations

# 测试推荐
sample_user = user_item_matrix.index[0]
print(f'为用户 {sample_user} 推荐的商品:')
recommendations = recommend_products(sample_user)
print(recommendations)

# 评估推荐系统（简单评估）
def evaluate_recommendation(user_id, n=10):
    # 模拟测试：随机选择用户已购买的商品作为"测试集"
    user_purchased = user_item_matrix.loc[user_id]
    user_purchased = user_purchased[user_purchased > 0].index
    
    if len(user_purchased) < 2:
        return 0
    
    # 随机选择一个商品作为测试
    test_item = np.random.choice(user_purchased)
    # 构建临时用户矩阵（移除测试商品）
    temp_matrix = user_item_matrix.copy()
    temp_matrix.loc[user_id, test_item] = 0
    
    # 计算相似度
    temp_similarity = cosine_similarity(temp_matrix)
    temp_similarity_df = pd.DataFrame(temp_similarity, index=temp_matrix.index, columns=temp_matrix.index)
    
    # 获取相似用户
    user_sim = temp_similarity_df[user_id].sort_values(ascending=False)
    user_sim = user_sim[user_sim.index != user_id]
    top_similar_users = user_sim.head(10).index
    
    # 检查测试商品是否在相似用户的购买列表中
    similar_users_items = temp_matrix.loc[top_similar_users]
    test_item_score = similar_users_items[test_item].sum()
    
    # 如果测试商品出现在推荐中，返回1，否则返回0
    return 1 if test_item_score > 0 else 0

# 评估推荐系统
accuracy = []
for i, user_id in enumerate(user_item_matrix.index[:100]):
    acc = evaluate_recommendation(user_id)
    accuracy.append(acc)

print(f'推荐系统准确率: {np.mean(accuracy):.4f}')`,
            difficulty: 'advanced'
          }
        ]
      },
      {
        id: 'project-10',
        name: '项目10：全流程商务数据分析自动化报告',
        lessons: [
          {
            id: 'lesson-1',
            title: '项目介绍',
            content: '模拟"数据分析Agent"的工作流，实现从原始数据到最终报告的无人值守自动化，体现AI时代的生产力变革。综合运用前述九个项目所学技能，构建一个端到端的自动化分析管道。系统能定时读取新数据，自动完成清洗、分析、建模与可视化，并生成标准化的PDF报告。',
            codeExample: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from jinja2 import Template
import pdfkit
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.application import MIMEApplication
from email.mime.text import MIMEText
import os

# 数据清洗模块
def clean_data(file_path):
    df = pd.read_csv(file_path)
    # 处理缺失值
    df = df.dropna()
    # 处理重复值
    df = df.drop_duplicates()
    # 转换日期格式
    if 'date' in df.columns:
        df['date'] = pd.to_datetime(df['date'])
    return df

# 数据分析模块
def analyze_data(df):
    analysis_results = {}
    
    # 基本统计
    analysis_results['basic_stats'] = df.describe().round(2)
    
    # 销售趋势
    if 'date' in df.columns and 'sales' in df.columns:
        df['month'] = df['date'].dt.to_period('M')
        monthly_sales = df.groupby('month')['sales'].sum()
        analysis_results['monthly_sales'] = monthly_sales
    
    # 产品类别分析
    if 'category' in df.columns and 'sales' in df.columns:
        category_sales = df.groupby('category')['sales'].sum().sort_values(ascending=False)
        analysis_results['category_sales'] = category_sales
    
    return analysis_results

# 数据可视化模块
def generate_visualizations(df, analysis_results, output_dir):
    os.makedirs(output_dir, exist_ok=True)
    
    # 销售趋势图
    if 'monthly_sales' in analysis_results:
        plt.figure(figsize=(12, 6))
        analysis_results['monthly_sales'].plot(kind='bar')
        plt.title('月度销售趋势')
        plt.xlabel('月份')
        plt.ylabel('销售额')
        plt.tight_layout()
        plt.savefig(os.path.join(output_dir, 'sales_trend.png'))
        plt.close()
    
    # 产品类别销售图
    if 'category_sales' in analysis_results:
        plt.figure(figsize=(12, 6))
        analysis_results['category_sales'].plot(kind='pie', autopct='%1.1f%%')
        plt.title('产品类别销售分布')
        plt.ylabel('')
        plt.tight_layout()
        plt.savefig(os.path.join(output_dir, 'category_distribution.png'))
        plt.close()
    
    # 销售额分布
    if 'sales' in df.columns:
        plt.figure(figsize=(12, 6))
        sns.histplot(df['sales'], bins=30)
        plt.title('销售额分布')
        plt.xlabel('销售额')
        plt.ylabel('频率')
        plt.tight_layout()
        plt.savefig(os.path.join(output_dir, 'sales_distribution.png'))
        plt.close()

# 报告生成模块
def generate_report(analysis_results, visualization_dir, output_path):
    # 读取HTML模板
    with open('report_template.html', 'r', encoding='utf-8') as f:
        template_content = f.read()
    
    template = Template(template_content)
    
    # 准备数据
    context = {
        'basic_stats': analysis_results['basic_stats'].to_html(),
        'visualization_dir': visualization_dir
    }
    
    # 渲染HTML
    html_content = template.render(**context)
    
    # 转换为PDF
    pdfkit.from_string(html_content, output_path)

# 邮件发送模块
def send_email(report_path, recipient):
    # 邮件配置
    sender = 'your_email@example.com'
    password = 'your_password'
    smtp_server = 'smtp.example.com'
    smtp_port = 587
    
    # 创建邮件
    msg = MIMEMultipart()
    msg['From'] = sender
    msg['To'] = recipient
    msg['Subject'] = '商务数据分析自动化报告'
    
    # 添加正文
    body = '尊敬的用户，附件是最新的商务数据分析报告，请查收。'
    msg.attach(MIMEText(body, 'plain', 'utf-8'))
    
    # 添加附件
    with open(report_path, 'rb') as f:
        attach = MIMEApplication(f.read(), _subtype='pdf')
        attach.add_header('Content-Disposition', 'attachment', filename=os.path.basename(report_path))
        msg.attach(attach)
    
    # 发送邮件
    with smtplib.SMTP(smtp_server, smtp_port) as server:
        server.starttls()
        server.login(sender, password)
        server.send_message(msg)

# 主程序
def main():
    # 配置
    data_file = 'sales_data.csv'
    output_dir = 'output'
    report_path = os.path.join(output_dir, 'business_analysis_report.pdf')
    recipient = 'recipient@example.com'
    
    # 执行流程
    print('1. 清洗数据...')
    df = clean_data(data_file)
    
    print('2. 分析数据...')
    analysis_results = analyze_data(df)
    
    print('3. 生成可视化...')
    generate_visualizations(df, analysis_results, output_dir)
    
    print('4. 生成报告...')
    generate_report(analysis_results, output_dir, report_path)
    
    print('5. 发送邮件...')
    send_email(report_path, recipient)
    
    print('自动化报告生成完成！')

if __name__ == '__main__':
    main()`,
            difficulty: 'advanced'
          }
        ]
      }
    ]
  }
];

