import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Menu, X, LogOut } from 'lucide-react';
import { useAppStore } from '../store';

const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAppStore();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* 左侧：品牌名 */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">
              数据分析技术平台
            </Link>
          </div>

          {/* 中间：导航菜单 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="px-3 py-2 text-white hover:text-blue-200 hover:border-b-2 hover:border-blue-300 transition-all duration-200 font-medium"
            >
              首页
            </Link>
            <Link 
              to="/courses" 
              className="px-3 py-2 text-white hover:text-blue-200 hover:border-b-2 hover:border-blue-300 transition-all duration-200 font-medium"
            >
              课程学习
            </Link>
            <Link 
              to="/quiz" 
              className="px-3 py-2 text-white hover:text-blue-200 hover:border-b-2 hover:border-blue-300 transition-all duration-200 font-medium"
            >
              题库
            </Link>
            <Link 
              to="/achievements" 
              className="px-3 py-2 text-white hover:text-blue-200 hover:border-b-2 hover:border-blue-300 transition-all duration-200 font-medium"
            >
              成就
            </Link>
            <Link 
              to="/resources" 
              className="px-3 py-2 text-white hover:text-blue-200 hover:border-b-2 hover:border-blue-300 transition-all duration-200 font-medium"
            >
              资源中心
            </Link>
            <Link 
              to="/tools" 
              className="px-3 py-2 text-white hover:text-blue-200 hover:border-b-2 hover:border-blue-300 transition-all duration-200 font-medium"
            >
              数据工具
            </Link>
          </div>

          {/* 右侧：登录/注册按钮 */}
          <div className="flex items-center">
            {isAuthenticated && user ? (
              <div className="hidden md:flex items-center space-x-4">
                <div className="text-yellow-400 font-medium">
                  ⭐ {user.points} 积分
                </div>
                <Link
                  to="/profile"
                  className="px-4 py-2 text-white hover:text-blue-200 transition-all duration-200 font-medium flex items-center space-x-2"
                >
                  <User className="h-4 w-4" />
                  <span>{user.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-white hover:text-blue-200 transition-all duration-200 font-medium flex items-center space-x-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span>退出</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-white text-blue-900 px-6 py-2.5 rounded-lg font-bold hover:bg-blue-50 transition-all duration-200 shadow-md"
              >
                登录/注册
              </Link>
            )}

            {/* 移动端菜单按钮 */}
            <div className="md:hidden ml-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-blue-200 p-2 rounded-lg hover:bg-blue-800"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 border-t border-blue-700">
          <div className="px-4 py-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-blue-700 text-white font-medium"
            >
              首页
            </Link>
            <Link
              to="/courses"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-blue-700 text-white font-medium"
            >
              课程学习
            </Link>
            <Link
              to="/quiz"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-blue-700 text-white font-medium"
            >
              题库
            </Link>
            <Link
              to="/achievements"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-blue-700 text-white font-medium"
            >
              成就
            </Link>
            <Link
              to="/resources"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-blue-700 text-white font-medium"
            >
              资源中心
            </Link>
            <Link
              to="/tools"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-blue-700 text-white font-medium"
            >
              数据工具
            </Link>
            
            <div className="border-t border-blue-700 my-4 pt-4">
              {isAuthenticated && user ? (
                <>
                  <div className="px-4 py-2 text-yellow-400 font-medium">
                    ⭐ {user.points} 积分
                  </div>
                  <Link
                    to="/profile"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg hover:bg-blue-700 text-white font-medium"
                  >
                    {user.name}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-3 rounded-lg hover:bg-blue-700 text-white font-medium"
                  >
                    退出
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg bg-white text-blue-900 font-bold text-center"
                >
                  登录/注册
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
