import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Award, PlayCircle, ArrowRight } from 'lucide-react';
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
    }
  ];

  return (
    <div className="space-y-16">
      <section className="text-center py-12">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-white shadow-2xl">
          <h1 className="text-5xl font-bold mb-6">
            欢迎来到数据分析学堂
          </h1>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            专为商务数据分析与应用专业学生打造的在线学习平台，
            助您掌握数据分析核心技能
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
            >
              开始学习 <ArrowRight className="inline ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/login"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all"
            >
              注册账号
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          为什么选择我们？
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
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
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group"
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

      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          准备好开始学习了吗？
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          加入我们，开始您的数据分析学习之旅！
        </p>
        <Link
          to="/courses"
          className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
        >
          立即开始 <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>
    </div>
  );
};

export default Home;
