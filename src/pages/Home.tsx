import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Award, PlayCircle, ArrowRight, Database, BarChart3, Code, Map, GraduationCap } from 'lucide-react';
import { useAppStore } from '../store';

const Home: React.FC = () => {
  const { courses } = useAppStore();

  const features = [
    {
      icon: <BookOpen className="h-12 w-12 text-blue-500" />,
      title: '完整课程体系',
      description: '从基础到进阶，系统化学习商务数据分析所需的全部技能'
    },
    {
      icon: <PlayCircle className="h-12 w-12 text-green-500" />,
      title: '互动式学习',
      description: '学习-练习-测评完整闭环，边学边练快速掌握'
    },
    {
      icon: <Award className="h-12 w-12 text-yellow-500" />,
      title: '成就激励',
      description: '丰富的成就系统，激励学习动力，记录成长轨迹'
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-purple-500" />,
      title: '专业定制',
      description: '专为商务数据分析与应用专业学生设计的课程内容'
    },
    {
      icon: <Database className="h-12 w-12 text-indigo-500" />,
      title: '数据资源中心',
      description: '提供丰富的数据集和案例，支持实战演练'
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-orange-500" />,
      title: '数据可视化工具',
      description: '集成多种数据可视化工具，提升分析能力'
    },
    {
      icon: <Code className="h-12 w-12 text-red-500" />,
      title: '编程实践环境',
      description: '在线编程环境，无需安装即可实践代码'
    },
    {
      icon: <Map className="h-12 w-12 text-teal-500" />,
      title: '个性化学习路径',
      description: '根据学习进度和目标，推荐个性化学习路径'
    }
  ];

  const platforms = [
    {
      title: 'Python 数据处理实验室',
      description: '基于Python的数据分析工具和库，包括Pandas、NumPy等',
      icon: <Code className="h-8 w-8 text-blue-500" />
    },
    {
      title: '数据可视化仪表板',
      description: '使用Matplotlib、Seaborn等工具创建交互式数据可视化',
      icon: <BarChart3 className="h-8 w-8 text-green-500" />
    },
    {
      title: '大数据处理平台',
      description: 'Hadoop、Spark等大数据处理技术的学习和实践',
      icon: <Database className="h-8 w-8 text-purple-500" />
    }
  ];

  return (
    <div className="space-y-20">
      <section className="text-center py-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-16 text-white shadow-2xl">
          <div className="flex justify-center mb-6">
            <GraduationCap className="h-16 w-16" />
          </div>
          <h1 className="text-5xl font-bold mb-6">
            数据分析技术平台
          </h1>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            专为商务数据分析与应用专业学生打造的综合性学习平台，
            集成课程、工具、资源于一体，助您掌握数据分析核心技能
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
            >
              开始试用 <ArrowRight className="inline ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/login"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all"
            >
              登录/注册
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          平台核心功能
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          技术平台组件
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-6">{platform.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{platform.title}</h3>
              <p className="text-gray-600">{platform.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-800">热门课程</h2>
          <Link
            to="/courses"
            className="text-blue-600 font-semibold hover:text-blue-700 flex items-center"
          >
            查看全部 <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.slice(0, 3).map((course) => (
            <Link
              key={course.id}
              to={`/courses/${course.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group border border-gray-100"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      course.difficulty === 'beginner'
                        ? 'bg-green-100 text-green-700'
                        : course.difficulty === 'intermediate'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {course.difficulty === 'beginner'
                      ? '入门'
                      : course.difficulty === 'intermediate'
                      ? '中级'
                      : '高级'}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">{course.category}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>⏱️ {course.duration}</span>
                  <span>📚 {course.lessons.length} 节课</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-16 text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-6">数据分析技术平台</h2>
          <p className="text-xl mb-8 max-w-2xl">
            掌握现代数据分析技术栈，包括Python数据处理、数据可视化、大数据处理等核心技术，
            通过实践项目提升您的数据分析能力
          </p>
          <Link
            to="/courses/6"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-lg inline-flex items-center"
          >
            开始学习 <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          准备好开始学习了吗？
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          加入数据分析技术平台，开启您的数据分析学习之旅！
        </p>
        <Link
          to="/courses"
          className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
        >
          浏览所有课程 <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>
    </div>
  );
};

export default Home;
