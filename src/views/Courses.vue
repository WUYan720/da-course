<template>
  <div class="min-h-screen bg-rice-white py-12 px-4 sm:px-6 lg:px-8">
    <!-- 导航栏 -->
    <nav class="mb-12">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold text-indigo-blue">Python数据分析学习平台</h1>
        <div class="flex space-x-4">
          <router-link to="/" class="text-indigo-blue hover:text-ink-black transition-colors">首页</router-link>
          <router-link to="/courses" class="text-indigo-blue hover:text-ink-black transition-colors">课程</router-link>
        </div>
      </div>
    </nav>

    <!-- 页面标题 -->
    <div class="max-w-7xl mx-auto mb-12">
      <h2 class="text-3xl font-bold text-ink-black mb-4">课程列表</h2>
      <div class="chinese-border mb-6 pb-2"></div>
    </div>

    <!-- 课程卡片 -->
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="course in courses" 
        :key="course.id"
        class="bg-white border border-indigo-blue rounded-lg p-6 card-hover"
        @click="navigateToCourse(course.id)"
      >
        <h3 class="text-xl font-bold text-ink-black mb-2">{{ course.title }}</h3>
        <p class="text-gray-600 mb-4">{{ course.description }}</p>
        <div class="flex justify-between items-center mb-4">
          <span class="text-sm text-indigo-blue">
            {{ course.modules.length }} 章节
          </span>
          <span class="text-sm text-gray-500">
            {{ getTotalLessons(course) }} 小节
          </span>
        </div>
        <div class="progress-bar mb-4">
          <div class="progress-bar-fill" :style="{ width: getCourseProgress(course.id) + '%' }"></div>
        </div>
        <button class="w-full bg-indigo-blue text-white px-4 py-2 rounded-md btn-hover">
          查看课程
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { courses } from '../data/courses';
import { useRouter } from 'vue-router';
import { useProgressStore } from '../stores/progress';

const router = useRouter();
const progressStore = useProgressStore();

const navigateToCourse = (courseId: string) => {
  router.push(`/courses/${courseId}`);
};

const getTotalLessons = (course: any) => {
  return course.modules.reduce((total: number, module: any) => total + module.lessons.length, 0);
};

const getCourseProgress = (courseId: string) => {
  // 计算课程的完成进度
  const course = courses.find(c => c.id === courseId);
  if (!course) return 0;
  
  const totalLessons = getTotalLessons(course);
  if (totalLessons === 0) return 0;
  
  // 计算已完成的小节数
  let completedCount = 0;
  course.modules.forEach((module: any) => {
    module.lessons.forEach((lesson: any) => {
      if (progressStore.isLessonCompleted(lesson.id)) {
        completedCount++;
      }
    });
  });
  
  return Math.round((completedCount / totalLessons) * 100);
};
</script>

<style scoped>
/* 页面特定样式 */
</style>
