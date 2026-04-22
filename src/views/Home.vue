<template>
  <div class="min-h-screen bg-rice-white py-12 px-4 sm:px-6 lg:px-8">
    <!-- 导航栏 -->
    <nav class="mb-12">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold text-indigo-blue">Python数据分析学习平台</h1>
        <div class="flex space-x-4">
          <router-link to="/" class="text-indigo-blue hover:text-ink-black transition-colors">首页</router-link>
          <router-link to="/guide" class="text-indigo-blue hover:text-ink-black transition-colors">学习引导</router-link>
          <router-link to="/courses" class="text-indigo-blue hover:text-ink-black transition-colors">课程</router-link>
        </div>
      </div>
    </nav>

    <!-- 主标题 -->
    <div class="max-w-7xl mx-auto mb-16 text-center">
      <div class="chinese-border mx-auto w-24 mb-6"></div>
      <h2 class="text-4xl font-bold text-ink-black mb-4">Python数据分析AI训练平台</h2>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <router-link to="/guide" class="bg-indigo-blue text-white px-6 py-3 rounded-md btn-hover text-lg font-medium">
          了解学习模式
        </router-link>
        <router-link to="/courses" class="border border-indigo-blue text-indigo-blue px-6 py-3 rounded-md hover:bg-indigo-blue hover:text-white transition-colors text-lg font-medium">
          开始学习
        </router-link>
      </div>
    </div>

    <!-- 核心功能 -->
    <div class="max-w-7xl mx-auto mb-16">
      <h3 class="text-2xl font-bold text-ink-black mb-8 text-center">核心功能</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- 功能1 -->
        <div class="bg-white border border-indigo-blue rounded-lg p-6 card-hover">
          <div class="chinese-border mb-4 pb-2"></div>
          <h4 class="text-lg font-bold text-ink-black mb-2">10个梯度项目</h4>
          <p class="text-gray-600">
            从基础到进阶，涵盖数据处理、可视化、机器学习等多个领域
          </p>
        </div>
        
        <!-- 功能2 -->
        <div class="bg-white border border-indigo-blue rounded-lg p-6 card-hover">
          <div class="chinese-border mb-4 pb-2"></div>
          <h4 class="text-lg font-bold text-ink-black mb-2">AI陪练</h4>
          <p class="text-gray-600">
            智能代码纠错、思路点拨，针对错题进行深度分析
          </p>
        </div>
        
        <!-- 功能3 -->
        <div class="bg-white border border-indigo-blue rounded-lg p-6 card-hover">
          <div class="chinese-border mb-4 pb-2"></div>
          <h4 class="text-lg font-bold text-ink-black mb-2">在线代码运行</h4>
          <p class="text-gray-600">
            无需安装环境，浏览器端直接运行Python代码
          </p>
        </div>
        
        <!-- 功能4 -->
        <div class="bg-white border border-indigo-blue rounded-lg p-6 card-hover">
          <div class="chinese-border mb-4 pb-2"></div>
          <h4 class="text-lg font-bold text-ink-black mb-2">免费资源</h4>
          <p class="text-gray-600">
            完全基于Cloudflare免费套餐，零成本使用
          </p>
        </div>
      </div>
    </div>

    <!-- 学习模式 -->
    <div class="max-w-7xl mx-auto mb-16">
      <div class="bg-white border border-indigo-blue rounded-lg p-8">
        <h3 class="text-2xl font-bold text-ink-black mb-6 text-center">学习模式</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- 模式1 -->
          <div class="text-center">
            <div class="w-16 h-16 bg-indigo-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">1</div>
            <h4 class="text-lg font-bold text-ink-black mb-2">底层认知</h4>
            <p class="text-gray-600">
              建立数据分析思维模型，理解行业争议，掌握核心概念
            </p>
          </div>
          
          <!-- 模式2 -->
          <div class="text-center">
            <div class="w-16 h-16 bg-indigo-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">2</div>
            <h4 class="text-lg font-bold text-ink-black mb-2">梯度项目实操</h4>
            <p class="text-gray-600">
              通过10个梯度项目，从基础到进阶，实践数据分析技能
            </p>
          </div>
          
          <!-- 模式3 -->
          <div class="text-center">
            <div class="w-16 h-16 bg-indigo-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">3</div>
            <h4 class="text-lg font-bold text-ink-black mb-2">AI错题倒逼</h4>
            <p class="text-gray-600">
              通过AI陪练，针对错题进行深度分析，强化学习效果
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 开始学习 -->
    <div class="max-w-7xl mx-auto text-center">
      <div class="bg-indigo-blue text-white rounded-lg p-8">
        <h3 class="text-2xl font-bold mb-4">准备好开始你的学习之旅了吗？</h3>
        <p class="mb-6">
          加入我们，从零基础到数据分析专家
        </p>
        <router-link to="/courses" class="bg-white text-indigo-blue px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-lg font-medium inline-block">
          开始学习
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
/* 页面特定样式 */
</style>
