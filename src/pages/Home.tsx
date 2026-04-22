import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Award, PlayCircle, ArrowRight, Database, BarChart3, Code, Map, GraduationCap, ChevronDown, Star } from 'lucide-react';
import { useAppStore } from '../store';

const Home: React.FC = () => {
  const { courses } = useAppStore();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 英雄区动画效果
    if (heroRef.current) {
      heroRef.current.classList.add('opacity-100', 'translate-y-0');
    }

    // 滚动动画
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          el.classList.add('opacity-100', 'translate-y-0');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始检查

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="space-y-24">
      {/* 英雄区 */}
      <section className="py-20">
        <div 
          ref={heroRef}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-16 md:p-24 text-white shadow-2xl relative overflow-hidden opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          {/* 背景装饰 */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="w-full h-full bg-white rounded-full -mr-32 -mt-32"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-10">
            <div className="w-full h-full bg-white rounded-full -ml-24 -mb-24"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <GraduationCap className="h-20 w-20" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              数据分析技术平台
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              专为商务数据分析与应用专业学生打造的综合性学习平台，
              集成课程、工具、资源于一体，助您掌握数据分析核心技能
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/courses"
                className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-lg flex items-center justify-center group"
              >
                开始试用 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/login"
                className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center"
              >
                登录/注册
              </Link>
            </div>
            
            {/* 向下滚动指示器 */}
            <div className="mt-16 animate-bounce">
              <ChevronDown className="h-8 w-8 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* 平台核心功能 */}
      <section className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          平台核心功能
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 技术平台组件 */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 md:p-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          技术平台组件
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform">
                {platform.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                {platform.title}
              </h3>
              <p className="text-gray-600">{platform.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 热门课程 */}
      <section className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-0">
            热门课程
          </h2>
          <Link
            to="/courses"
            className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group"
          >
            查看全部 
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.slice(0, 3).map((course) => (
            <Link
              key={course.id}
              to={`/courses/${course.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group border border-gray-100"
            >
              <div className="h-56 bg-gradient-to-br from-blue-400 to-indigo-500 relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">{course.category}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
                  <span className="flex items-center gap-1">
                    ⏱️ {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    📚 {course.lessons.length} 节课
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Python数据分析AI训练平台专题 */}
      <section className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-3xl p-16 md:p-20 text-white shadow-2xl relative overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="w-full h-full bg-white rounded-full -mr-32 -mt-32"></div>
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Python数据分析AI训练平台
            </h2>
            <p className="text-xl mb-8">
              基于Cloudflare免费资源的无后端Python数据分析实操训练平台，
              采用"3步认知+10个梯度项目+AI错题倒逼"模式，打开浏览器即可使用
            </p>
            <Link
              to="/courses/7"
              className="bg-white text-purple-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all hover:scale-105 shadow-lg inline-flex items-center group"
            >
              开始学习 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 数据分析技术平台专题 */}
      <section className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-16 md:p-20 text-white shadow-2xl relative overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="w-full h-full bg-white rounded-full -mr-32 -mt-32"></div>
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              数据分析技术平台
            </h2>
            <p className="text-xl mb-8">
              掌握现代数据分析技术栈，包括Python数据处理、数据可视化、大数据处理等核心技术，
              通过实践项目提升您的数据分析能力
            </p>
            <Link
              to="/courses/6"
              className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-lg inline-flex items-center group"
            >
              开始学习 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 行动召唤 */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-16 md:p-20 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          准备好开始学习了吗？
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          加入数据分析技术平台，开启您的数据分析学习之旅！
        </p>
        <Link
          to="/courses"
          className="inline-flex items-center bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg group"
        >
          浏览所有课程 
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </div>
  );
};

export default Home;
