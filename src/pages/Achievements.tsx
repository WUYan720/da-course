import React from 'react';
import { Award, Lock, CheckCircle2 } from 'lucide-react';
import { useAppStore } from '../store';

const Achievements: React.FC = () => {
  const { achievements, userAchievements, isAuthenticated } = useAppStore();

  const isUnlocked = (achievementId: string) => {
    return userAchievements.some(ua => ua.achievementId === achievementId);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">成就系统</h1>
        <p className="text-xl text-gray-600">
          完成学习目标，解锁精彩成就！
        </p>
        {!isAuthenticated && (
          <p className="text-blue-600 mt-4">登录后可以解锁成就</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map(achievement => {
          const unlocked = isUnlocked(achievement.id);
          const userAchievement = userAchievements.find(ua => ua.achievementId === achievement.id);
          
          return (
            <div
              key={achievement.id}
              className={`rounded-2xl p-6 transition-all ${
                unlocked
                  ? 'bg-gradient-to-br from-yellow-50 to-amber-100 shadow-lg border-2 border-yellow-300'
                  : 'bg-white shadow-md border-2 border-gray-200 opacity-75'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`text-5xl ${unlocked ? '' : 'grayscale opacity-50'}`}>
                  {achievement.icon}
                </div>
                {unlocked ? (
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                ) : (
                  <Lock className="h-8 w-8 text-gray-400" />
                )}
              </div>
              
              <h3 className={`text-xl font-bold mb-2 ${
                unlocked ? 'text-gray-800' : 'text-gray-500'
              }`}>
                {achievement.title}
              </h3>
              
              <p className={`mb-4 ${
                unlocked ? 'text-gray-600' : 'text-gray-400'
              }`}>
                {achievement.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className={`text-sm font-semibold ${
                  unlocked ? 'text-yellow-600' : 'text-gray-400'
                }`}>
                  +{achievement.points} 积分
                </span>
                {unlocked && userAchievement && (
                  <span className="text-xs text-gray-500">
                  {new Date(userAchievement.unlockedAt).toLocaleDateString('zh-CN')}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
        <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">继续探索更多成就</h3>
        <p className="text-gray-600">
          完成课程、取得高分、持续学习，解锁更多精彩成就！
        </p>
      </div>
    </div>
  );
};

export default Achievements;
