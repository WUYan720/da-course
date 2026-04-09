import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Award, BookOpen, TrendingUp, Calendar, Star } from 'lucide-react';
import { useAppStore } from '../store';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { user, userProgress, courses, userAchievements, achievements, isAuthenticated } = useAppStore();

  if (!isAuthenticated || !user) {
    navigate('/login');
    return null;
  }

  const completedLessons = userProgress.filter(p => p.completed).length;
  const totalLessons = courses.reduce((sum, course) => sum + course.lessons.length, 0);
  const unlockedAchievements = userAchievements.length;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <User className="h-12 w-12" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="text-blue-100">{user.email}</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6 p-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">{user.points}</div>
            <div className="text-gray-600 flex items-center justify-center">
              <Star className="h-4 w-4 mr-1 text-yellow-500" />
              总积分
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">{completedLessons}</div>
            <div className="text-gray-600 flex items-center justify-center">
              <BookOpen className="h-4 w-4 mr-1" />
              完成课时
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">{unlockedAchievements}</div>
            <div className="text-gray-600 flex items-center justify-center">
              <Award className="h-4 w-4 mr-1" />
              获得成就
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <TrendingUp className="h-6 w-6 mr-2 text-blue-600" />
            学习进度
          </h2>
          <div className="space-y-4">
            {courses.map(course => {
              const completed = userProgress.filter(
                p => p.courseId === course.id && p.completed
              ).length;
              const total = course.lessons.length;
              const percentage = Math.round((completed / total) * 100);
              
              return (
                <div key={course.id} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-800">{course.title}</span>
                    <span className="text-blue-600">{completed}/{total}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <Award className="h-6 w-6 mr-2 text-yellow-600" />
            最近成就
          </h2>
          <div className="space-y-4">
            {userAchievements.slice(0, 5).map((ua, idx) => {
              const achievement = achievements.find(a => a.id === ua.achievementId);
              if (!achievement) return null;
              return (
                <div key={idx} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl">
                  <div className="text-4xl">{achievement.icon}</div>
                  <div>
                    <div className="font-semibold text-gray-800">{achievement.title}</div>
                    <div className="text-sm text-gray-600">{achievement.description}</div>
                  </div>
                </div>
              );
            })}
            {userAchievements.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                还没有获得任何成就，开始学习吧！
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
