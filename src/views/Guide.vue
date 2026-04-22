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
      <h2 class="text-3xl font-bold text-ink-black mb-4">3步认知学习模式</h2>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        基于认知科学的学习方法，帮助你快速掌握Python数据分析技能
      </p>
    </div>

    <!-- 3步认知学习模式 -->
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <!-- 第一步 -->
      <div class="bg-white border border-indigo-blue rounded-lg p-6 card-hover">
        <div class="chinese-border mb-4 pb-2"></div>
        <div class="text-4xl font-bold text-indigo-blue mb-4">01</div>
        <h3 class="text-xl font-bold text-ink-black mb-2">底层认知</h3>
        <p class="text-gray-600 mb-4">
          建立数据分析的思维模型，理解行业争议，掌握核心概念
        </p>
        <ul class="text-gray-600 space-y-2">
          <li class="flex items-center">
            <span class="w-2 h-2 bg-indigo-blue rounded-full mr-2"></span>
            思维模型建立
          </li>
          <li class="flex items-center">
            <span class="w-2 h-2 bg-indigo-blue rounded-full mr-2"></span>
            行业争议辨析
          </li>
          <li class="flex items-center">
            <span class="w-2 h-2 bg-indigo-blue rounded-full mr-2"></span>
            核心概念理解
          </li>
        </ul>
      </div>

      <!-- 第二步 -->
      <div class="bg-white border border-indigo-blue rounded-lg p-6 card-hover">
        <div class="chinese-border mb-4 pb-2"></div>
        <div class="text-4xl font-bold text-indigo-blue mb-4">02</div>
        <h3 class="text-xl font-bold text-ink-black mb-2">梯度项目实操</h3>
        <p class="text-gray-600 mb-4">
          通过10个梯度项目，从基础到进阶，实践数据分析技能
        </p>
        <ul class="text-gray-600 space-y-2">
          <li class="flex items-center">
            <span class="w-2 h-2 bg-indigo-blue rounded-full mr-2"></span>
            基础数据处理
          </li>
          <li class="flex items-center">
            <span class="w-2 h-2 bg-indigo-blue rounded-full mr-2"></span>
            数据可视化
          </li>
          <li class="flex items-center">
            <span class="w-2 h-2 bg-indigo-blue rounded-full mr-2"></span>
            机器学习应用
          </li>
        </ul>
      </div>

      <!-- 第三步 -->
      <div class="bg-white border border-indigo-blue rounded-lg p-6 card-hover">
        <div class="chinese-border mb-4 pb-2"></div>
        <div class="text-4xl font-bold text-indigo-blue mb-4">03</div>
        <h3 class="text-xl font-bold text-ink-black mb-2">AI错题倒逼</h3>
        <p class="text-gray-600 mb-4">
          通过AI陪练，针对错题进行深度分析，强化学习效果
        </p>
        <ul class="text-gray-600 space-y-2">
          <li class="flex items-center">
            <span class="w-2 h-2 bg-indigo-blue rounded-full mr-2"></span>
            代码纠错
          </li>
          <li class="flex items-center">
            <span class="w-2 h-2 bg-indigo-blue rounded-full mr-2"></span>
            思路点拨
          </li>
          <li class="flex items-center">
            <span class="w-2 h-2 bg-indigo-blue rounded-full mr-2"></span>
            深度解析
          </li>
        </ul>
      </div>
    </div>

    <!-- 学习流程图 -->
    <div class="max-w-7xl mx-auto mb-16">
      <div class="bg-white border border-indigo-blue rounded-lg p-8">
        <h3 class="text-2xl font-bold text-ink-black mb-6 text-center">学习流程</h3>
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-center mb-4 md:mb-0">
            <div class="w-16 h-16 bg-indigo-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-2 mx-auto">1</div>
            <p class="text-gray-600">完成底层认知模块</p>
          </div>
          <div class="hidden md:block text-indigo-blue text-2xl">→</div>
          <div class="block md:hidden text-indigo-blue text-2xl">↓</div>
          <div class="text-center mb-4 md:mb-0">
            <div class="w-16 h-16 bg-indigo-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-2 mx-auto">2</div>
            <p class="text-gray-600">开始梯度项目学习</p>
          </div>
          <div class="hidden md:block text-indigo-blue text-2xl">→</div>
          <div class="block md:hidden text-indigo-blue text-2xl">↓</div>
          <div class="text-center mb-4 md:mb-0">
            <div class="w-16 h-16 bg-indigo-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-2 mx-auto">3</div>
            <p class="text-gray-600">AI错题反馈学习</p>
          </div>
          <div class="hidden md:block text-indigo-blue text-2xl">→</div>
          <div class="block md:hidden text-indigo-blue text-2xl">↓</div>
          <div class="text-center">
            <div class="w-16 h-16 bg-indigo-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-2 mx-auto">4</div>
            <p class="text-gray-600">掌握数据分析技能</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 开始学习按钮 -->
    <div class="max-w-7xl mx-auto text-center">
      <router-link to="/courses" class="inline-block bg-indigo-blue text-white px-8 py-3 rounded-md btn-hover text-lg font-medium">
        开始学习之旅
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
// 学习引导页面逻辑
</script>

<style scoped>
/* 页面特定样式 */
</style>