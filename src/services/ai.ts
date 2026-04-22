// AI 服务接口
export interface AIMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface AIResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    index: number;
    message: AIMessage;
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

// AI API 基础 URL
const AI_API_URL = import.meta.env.VITE_AI_API_URL || 'http://localhost:8787/api/ai';

/**
 * 调用 AI 服务
 * @param messages 用户消息列表
 * @returns AI 响应
 */
export async function callAI(messages: AIMessage[]): Promise<AIResponse> {
  try {
    const response = await fetch(AI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    });

    if (!response.ok) {
      throw new Error(`AI API 请求失败: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('AI 服务调用失败:', error);
    throw error;
  }
}

/**
 * 获取思路点拨
 * @param userMessage 用户问题
 * @returns AI 响应
 */
export async function getHint(userMessage: string): Promise<AIResponse> {
  return callAI([
    {
      role: 'user',
      content: `我卡住了，${userMessage}`,
    },
  ]);
}

/**
 * 获取代码纠错
 * @param code 用户代码
 * @param errorMessage 错误信息
 * @returns AI 响应
 */
export async function getCodeFix(code: string, errorMessage: string): Promise<AIResponse> {
  return callAI([
    {
      role: 'user',
      content: `我的代码报错了：\n\n${code}\n\n错误信息：${errorMessage}`,
    },
  ]);
}

/**
 * 获取数据分析建议
 * @param dataDescription 数据描述
 * @returns AI 响应
 */
export async function getAnalysisSuggestion(dataDescription: string): Promise<AIResponse> {
  return callAI([
    {
      role: 'user',
      content: `我有一个数据集：${dataDescription}\n\n我应该如何分析这个数据集？`,
    },
  ]);
}
