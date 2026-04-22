// API 服务，用于与 Cloudflare Workers 通信

// Workers 部署后的 URL，需要根据实际部署情况修改
const WORKER_URL = 'https://python-ai-training-platform.your-account.workers.dev';

// AI 聊天消息类型
export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// AI 响应类型
export interface AIResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    index: number;
    message: ChatMessage;
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

/**
 * 发送 AI 请求
 * @param messages 聊天消息数组
 * @returns AI 响应
 */
export async function sendAIRequest(messages: ChatMessage[]): Promise<AIResponse> {
  try {
    const response = await fetch(WORKER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    });

    if (!response.ok) {
      throw new Error(`AI 请求失败: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('AI 请求错误:', error);
    throw error;
  }
}

/**
 * 获取 AI 思路点拨
 * @param userMessage 用户问题
 * @returns AI 响应内容
 */
export async function getAIGuidance(userMessage: string): Promise<string> {
  const messages: ChatMessage = {
    role: 'user',
    content: userMessage,
  };

  const response = await sendAIRequest([messages]);
  return response.choices[0].message.content;
}

/**
 * 获取 AI 代码纠错
 * @param code 用户代码
 * @param errorMessage 错误信息
 * @returns AI 响应内容
 */
export async function getCodeCorrection(code: string, errorMessage: string): Promise<string> {
  const messages: ChatMessage = {
    role: 'user',
    content: `我的代码报错了:\n\n${code}\n\n错误信息:\n${errorMessage}\n\n请帮我分析错误原因并告诉我如何修复。`,
  };

  const response = await sendAIRequest([messages]);
  return response.choices[0].message.content;
}
