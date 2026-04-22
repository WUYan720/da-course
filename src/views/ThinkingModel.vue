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
          <router-link to="/thinking-model" class="text-indigo-blue hover:text-ink-black transition-colors font-medium">思维模型</router-link>
        </div>
      </div>
    </nav>

    <!-- 主标题 -->
    <div class="max-w-7xl mx-auto mb-16 text-center">
      <div class="chinese-border mx-auto w-24 mb-6"></div>
      <h2 class="text-4xl font-bold text-ink-black mb-4">数据分析思维模型</h2>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        建立正确的数据分析思维框架，理解行业争议，通过辨析题巩固知识
      </p>
    </div>

    <!-- 思维模型部分 -->
    <div class="max-w-7xl mx-auto mb-20">
      <h3 class="text-2xl font-bold text-ink-black mb-8 text-center">思维模型框架</h3>
      <div class="bg-white border border-indigo-blue rounded-lg p-8">
        <div class="space-y-8">
          <!-- 思维模型1 -->
          <div class="thinking-model-item">
            <h4 class="text-xl font-bold text-indigo-blue mb-4">1. 数据认知思维</h4>
            <div class="pl-4 border-l-4 border-indigo-blue">
              <p class="text-gray-700 mb-2">
                理解数据的本质、来源和质量，建立对数据的基本认知
              </p>
              <ul class="list-disc pl-6 text-gray-600 space-y-1">
                <li>数据类型与结构识别</li>
                <li>数据质量评估与清洗</li>
                <li>数据来源可靠性分析</li>
                <li>数据时效性与完整性判断</li>
              </ul>
            </div>
          </div>

          <!-- 思维模型2 -->
          <div class="thinking-model-item">
            <h4 class="text-xl font-bold text-indigo-blue mb-4">2. 问题定义思维</h4>
            <div class="pl-4 border-l-4 border-indigo-blue">
              <p class="text-gray-700 mb-2">
                明确分析目标，定义问题边界，确保分析方向正确
              </p>
              <ul class="list-disc pl-6 text-gray-600 space-y-1">
                <li>业务问题转化为数据分析问题</li>
                <li>分析目标与指标体系设计</li>
                <li>问题边界与假设提出</li>
                <li>分析范围与深度确定</li>
              </ul>
            </div>
          </div>

          <!-- 思维模型3 -->
          <div class="thinking-model-item">
            <h4 class="text-xl font-bold text-indigo-blue mb-4">3. 数据处理思维</h4>
            <div class="pl-4 border-l-4 border-indigo-blue">
              <p class="text-gray-700 mb-2">
                掌握数据处理技巧，确保数据质量和可用性
              </p>
              <ul class="list-disc pl-6 text-gray-600 space-y-1">
                <li>数据清洗与预处理</li>
                <li>特征工程与变量转换</li>
                <li>数据集成与融合</li>
                <li>数据标准化与归一化</li>
              </ul>
            </div>
          </div>

          <!-- 思维模型4 -->
          <div class="thinking-model-item">
            <h4 class="text-xl font-bold text-indigo-blue mb-4">4. 分析方法思维</h4>
            <div class="pl-4 border-l-4 border-indigo-blue">
              <p class="text-gray-700 mb-2">
                选择合适的分析方法，提取数据中的有价值信息
              </p>
              <ul class="list-disc pl-6 text-gray-600 space-y-1">
                <li>描述性分析与探索性分析</li>
                <li>统计推断与假设检验</li>
                <li>相关性分析与因果分析</li>
                <li>预测建模与机器学习</li>
              </ul>
            </div>
          </div>

          <!-- 思维模型5 -->
          <div class="thinking-model-item">
            <h4 class="text-xl font-bold text-indigo-blue mb-4">5. 可视化思维</h4>
            <div class="pl-4 border-l-4 border-indigo-blue">
              <p class="text-gray-700 mb-2">
                有效展示分析结果，提升数据的可读性和说服力
              </p>
              <ul class="list-disc pl-6 text-gray-600 space-y-1">
                <li>图表类型选择与设计</li>
                <li>数据可视化原则与最佳实践</li>
                <li>交互式可视化设计</li>
                <li>故事讲述与数据叙事</li>
              </ul>
            </div>
          </div>

          <!-- 思维模型6 -->
          <div class="thinking-model-item">
            <h4 class="text-xl font-bold text-indigo-blue mb-4">6. 业务洞察思维</h4>
            <div class="pl-4 border-l-4 border-indigo-blue">
              <p class="text-gray-700 mb-2">
                将分析结果转化为业务洞察，指导决策制定
              </p>
              <ul class="list-disc pl-6 text-gray-600 space-y-1">
                <li>数据驱动决策框架</li>
                <li>洞察提炼与优先级排序</li>
                <li>风险评估与不确定性分析</li>
                <li>行动建议与落地策略</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 行业争议部分 -->
    <div class="max-w-7xl mx-auto mb-20">
      <h3 class="text-2xl font-bold text-ink-black mb-8 text-center">行业争议</h3>
      <div class="bg-white border border-indigo-blue rounded-lg p-8">
        <div class="space-y-8">
          <!-- 争议1 -->
          <div class="controversy-item">
            <h4 class="text-xl font-bold text-indigo-blue mb-4">1. 数据驱动 vs 经验驱动</h4>
            <div class="pl-4 border-l-4 border-indigo-blue">
              <p class="text-gray-700 mb-2">
                数据驱动决策与传统经验驱动决策的优缺点对比
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div class="bg-light-gray p-4 rounded-md">
                  <h5 class="font-semibold mb-2">数据驱动的优势</h5>
                  <ul class="list-disc pl-6 text-gray-600 space-y-1">
                    <li>客观理性，减少主观偏差</li>
                    <li>基于事实，提高决策准确性</li>
                    <li>可量化，便于评估和优化</li>
                  </ul>
                </div>
                <div class="bg-light-gray p-4 rounded-md">
                  <h5 class="font-semibold mb-2">经验驱动的优势</h5>
                  <ul class="list-disc pl-6 text-gray-600 space-y-1">
                    <li>快速决策，适应变化</li>
                    <li>考虑隐性因素和上下文</li>
                    <li>处理复杂和不确定情况</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 争议2 -->
          <div class="controversy-item">
            <h4 class="text-xl font-bold text-indigo-blue mb-4">2. 大数据 vs 小数据</h4>
            <div class="pl-4 border-l-4 border-indigo-blue">
              <p class="text-gray-700 mb-2">
                大规模数据与高质量小数据的价值对比
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div class="bg-light-gray p-4 rounded-md">
                  <h5 class="font-semibold mb-2">大数据的优势</h5>
                  <ul class="list-disc pl-6 text-gray-600 space-y-1">
                    <li>发现更多模式和关联</li>
                    <li>提高预测准确性</li>
                    <li>支持复杂分析和机器学习</li>
                  </ul>
                </div>
                <div class="bg-light-gray p-4 rounded-md">
                  <h5 class="font-semibold mb-2">小数据的优势</h5>
                  <ul class="list-disc pl-6 text-gray-600 space-y-1">
                    <li>数据质量更高，更精准</li>
                    <li>处理速度快，成本低</li>
                    <li>更容易理解和解释</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 争议3 -->
          <div class="controversy-item">
            <h4 class="text-xl font-bold text-indigo-blue mb-4">3. 模型复杂度 vs 可解释性</h4>
            <div class="pl-4 border-l-4 border-indigo-blue">
              <p class="text-gray-700 mb-2">
                复杂模型的预测能力与简单模型的可解释性之间的权衡
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div class="bg-light-gray p-4 rounded-md">
                  <h5 class="font-semibold mb-2">复杂模型的优势</h5>
                  <ul class="list-disc pl-6 text-gray-600 space-y-1">
                    <li>更高的预测准确性</li>
                    <li>处理非线性关系</li>
                    <li>自动特征提取</li>
                  </ul>
                </div>
                <div class="bg-light-gray p-4 rounded-md">
                  <h5 class="font-semibold mb-2">简单模型的优势</h5>
                  <ul class="list-disc pl-6 text-gray-600 space-y-1">
                    <li>易于理解和解释</li>
                    <li>训练和部署成本低</li>
                    <li>更容易调试和维护</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 辨析题部分 -->
    <div class="max-w-7xl mx-auto mb-20">
      <h3 class="text-2xl font-bold text-ink-black mb-8 text-center">辨析题</h3>
      <div class="bg-white border border-indigo-blue rounded-lg p-8">
        <div class="space-y-8">
          <!-- 辨析题1 -->
          <div class="quiz-item">
            <h4 class="text-xl font-bold text-indigo-blue mb-4">1. 数据越多越好，对吗？</h4>
            <div class="pl-4 border-l-4 border-indigo-blue">
              <p class="text-gray-700 mb-4">
                请思考：数据量的增加是否总是带来更好的分析结果？
              </p>
              <div class="flex space-x-4">
                <button class="bg-indigo-blue text-white px-4 py-2 rounded-md btn-hover" @click="checkAnswer(1, 'yes')">
                  是
                </button>
                <button class="bg-indigo-blue text-white px-4 py-2 rounded-md btn-hover" @click="checkAnswer(1, 'no')">
                  否
                </button>
              </div>
              <div v-if="answers[1]" class="mt-4 p-4 rounded-md" :class="answers[1] === 'correct' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'">
                <p v-if="answers[1] === 'correct'">
                  正确！数据质量比数据数量更重要。低质量的数据即使数量庞大，也可能导致错误的分析结果。
                </p>
                <p v-else>
                  错误。数据量的增加并不总是带来更好的分析结果。关键在于数据的质量和相关性。低质量的数据会产生误导性的分析结果。
                </p>
              </div>
            </div>
          </div>

          <!-- 辨析题2 -->
          <div class="quiz-item">
            <h4 class="text-xl font-bold text-indigo-blue mb-4">2. 相关性等于因果关系，对吗？</h4>
            <div class="pl-4 border-l-4 border-indigo-blue">
              <p class="text-gray-700 mb-4">
                请思考：两个变量之间的相关性是否意味着它们之间存在因果关系？
              </p>
              <div class="flex space-x-4">
                <button class="bg-indigo-blue text-white px-4 py-2 rounded-md btn-hover" @click="checkAnswer(2, 'yes')">
                  是
                </button>
                <button class="bg-indigo-blue text-white px-4 py-2 rounded-md btn-hover" @click="checkAnswer(2, 'no')">
                  否
                </button>
              </div>
              <div v-if="answers[2]" class="mt-4 p-4 rounded-md" :class="answers[2] === 'correct' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'">
                <p v-if="answers[2] === 'correct'">
                  正确！相关性不等于因果关系。两个变量可能同时变化，但这并不意味着一个变量导致了另一个变量的变化。
                </p>
                <p v-else>
                  错误。相关性只是表示两个变量之间存在某种关联，但并不意味着它们之间存在因果关系。要确定因果关系，需要进行更严格的实验设计和分析。
                </p>
              </div>
            </div>
          </div>

          <!-- 辨析题3 -->
          <div class="quiz-item">
            <h4 class="text-xl font-bold text-indigo-blue mb-4">3. 机器学习模型总是比传统统计方法更好，对吗？</h4>
            <div class="pl-4 border-l-4 border-indigo-blue">
              <p class="text-gray-700 mb-4">
                请思考：机器学习模型是否在所有情况下都优于传统统计方法？
              </p>
              <div class="flex space-x-4">
                <button class="bg-indigo-blue text-white px-4 py-2 rounded-md btn-hover" @click="checkAnswer(3, 'yes')">
                  是
                </button>
                <button class="bg-indigo-blue text-white px-4 py-2 rounded-md btn-hover" @click="checkAnswer(3, 'no')">
                  否
                </button>
              </div>
              <div v-if="answers[3]" class="mt-4 p-4 rounded-md" :class="answers[3] === 'correct' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'">
                <p v-if="answers[3] === 'correct'">
                  正确！机器学习模型并不总是更好。在数据量小、需要可解释性或问题相对简单的情况下，传统统计方法可能更合适。
                </p>
                <p v-else>
                  错误。机器学习模型并不总是优于传统统计方法。选择哪种方法取决于具体问题、数据特点和业务需求。对于需要可解释性的场景，传统统计方法可能更为合适。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const answers = ref<Record<number, 'correct' | 'incorrect' | null>>({});

const checkAnswer = (questionId: number, answer: 'yes' | 'no') => {
  // 正确答案：1. 否, 2. 否, 3. 否
  const correctAnswers: Record<number, 'yes' | 'no'> = {
    1: 'no',
    2: 'no',
    3: 'no'
  };

  if (answer === correctAnswers[questionId]) {
    answers.value[questionId] = 'correct';
  } else {
    answers.value[questionId] = 'incorrect';
  }
};
</script>

<style scoped>
/* 页面特定样式 */
</style>
