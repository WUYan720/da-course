import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Award, User, Menu, X, LogOut, Home } from 'lucide-react';
import { useAppStore } from '../store';
import { clsx } from 'clsx';

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
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8" />
              <span className="text-xl font-bold">数据分析学堂</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-200 transition-colors flex items-center space-x-1">
              <Home className="h-4 w-4" />
              <span>首页</span>
            </Link>
            <Link to="/courses" className="hover:text-blue-200 transition-colors flex items-center space-x-1">
              <BookOpen className="h-4 w-4" />
              <span>课程</span>
            </Link>
            <Link to="/achievements" className="hover:text-blue-200 transition-colors flex items-center space-x-1">
              <Award className="h-4 w-4" />
              <span>成就</span>
            </Link>
            
            {isAuthenticated && user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-blue-800 px-3 py-1 rounded-full">
                  <span className="text-yellow-300">⭐</span>
                  <span>{user.points} 积分</span>
                </div>
                <Link
                  to="/profile"
                  className="hover:text-blue-200 transition-colors flex items-center space-x-1"
                >
                  <User className="h-4 w-4" />
                  <span>{user.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="hover:text-blue-200 transition-colors flex items-center space-x-1"
                >
                  <LogOut className="h-4 w-4" />
                  <span>退出</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                登录/注册
              </Link>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-200"
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
              className="block px-3 py-2 rounded-md hover:bg-blue-700"
            >
              首页
            </Link>
            <Link
              to="/courses"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-blue-700"
            >
              课程
            </Link>
            <Link
              to="/achievements"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-blue-700"
            >
              成就
            </Link>
            
            {isAuthenticated && user ? (
              <>
                <div className="px-3 py-2 text-yellow-300">
                  ⭐ {user.points} 积分
                </div>
                <Link
                  to="/profile"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md hover:bg-blue-700"
                >
                  {user.name}
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 rounded-md hover:bg-blue-700"
                >
                  退出
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md bg-white text-blue-600 font-medium"
              >
                登录/注册
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
