import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  BookOpen, 
  Pencil, 
  Award,
  ChevronRight, 
  Clock, 
  BarChart3, 
  Code, 
  Database
} from 'lucide-react';
import { useAppStore } from '../store';

type LearningMode = 'learn' | 'exercise' | 'quiz' | 'complete';

const Learn: React.FC = () => {
  const { courseId, lessonIndex } = useParams<{ courseId: string; lessonIndex: string }>();
  const navigate = useNavigate();
  const { courses, currentCourse, completeLesson, userProgress, isAuthenticated, login } = useAppStore();
  
  const course = courses.find(c => c.id === courseId) || currentCourse;
  const index = parseInt(lessonIndex || '0');
  
  if (!course || !course.lessons[index]) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-800">课程内容不存在</h2>
        <button
          onClick={() => navigate('/courses')}
          className="text-blue-600 hover:underline mt-4"
        >
          返回课程列表
        </button>
      </div>
    );
  }

  const lesson = course.lessons[index];
  const [mode, setMode] = useState<LearningMode>('learn');
  const [exerciseAnswers, setExerciseAnswers] = useState<Record<string, string>>({});
  const [exerciseSubmitted, setExerciseSubmitted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const isCompleted = userProgress.find(
    p => p.courseId === course.id && p.lessonId === lesson.id
  )?.completed;

  const handleExerciseAnswer = (exerciseId: string, answer: string) => {
    setExerciseAnswers(prev => ({ ...prev, [exerciseId]: answer }));
  };

  const checkExerciseAnswer = (exerciseId: string, answer: string) => {
    const exercise = lesson.exercises.find(e => e.id === exerciseId);
    if (!exercise) return false;
    if (Array.isArray(exercise.answer)) {
      return exercise.answer.includes(answer);
    }
    return exercise.answer === answer;
  };

  const submitExercises = () => {
    if (!isAuthenticated) {
      alert('请先登录以保存练习结果');
      navigate('/login');
      return;
    }
    setExerciseSubmitted(true);
  };

  const handleQuizAnswer = (questionId: string, answerIndex: number) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };

  const submitQuiz = () => {
    if (!isAuthenticated) {
      alert('请先登录以保存测验成绩和解锁成就');
      navigate('/login');
      return;
    }
    let correct = 0;
    lesson.quiz.forEach(question => {
      if (quizAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    const score = Math.round((correct / lesson.quiz.length) * 100);
    setQuizScore(score);
    setQuizSubmitted(true);
    completeLesson(course.id, lesson.id, score);
    setMode('complete');
  };

  const nextLesson = () => {
    if (index < course.lessons.length - 1) {
      navigate(`/courses/${course.id}/learn/${index + 1}`);
      setMode('learn');
      setExerciseAnswers({});
      setExerciseSubmitted(false);
      setQuizAnswers({});
      setQuizSubmitted(false);
    } else {
      navigate(`/courses/${course.id}`);
    }
  };

  const getModeIcon = (currentMode: LearningMode) => {
    switch (currentMode) {
      case 'learn':
        return <BookOpen className="h-5 w-5 mr-2" />;
      case 'exercise':
        return <Pencil className="h-5 w-5 mr-2" />;
      case 'quiz':
      case 'complete':
        return <Award className="h-5 w-5 mr-2" />;
      default:
        return <BookOpen className="h-5 w-5 mr-2" />;
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate(`/courses/${course.id}`)}
          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          返回课程
        </button>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>第 {index + 1} / {course.lessons.length} 课</span>
          </div>
          {isCompleted && (
            <div className="flex items-center text-green-600">
              <CheckCircle2 className="h-4 w-4 mr-1" />
              <span>已完成</span>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8">
          <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
          <h2 className="text-xl">第 {index + 1} 课: {lesson.title}</h2>
        </div>

        <div className="border-b border-gray-200 bg-gray-50">
          <div className="flex">
            <button
              onClick={() => setMode('learn')}
              className={`flex-1 py-4 px-6 font-medium transition-all flex items-center justify-center gap-2 ${
                mode === 'learn'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-white'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              {getModeIcon('learn')}
              学习
            </button>
            <button
              onClick={() => setMode('exercise')}
              className={`flex-1 py-4 px-6 font-medium transition-all flex items-center justify-center gap-2 ${
                mode === 'exercise'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-white'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              {getModeIcon('exercise')}
              练习
            </button>
            <button
              onClick={() => setMode('quiz')}
              className={`flex-1 py-4 px-6 font-medium transition-all flex items-center justify-center gap-2 ${
                mode === 'quiz' || mode === 'complete'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-white'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              {getModeIcon('quiz')}
              测评
            </button>
          </div>
        </div>

        <div className="p-8">
          {mode === 'learn' && (
            <div className="prose max-w-none space-y-8">
              {lesson.video && (
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <div className="aspect-video relative">
                    <iframe
                      src={lesson.video}
                      title={lesson.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              )}
              <div className="whitespace-pre-line text-gray-800 text-lg leading-relaxed p-6 bg-gray-50 rounded-xl border border-gray-100">
                {lesson.content}
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setMode('exercise')}
                  className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all shadow-lg flex items-center"
                >
                  去练习 <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          )}

          {mode === 'exercise' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Pencil className="h-6 w-6 text-blue-600" />
                练习题
              </h3>
              {lesson.exercises.map((exercise, idx) => (
                <div key={exercise.id} className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-200 transition-colors">
                  <h4 className="font-semibold text-gray-800 mb-4 text-lg">
                    题目 {idx + 1}: {exercise.question}
                  </h4>
                  
                  {exercise.type === 'multiple-choice' && exercise.options && (
                    <div className="space-y-3">
                      {exercise.options.map((option, optIdx) => (
                        <label
                          key={optIdx}
                          className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            exerciseSubmitted
                              ? checkExerciseAnswer(exercise.id, option)
                                ? 'border-green-500 bg-green-50'
                                : exerciseAnswers[exercise.id] === option
                                ? 'border-red-500 bg-red-50'
                                : 'border-gray-200'
                              : exerciseAnswers[exercise.id] === option
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name={`exercise-${exercise.id}`}
                            value={option}
                            checked={exerciseAnswers[exercise.id] === option}
                            onChange={() => handleExerciseAnswer(exercise.id, option)}
                            disabled={exerciseSubmitted}
                            className="mr-3 h-4 w-4"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  )}

                  {exerciseSubmitted && (
                    <div className={`mt-4 p-4 rounded-lg ${
                      checkExerciseAnswer(exercise.id, exerciseAnswers[exercise.id] || '')
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      <p className="font-semibold">
                        {checkExerciseAnswer(exercise.id, exerciseAnswers[exercise.id] || '')
                          ? '✓ 回答正确！'
                          : '✗ 回答错误'}
                      </p>
                      <p className="mt-2">{exercise.explanation}</p>
                    </div>
                  )}
                </div>
              ))}

              {!exerciseSubmitted ? (
                <button
                  onClick={submitExercises}
                  disabled={Object.keys(exerciseAnswers).length !== lesson.exercises.length}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  提交答案
                </button>
              ) : (
                <button
                  onClick={() => setMode('quiz')}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all shadow-lg flex items-center justify-center"
                >
                  继续测评 <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              )}
            </div>
          )}

          {(mode === 'quiz' || mode === 'complete') && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Award className="h-6 w-6 text-blue-600" />
                课堂测验
              </h3>
              
              {mode === 'complete' && (
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-8 text-center shadow-lg">
                  <CheckCircle2 className="h-16 w-16 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold mb-2">恭喜完成！</h4>
                  <p className="text-lg">您的得分: <span className="text-3xl font-bold">{quizScore}%</span></p>
                  <p className="mt-4 text-blue-100">继续努力，解锁更多成就！</p>
                </div>
              )}

              {!quizSubmitted ? (
                <>
                  {lesson.quiz.map((question, idx) => (
                    <div key={question.id} className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-200 transition-colors">
                      <h4 className="font-semibold text-gray-800 mb-4 text-lg">
                        {idx + 1}. {question.question}
                      </h4>
                      <div className="space-y-3">
                        {question.options.map((option, optIdx) => (
                          <label
                            key={optIdx}
                            className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                              quizAnswers[question.id] === optIdx
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-blue-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name={`quiz-${question.id}`}
                              checked={quizAnswers[question.id] === optIdx}
                              onChange={() => handleQuizAnswer(question.id, optIdx)}
                              className="mr-3 h-4 w-4"
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={submitQuiz}
                    disabled={Object.keys(quizAnswers).length !== lesson.quiz.length}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    提交测验
                  </button>
                </>
              ) : (
                <div className="space-y-4">
                  {lesson.quiz.map((question, idx) => {
                    const isCorrect = quizAnswers[question.id] === question.correctAnswer;
                    return (
                      <div
                        key={question.id}
                        className={`border-2 rounded-xl p-6 ${
                          isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                        }`}
                      >
                        <h4 className="font-semibold text-gray-800 mb-2">
                          {isCorrect ? '✓' : '✗'} {idx + 1}. {question.question}
                        </h4>
                        <p className="text-sm text-gray-600">
                          正确答案: {question.options[question.correctAnswer]}
                        </p>
                        <p className="text-sm mt-2 text-gray-700">{question.explanation}</p>
                      </div>
                    );
                  })}

                  <div className="flex gap-4">
                    {index > 0 && (
                      <button
                        onClick={() => navigate(`/courses/${course.id}/learn/${index - 1}`)}
                        className="flex-1 bg-gray-200 text-gray-800 py-4 rounded-xl font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center"
                      >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        上一节课
                      </button>
                    )}
                    {index < course.lessons.length - 1 ? (
                      <button
                        onClick={nextLesson}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all shadow-lg flex items-center justify-center"
                      >
                        下一节课 <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    ) : (
                      <button
                        onClick={() => navigate(`/courses/${course.id}`)}
                        className="flex-1 bg-gradient-to-r from-green-600 to-emerald-700 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-800 transition-all shadow-lg"
                      >
                        完成课程！
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Learn;
