export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  lessons: Lesson[];
  image: string;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  video?: string; // 视频 URL
  exercises: Exercise[];
  quiz: QuizQuestion[];
}

export interface Exercise {
  id: string;
  question: string;
  type: 'multiple-choice' | 'short-answer';
  options?: string[];
  answer: string | string[];
  explanation: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'true-false';
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface UserProgress {
  courseId: string;
  lessonId: string;
  completed: boolean;
  score?: number;
  completedAt?: Date;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  type: 'completion' | 'streak' | 'score' | 'exploration';
  requirement: number;
  points: number;
}

export interface UserAchievement {
  achievementId: string;
  unlockedAt: Date;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  points: number;
  achievements: UserAchievement[];
  progress: UserProgress[];
}
