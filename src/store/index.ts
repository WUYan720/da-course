import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Course, UserProgress, UserAchievement, Achievement, User } from '../types';
import { courses, achievements } from '../data/courses';

interface AppState {
  user: User | null;
  courses: Course[];
  achievements: Achievement[];
  userProgress: UserProgress[];
  userAchievements: UserAchievement[];
  isAuthenticated: boolean;
  currentCourse: Course | null;
  currentLessonIndex: number;
  login: (email: string, name?: string) => void;
  logout: () => void;
  setCurrentCourse: (course: Course | null) => void;
  setCurrentLessonIndex: (index: number) => void;
  completeLesson: (courseId: string, lessonId: string, score?: number) => void;
  unlockAchievement: (achievementId: string) => void;
  checkAchievements: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      user: null,
      courses: courses,
      achievements: achievements,
      userProgress: [],
      userAchievements: [],
      isAuthenticated: false,
      currentCourse: null,
      currentLessonIndex: 0,

      login: (email: string, name?: string) => {
        set({
          user: {
            id: Date.now().toString(),
            email,
            name: name || email.split('@')[0],
            points: 0,
            achievements: [],
            progress: []
          },
          isAuthenticated: true
        });
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          userProgress: [],
          userAchievements: [],
          currentCourse: null,
          currentLessonIndex: 0
        });
      },

      setCurrentCourse: (course: Course | null) => {
        set({ currentCourse: course, currentLessonIndex: 0 });
      },

      setCurrentLessonIndex: (index: number) => {
        set({ currentLessonIndex: index });
      },

      completeLesson: (courseId: string, lessonId: string, score?: number) => {
        const { userProgress, user } = get();
        
        const existingProgress = userProgress.find(
          p => p.courseId === courseId && p.lessonId === lessonId
        );

        const pointsToAdd = score ? Math.floor(score * 2) : 50;

        if (existingProgress) {
          set({
            userProgress: userProgress.map(p =>
              p.courseId === courseId && p.lessonId === lessonId
                ? { ...p, completed: true, score, completedAt: new Date() }
                : p
            ),
            user: user ? { ...user, points: user.points + pointsToAdd } : null
          });
        } else {
          set({
            userProgress: [
              ...userProgress,
              {
                courseId,
                lessonId,
                completed: true,
                score,
                completedAt: new Date()
              }
            ],
            user: user ? { ...user, points: user.points + pointsToAdd } : null
          });
        }

        get().checkAchievements();
      },

      unlockAchievement: (achievementId: string) => {
        const { userAchievements, achievements, user } = get();
        
        if (userAchievements.find(a => a.achievementId === achievementId)) {
          return;
        }

        const achievement = achievements.find(a => a.id === achievementId);
        if (!achievement) return;

        set({
          userAchievements: [
            ...userAchievements,
            {
              achievementId,
              unlockedAt: new Date()
            }
          ],
          user: user ? { ...user, points: user.points + achievement.points } : null
        });
      },

      checkAchievements: () => {
        const { userProgress, courses, userAchievements, user } = get();
        
        if (!user) return;

        if (userProgress.length >= 1 && !userAchievements.find(a => a.achievementId === 'first-lesson')) {
          get().unlockAchievement('first-lesson');
        }

        courses.forEach(course => {
          const completedLessons = userProgress.filter(
            p => p.courseId === course.id && p.completed
          );
          if (completedLessons.length === course.lessons.length && 
              !userAchievements.find(a => a.achievementId === 'course-complete')) {
            get().unlockAchievement('course-complete');
          }
        });

        if (user.points >= 1000 && !userAchievements.find(a => a.achievementId === 'high-scorer')) {
          get().unlockAchievement('high-scorer');
        }
      }
    }),
    {
      name: 'data-analysis-app-storage'
    }
  )
);
