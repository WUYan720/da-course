import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Award, User, Menu, X, LogOut, Home, Map, Database, BarChart3, GraduationCap } from 'lucide-react';
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
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8" />
              <span className="text-xl font-bold">数据分析技术平台</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-200 transition-colors flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-blue-700">
              <Home className="h-4 w-4" />
              <span>首页</span>
            </Link>
            <Link to="/courses" className="hover:text-blue-200 transition-colors flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-blue-700">
              <BookOpen className="h-4 w-4" />
              <span>课程</span>
            </Link>
            <Link to="/achievements" className="hover:text-blue-200 transition-colors flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-blue-700">
              <Award className="h-4 w-4" />
              <span>成就</span>
            </Link>
            <Link to="/courses" className="hover:text-blue-200 transition-colors flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-blue-700">
              <Map className="h-4 w-4" />
              <span>学习路径</span>
            </Link>
            <Link to="/courses" className="hover:text-blue-200 transition-colors flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-blue-700">
              <Database className="h-4 w-4" />
              <span>资源中心</span>
            </Link>
            <Link to="/courses" className="hover:text-blue-200 transition-colors flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-blue-700">
              <BarChart3 className="h-4 w-4" />
              <span>数据工具</span>
            </Link>
            
            {isAuthenticated && user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-blue-800 px-3 py-1 rounded-full">
                  <span className="text-yellow-300">⭐</span>
                  <span>{user.points} 积分</span>
                </div>
                <Link
                  to="/profile"
                  className="hover:text-blue-200 transition-colors flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-blue-700"
                >
                  <User className="h-4 w-4" />
                  <span>{user.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="hover:text-blue-200 transition-colors flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-blue-700"
                >
                  <LogOut className="h-4 w-4" />
                  <span>退出</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/courses"
                  className="text-white hover:text-blue-200 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-blue-700"
                >
                  开始试用
                </Link>
                <Link
                  to="/login"
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  登录/注册
                </Link>
              </div>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-200 p-2 rounded-lg hover:bg-blue-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-blue-700 flex items-center space-x-2"
            >
              <Home className="h-4 w-4" />
              <span>首页</span>
            </Link>
            <Link
              to="/courses"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-blue-700 flex items-center space-x-2"
            >
              <BookOpen className="h-4 w-4" />
              <span>课程</span>
            </Link>
            <Link
              to="/achievements"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-blue-700 flex items-center space-x-2"
            >
              <Award className="h-4 w-4" />
              <span>成就</span>
            </Link>
            <Link
              to="/courses"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-blue-700 flex items-center space-x-2"
            >
              <Map className="h-4 w-4" />
              <span>学习路径</span>
            </Link>
            <Link
              to="/courses"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-blue-700 flex items-center space-x-2"
            >
              <Database className="h-4 w-4" />
              <span>资源中心</span>
            </Link>
            <Link
              to="/courses"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-blue-700 flex items-center space-x-2"
            >
              <BarChart3 className="h-4 w-4" />
              <span>数据工具</span>
            </Link>
            
            {isAuthenticated && user ? (
              <>
                <div className="px-3 py-2 text-yellow-300 flex items-center space-x-2">
                  <span>⭐</span>
                  <span>{user.points} 积分</span>
                </div>
                <Link
                  to="/profile"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md hover:bg-blue-700 flex items-center space-x-2"
                >
                  <User className="h-4 w-4" />
                  <span>{user.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 rounded-md hover:bg-blue-700 flex items-center space-x-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span>退出</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/courses"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md hover:bg-blue-700"
                >
                  开始试用
                </Link>
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md bg-white text-blue-600 font-medium"
                >
                  登录/注册
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
