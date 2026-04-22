<template>
  <div class="pyodide-test">
    <h1 class="text-2xl font-bold mb-4">Pyodide 测试</h1>
    
    <div class="mb-4">
      <label class="block mb-2 font-medium">Python 代码</label>
      <textarea 
        v-model="code" 
        class="w-full h-64 p-4 border rounded-lg" 
        placeholder="输入 Python 代码..."
      ></textarea>
    </div>
    
    <button 
      @click="runCode" 
      class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      :disabled="isLoading"
    >
      {{ isLoading ? '运行中...' : '运行代码' }}
    </button>
    
    <div v-if="output" class="mt-4">
      <h2 class="text-lg font-semibold mb-2">输出</h2>
      <pre class="bg-gray-100 p-4 rounded-lg">{{ output }}</pre>
    </div>
    
    <div v-if="error" class="mt-4">
      <h2 class="text-lg font-semibold mb-2 text-red-500">错误</h2>
      <pre class="bg-red-100 p-4 rounded-lg">{{ error }}</pre>
    </div>
    
    <div v-if="charts.length > 0" class="mt-4">
      <h2 class="text-lg font-semibold mb-2">图表</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="(chart, index) in charts" :key="index" class="border rounded-lg p-2">
          <img :src="chart" class="w-full h-auto" alt="Chart">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { pyodideService } from '../services/pyodide';

const code = ref(`
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 创建示例数据
data = {
    'x': np.linspace(0, 10, 100),
    'y': np.sin(np.linspace(0, 10, 100))
}
df = pd.DataFrame(data)

# 打印数据
print("数据前5行:")
print(df.head())

# 绘制图表
plt.figure(figsize=(10, 6))
plt.plot(df['x'], df['y'], label='正弦曲线')
plt.title('正弦函数图像')
plt.xlabel('x')
plt.ylabel('sin(x)')
plt.legend()
plt.grid(True)
plt.show()
`);

const output = ref('');
const error = ref('');
const charts = ref<string[]>([]);

const isLoading = computed(() => pyodideService.isLoadingStatus());

const runCode = async () => {
  output.value = '';
  error.value = '';
  charts.value = [];
  
  try {
    const result = await pyodideService.runCode(code.value);
    output.value = result.output;
    error.value = result.error;
    if (result.charts) {
      charts.value = result.charts;
    }
  } catch (err: any) {
    error.value = err.message;
  }
};
</script>

<style scoped>
.pyodide-test {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>