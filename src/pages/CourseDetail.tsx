import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Book, PlayCircle, CheckCircle, Map, BarChart3, Code, Database, Award, ChevronRight } from 'lucide-react';
import { useAppStore } from '../store';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { courses, setCurrentCourse, userProgress, isAuthenticated } = useAppStore();
  
  const course = courses.find(c => c.id === id);
  
  if (!course) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-800">课程不存在</h2>
        <Link to="/courses" className="text-blue-600 hover:underline mt-4 inline-block">
          返回课程列表
        </Link>
      </div>
    );
  }

  const getLessonProgress = (lessonId: string) => {
    return userProgress.find(p => p.courseId === course.id && p.lessonId === lessonId);
  };

  const handleStartLearning = () => {
    setCurrentCourse(course);
    navigate(`/courses/${course.id}/learn/0`);
  };

  const completedLessons = userProgress.filter(p => p.courseId === course.id && p.completed).length;
  const totalLessons = course.lessons.length;
  const completionPercentage = Math.round((completedLessons / totalLessons) * 100);

  const getProgressColor = (percentage: number) => {
    if (percentage < 30) return 'bg-red-500';
    if (percentage < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const platformFeatures = [
    {
      icon: <Code className="h-6 w-6 text-blue-500" />,
      title: '实时代码编辑器',
      description: '在线编写和执行代码，无需安装环境'
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-green-500" />,
      title: '数据可视化实验室',
      description: '创建交互式数据可视化图表'
    },
    {
      icon: <Database className="h-6 w-6 text-purple-500" />,
      title: '丰富数据集',
      description: '提供多种真实数据集用于练习'
    },
    {
      icon: <Award className="h-6 w-6 text-yellow-500" />,
      title: '成就系统',
      description: '完成课程获得成就和积分'
    }
  ];

  return (
    <div className="space-y-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        返回
      </button>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <div className="h-72 bg-gradient-to-br from-blue-400 to-indigo-500 relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h1 className="text-4xl font-bold mb-2">{course.title}</h1>
                  <p className="text-blue-100">{course.description}</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-sm text-blue-600 font-semibold">{course.category}</span>
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
                <div className="flex items-center text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center text-gray-500">
                  <Book className="h-4 w-4 mr-1" />
                  {course.lessons.length} 节课
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">学习进度</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>已完成 {completedLessons} / {totalLessons} 节课</span>
                    <span>{completionPercentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${getProgressColor(completionPercentage)} transition-all duration-300`}
                      style={{ width: `${completionPercentage}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">平台特色</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {platformFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors">
                      <div>{feature.icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleStartLearning}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <PlayCircle className="h-5 w-5 mr-2" />
                开始学习
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Map className="h-5 w-5 text-blue-600" />
              学习路径
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              <div className="space-y-6">
                {course.lessons.map((lesson, index) => {
                  const progress = getLessonProgress(lesson.id);
                  return (
                    <div key={lesson.id} className="relative pl-12">
                      <div className={`absolute left-2 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        progress?.completed
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}>
                        {progress?.completed ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      <div className={`p-4 rounded-xl border-2 transition-all ${
                        progress?.completed
                          ? 'border-green-200 bg-green-50'
                          : 'border-gray-100 hover:border-blue-200 hover:bg-blue-50'
                      }`}>
                        <h4 className="font-semibold text-gray-800">
                          第 {index + 1} 课: {lesson.title}
                        </h4>
                        {progress?.score !== undefined && (
                          <div className="text-blue-600 text-sm mt-1">
                            得分: {progress.score}%
                          </div>
                        )}
                        <div className="mt-3">
                          <Link
                            to={`/courses/${course.id}/learn/${index}`}
                            className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                          >
                            开始学习 <ChevronRight className="h-4 w-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-8 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-6">课程目录</h2>
            <div className="space-y-3">
              {course.lessons.map((lesson, index) => {
                const progress = getLessonProgress(lesson.id);
                return (
                  <Link
                    key={lesson.id}
                    to={`/courses/${course.id}/learn/${index}`}
                    className={`p-4 rounded-xl border-2 transition-all hover:shadow-md ${
                      progress?.completed
                        ? 'border-green-200 bg-green-50'
                        : 'border-gray-100 hover:border-blue-200 hover:bg-blue-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-1 ${progress?.completed ? 'text-green-500' : 'text-gray-400'}`}>
                        {progress?.completed ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          <div className="h-5 w-5 rounded-full border-2 border-gray-300 flex items-center justify-center text-xs">
                            {index + 1}
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800">
                          第 {index + 1} 课
                        </div>
                        <div className="text-gray-600 text-sm">{lesson.title}</div>
                        {progress?.score !== undefined && (
                          <div className="text-blue-600 text-sm mt-1">
                            得分: {progress.score}%
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">课程统计</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">总课时</span>
                  <span className="font-semibold">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">课程数量</span>
                  <span className="font-semibold">{course.lessons.length} 节</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">完成进度</span>
                  <span className="font-semibold">{completionPercentage}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">难度级别</span>
                  <span className={`font-semibold ${
                    course.difficulty === 'beginner'
                      ? 'text-green-600'
                      : course.difficulty === 'intermediate'
                      ? 'text-yellow-600'
                      : 'text-red-600'
                  }`}>
                    {course.difficulty === 'beginner'
                      ? '入门'
                      : course.difficulty === 'intermediate'
                      ? '中级'
                      : '高级'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
