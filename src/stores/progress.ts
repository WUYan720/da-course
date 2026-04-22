import { defineStore } from 'pinia';
import { learningProgress } from '../utils/storage';

export interface UserProgress {
  completedLessons: string[];
  currentCourse: string | null;
  currentChapter: string | null;
  currentLesson: string | null;
}

// 从localStorage加载进度
const loadProgress = (): UserProgress => {
  try {
    // 直接从localStorage读取，保持原有格式
    const stored = localStorage.getItem('python-learning-progress');
    return stored ? JSON.parse(stored) : {
      completedLessons: [],
      currentCourse: null,
      currentChapter: null,
      currentLesson: null
    };
  } catch (error) {
    console.error('Failed to load progress:', error);
    return {
      completedLessons: [],
      currentCourse: null,
      currentChapter: null,
      currentLesson: null
    };
  }
};

// 保存进度到localStorage
const saveProgress = (progress: UserProgress) => {
  try {
    localStorage.setItem('python-learning-progress', JSON.stringify(progress));
  } catch (error) {
    console.error('Failed to save progress:', error);
  }
};

export const useProgressStore = defineStore('progress', {
  state: () => loadProgress(),
  actions: {
    // 标记小节为完成
    completeLesson(lessonId: string) {
      if (!this.completedLessons.includes(lessonId)) {
        this.completedLessons.push(lessonId);
        saveProgress(this);
      }
    },
    
    // 标记小节为未完成
    uncompleteLesson(lessonId: string) {
      this.completedLessons = this.completedLessons.filter(id => id !== lessonId);
      saveProgress(this);
    },
    
    // 更新当前学习位置
    updateCurrentPosition(courseId: string, chapterId: string, lessonId: string) {
      this.currentCourse = courseId;
      this.currentChapter = chapterId;
      this.currentLesson = lessonId;
      saveProgress(this);
    },
    
    // 检查小节是否已完成
    isLessonCompleted(lessonId: string): boolean {
      return this.completedLessons.includes(lessonId);
    },
    
    // 重置进度
    resetProgress() {
      this.completedLessons = [];
      this.currentCourse = null;
      this.currentChapter = null;
      this.currentLesson = null;
      saveProgress(this);
    }
  },
  getters: {
    // 获取课程的完成进度
    getCourseProgress: (state) => (courseId: string) => {
      // 这里需要根据课程的总小节数计算进度
      // 暂时返回0，实际实现需要根据课程数据计算
      return 0;
    }
  }
});
