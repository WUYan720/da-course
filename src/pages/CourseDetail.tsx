import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Book, PlayCircle, CheckCircle } from 'lucide-react';
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
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    setCurrentCourse(course);
    navigate(`/courses/${course.id}/learn/0`);
  };

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
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="h-64 bg-gradient-to-br from-blue-400 to-indigo-500 relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
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
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{course.title}</h1>
              <p className="text-gray-600 text-lg mb-6">{course.description}</p>
              
              <div className="flex items-center gap-6 text-gray-500 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <Book className="h-5 w-5 mr-2" />
                  {course.lessons.length} 节课
                </div>
              </div>

              <button
                onClick={handleStartLearning}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-800 transition-all shadow-lg hover:shadow-xl"
              >
                <PlayCircle className="inline h-5 w-5 mr-2" />
                开始学习
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">课程目录</h2>
            <div className="space-y-3">
              {course.lessons.map((lesson, index) => {
                const progress = getLessonProgress(lesson.id);
                return (
                  <div
                    key={lesson.id}
                    className={`p-4 rounded-xl border-2 transition-all ${
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
                          <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
