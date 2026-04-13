import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Filter, Search, Clock, Book, Award, Map, TrendingUp, Target, Star } from 'lucide-react';
import { useAppStore } from '../store';
import { Course } from '../types';

const Courses: React.FC = () => {
  const { courses, userProgress, isAuthenticated, user } = useAppStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const categories = ['all', ...new Set(courses.map(c => c.category))];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || course.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getCourseProgress = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    if (!course) return 0;
    const completed = userProgress.filter(p => p.courseId === courseId && p.completed).length;
    return Math.round((completed / course.lessons.length) * 100);
  };

  const learningPaths = [
    {
      id: 'path-1',
      title: '数据分析师入门路径',
      description: '从基础到进阶，全面掌握数据分析核心技能',
      courses: ['1', '3', '4'],
      duration: '75小时',
      level: 'beginner'
    },
    {
      id: 'path-2',
      title: '数据可视化专家路径',
      description: '深入学习数据可视化技术，创建专业数据仪表板',
      courses: ['3', '6'],
      duration: '75小时',
      level: 'intermediate'
    },
    {
      id: 'path-3',
      title: '大数据分析路径',
      description: '掌握大数据处理技术，应对海量数据挑战',
      courses: ['6'],
      duration: '50小时',
      level: 'advanced'
    }
  ];

  const recommendedCourses = courses.filter(course => {
    const progress = getCourseProgress(course.id);
    return progress === 0; // 推荐未开始的课程
  }).slice(0, 3);

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">课程中心</h1>
        <p className="text-xl text-gray-600">探索我们精心设计的商务数据分析课程</p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="搜索课程..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-4 flex-wrap">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? '全部分类' : category}
                </option>
              ))}
            </select>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>
                  {difficulty === 'all' ? '全部难度' : 
                   difficulty === 'beginner' ? '入门' :
                   difficulty === 'intermediate' ? '中级' : '高级'}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Map className="h-6 w-6 text-blue-600" />
          推荐学习路径
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {learningPaths.map((path) => (
            <div key={path.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  path.level === 'beginner'
                    ? 'bg-green-100 text-green-700'
                    : path.level === 'intermediate'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {path.level === 'beginner' ? '入门' : path.level === 'intermediate' ? '中级' : '高级'}
                </span>
                <span className="text-sm text-gray-500 flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {path.duration}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{path.title}</h3>
              <p className="text-gray-600 mb-4">{path.description}</p>
              <div className="mb-4">
                <div className="text-sm font-semibold text-gray-700 mb-2">包含课程:</div>
                <div className="flex flex-wrap gap-2">
                  {path.courses.map(courseId => {
                    const course = courses.find(c => c.id === courseId);
                    return course ? (
                      <span key={courseId} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                        {course.title}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
              <Link
                to={`/courses/${path.courses[0]}`}
                className="block w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all text-center"
              >
                开始学习
              </Link>
            </div>
          ))}
        </div>
      </section>

      {recommendedCourses.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Star className="h-6 w-6 text-yellow-500" />
            为您推荐
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {recommendedCourses.map((course) => {
              return (
                <Link
                  key={course.id}
                  to={`/courses/${course.id}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group border border-gray-100"
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
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </span>
                      <span className="flex items-center">
                        <Book className="h-4 w-4 mr-1" />
                        {course.lessons.length} 节课
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-blue-600" />
          全部课程
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            const progress = getCourseProgress(course.id);
            return (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group border border-gray-100"
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
                  
                  {progress > 0 && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">学习进度</span>
                        <span className="text-blue-600 font-semibold">{progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </span>
                    <span className="flex items-center">
                      <Book className="h-4 w-4 mr-1" />
                      {course.lessons.length} 节课
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {filteredCourses.length === 0 && (
        <div className="text-center py-16">
          <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">没有找到相关课程</h3>
          <p className="text-gray-500">请尝试调整搜索条件</p>
        </div>
      )}
    </div>
  );
};

export default Courses;
