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

    <!-- 课程导航 -->
    <div class="max-w-7xl mx-auto mb-8">
      <div class="flex items-center mb-4">
        <router-link :to="`/courses/${courseId}`" class="text-indigo-blue hover:underline mr-4">← 返回课程</router-link>
        <h2 class="text-3xl font-bold text-ink-black">{{ course?.title }}</h2>
      </div>
      <h3 class="text-xl font-semibold text-indigo-blue mb-6">{{ currentLesson?.title }}</h3>
      <div class="chinese-border mb-8 pb-2"></div>
    </div>

    <!-- 学习内容 -->
    <div class="max-w-7xl mx-auto bg-white border border-indigo-blue rounded-lg p-6 mb-8">
      <div class="text-gray-600 mb-6">
        {{ currentLesson?.content }}
      </div>
    </div>

    <!-- 代码编辑器 -->
    <div class="max-w-7xl mx-auto bg-white border border-indigo-blue rounded-lg p-6">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-bold text-ink-black">代码编辑器</h3>
        <div class="flex space-x-2">
          <button 
            class="bg-indigo-blue text-white px-4 py-2 rounded-md btn-hover"
            @click="runCode"
            :disabled="isRunning"
          >
            {{ isRunning ? '运行中...' : '运行代码' }}
          </button>
          <button 
            class="bg-gray-200 text-ink-black px-4 py-2 rounded-md btn-hover"
            @click="copyCode"
          >
            复制代码
          </button>
        </div>
      </div>
      
      <!-- 代码编辑区域 -->
      <div class="mb-4">
        <textarea 
          v-model="code" 
          class="w-full h-80 bg-light-gray p-4 rounded-md font-mono text-sm"
          placeholder="在此输入Python代码..."
        ></textarea>
      </div>
      
      <!-- 运行结果 -->
      <div class="mt-6">
        <h4 class="text-lg font-semibold text-ink-black mb-2">运行结果</h4>
        <div class="bg-white border border-light-gray rounded-md p-4 min-h-[200px]">
          <pre v-if="output" class="text-gray-600">{{ output }}</pre>
          <pre v-else-if="error" class="text-red-600">{{ error }}</pre>
          <p v-else class="text-gray-400">运行代码以查看结果</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { courses } from '../data/courses';
import { pyodideService } from '../services/pyodide';
import { useProgressStore } from '../stores/progress';

const route = useRoute();
const router = useRouter();
const progressStore = useProgressStore();

const courseId = computed(() => route.params.courseId as string);
const chapterId = computed(() => route.params.chapterId as string);
const lessonId = computed(() => route.params.lessonId as string);

const course = computed(() => {
  return courses.find(c => c.id === courseId.value);
});

const currentLesson = computed(() => {
  if (!course.value) return null;
  
  for (const module of course.value.modules) {
    const lesson = module.lessons.find(l => l.id === lessonId.value);
    if (lesson) return lesson;
  }
  return null;
});

const code = ref('');
const output = ref('');
const error = ref('');
const isRunning = ref(false);

onMounted(() => {
  // 初始化代码编辑器内容
  if (currentLesson.value) {
    code.value = currentLesson.value.codeExample;
  }
  
  // 更新当前学习位置
  if (courseId.value && chapterId.value && lessonId.value) {
    progressStore.updateCurrentPosition(courseId.value, chapterId.value, lessonId.value);
  }
});

const runCode = async () => {
  if (!code.value) return;
  
  isRunning.value = true;
  output.value = '';
  error.value = '';
  
  try {
    const result = await pyodideService.runCode(code.value);
    output.value = result.output;
    error.value = result.error;
  } catch (err: any) {
    error.value = err.message;
  } finally {
    isRunning.value = false;
  }
};

const copyCode = () => {
  navigator.clipboard.writeText(code.value).then(() => {
    alert('代码已复制到剪贴板');
  });
};
</script>

<style scoped>
/* 页面特定样式 */
</style>
