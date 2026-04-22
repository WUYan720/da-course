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

    <!-- 课程信息 -->
    <div class="max-w-7xl mx-auto mb-8">
      <div class="flex items-center mb-4">
        <router-link to="/courses" class="text-indigo-blue hover:underline mr-4">← 返回课程列表</router-link>
        <h2 class="text-3xl font-bold text-ink-black">{{ course?.title }}</h2>
      </div>
      <p class="text-gray-600 mb-6">{{ course?.description }}</p>
      <div class="chinese-border mb-8 pb-2"></div>
    </div>

    <!-- 课程内容 -->
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
      <!-- 左侧章节导航 -->
      <div class="lg:w-1/4 bg-white border border-indigo-blue rounded-lg p-4">
        <h3 class="text-lg font-bold text-ink-black mb-4">章节列表</h3>
        <div class="space-y-2">
          <div v-for="(module, moduleIndex) in course?.modules" :key="module.id" class="mb-4">
            <div class="font-semibold text-indigo-blue mb-2">
              第 {{ moduleIndex + 1 }} 章：{{ module.name }}
            </div>
            <div class="ml-4 space-y-1">
              <div 
                v-for="(lesson, lessonIndex) in module.lessons" 
                :key="lesson.id"
                class="flex items-center py-2 px-3 rounded-md cursor-pointer transition-colors"
                :class="{
                  'bg-indigo-blue text-white': currentLesson?.id === lesson.id,
                  'hover:bg-light-gray': currentLesson?.id !== lesson.id
                }"
                @click="navigateToLesson(course?.id || '', module.id, lesson.id)"
              >
                <span class="mr-2">{{ moduleIndex + 1 }}.{{ lessonIndex + 1 }}</span>
                <span class="flex-1">{{ lesson.title }}</span>
                <span v-if="progressStore.isLessonCompleted(lesson.id)" class="text-green-500">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧学习内容 -->
      <div class="lg:w-3/4 bg-white border border-indigo-blue rounded-lg p-6">
        <div v-if="currentLesson">
          <h3 class="text-2xl font-bold text-ink-black mb-4">{{ currentLesson.title }}</h3>
          <div class="chinese-border mb-6 pb-2"></div>
          <div class="text-gray-600 mb-6">
            {{ currentLesson.content }}
          </div>
          <div class="mb-6">
            <h4 class="text-lg font-semibold text-ink-black mb-2">示例代码</h4>
            <pre class="bg-light-gray p-4 rounded-md overflow-x-auto">{{ currentLesson.codeExample }}</pre>
          </div>
          <div class="flex justify-between items-center">
            <button 
              class="bg-indigo-blue text-white px-4 py-2 rounded-md btn-hover"
              @click="navigateToLesson(course?.id || '', currentModule?.id || '', currentLesson.id)"
            >
              进入编辑器
            </button>
            <button 
              class="bg-green-600 text-white px-4 py-2 rounded-md btn-hover"
              @click="markLessonComplete(currentLesson.id)"
              :disabled="progressStore.isLessonCompleted(currentLesson.id)"
            >
              {{ progressStore.isLessonCompleted(currentLesson.id) ? '已完成' : '标记完成' }}
            </button>
          </div>
        </div>
        <div v-else>
          <p class="text-gray-600">请选择一个小节开始学习</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { courses } from '../data/courses';
import { useProgressStore } from '../stores/progress';

const route = useRoute();
const router = useRouter();
const progressStore = useProgressStore();

const courseId = computed(() => route.params.courseId as string);

const course = computed(() => {
  return courses.find(c => c.id === courseId.value);
});

const currentModule = ref<any>(null);
const currentLesson = ref<any>(null);

onMounted(() => {
  // 初始化当前章节和小节
  if (course.value && course.value.modules.length > 0) {
    currentModule.value = course.value.modules[0];
    if (currentModule.value.lessons.length > 0) {
      currentLesson.value = currentModule.value.lessons[0];
    }
  }
});

const navigateToLesson = (courseId: string, moduleId: string, lessonId: string) => {
  router.push(`/courses/${courseId}/chapters/${moduleId}/lessons/${lessonId}`);
};

const markLessonComplete = (lessonId: string) => {
  progressStore.completeLesson(lessonId);
};
</script>

<style scoped>
/* 页面特定样式 */
</style>
