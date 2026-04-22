// 内容服务，用于从 Cloudflare Workers KV 读取静态内容

// Workers 部署后的 URL，需要根据实际部署情况修改
const WORKER_URL = 'https://python-ai-training-platform.your-account.workers.dev';

// 思维模型类型
export interface ThinkingModel {
  id: string;
  title: string;
  description: string;
  content: string;
}

// 行业争议类型
export interface IndustryControversy {
  id: string;
  title: string;
  description: string;
  pros: string[];
  cons: string[];
  conclusion: string;
}

// 辨析题类型
export interface AnalysisQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

// 项目类型
export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tasks: Task[];
}

// 任务类型
export interface Task {
  id: string;
  title: string;
  description: string;
  dataset?: string;
  hints: string[];
}

/**
 * 从 KV 读取内容
 * @param key 内容键名
 * @returns 内容数据
 */
async function fetchContent<T>(key: string): Promise<T> {
  try {
    const response = await fetch(`${WORKER_URL}/api/content/${key}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch content: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Content fetch error:', error);
    // 返回默认数据作为 fallback
    return getDefaultContent(key) as T;
  }
}

/**
 * 获取默认内容（作为 fallback）
 * @param key 内容键名
 * @returns 默认内容
 */
function getDefaultContent(key: string) {
  // 这里可以返回默认的静态内容
  // 实际部署时，这些内容会存储在 KV 中
  const defaultContent: Record<string, any> = {
    'thinking-models': [
      {
        id: 'model-1',
        title: '数据思维模型',
        description: '理解数据的本质和价值',
        content: '数据是一种资产，通过分析数据可以发现业务洞察...'
      }
    ],
    'industry-controversies': [
      {
        id: 'controversy-1',
        title: '数据隐私 vs 数据分析',
        description: '如何平衡数据利用和隐私保护',
        pros: ['数据驱动决策', '个性化服务'],
        cons: ['隐私泄露风险', '数据滥用'],
        conclusion: '需要建立合理的数据使用规范...'
      }
    ],
    'analysis-questions': [
      {
        id: 'question-1',
        question: '数据分析的核心目标是什么？',
        options: [
          '处理大量数据',
          '发现业务洞察',
          '生成漂亮的图表',
          '使用复杂的算法'
        ],
        correctAnswer: 1,
        explanation: '数据分析的核心目标是发现业务洞察，为决策提供支持...'
      }
    ],
    'projects': [
      {
        id: 'project-1',
        title: '数据基础与环境搭建',
        description: '学习 Python 数据分析的基础环境搭建',
        difficulty: 'beginner',
        tasks: [
          {
            id: 'task-1',
            title: '安装和配置 Python 环境',
            description: '安装 Python 并配置必要的库',
            hints: ['使用 Anaconda 管理环境', '安装 pandas、numpy 等库']
          }
        ]
      }
    ]
  };
  
  return defaultContent[key] || null;
}

/**
 * 获取思维模型列表
 */
export async function getThinkingModels(): Promise<ThinkingModel[]> {
  return fetchContent<ThinkingModel[]>('thinking-models');
}

/**
 * 获取行业争议列表
 */
export async function getIndustryControversies(): Promise<IndustryControversy[]> {
  return fetchContent<IndustryControversy[]>('industry-controversies');
}

/**
 * 获取辨析题列表
 */
export async function getAnalysisQuestions(): Promise<AnalysisQuestion[]> {
  return fetchContent<AnalysisQuestion[]>('analysis-questions');
}

/**
 * 获取项目列表
 */
export async function getProjects(): Promise<Project[]> {
  return fetchContent<Project[]>('projects');
}

/**
 * 获取单个项目详情
 * @param projectId 项目 ID
 */
export async function getProjectById(projectId: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find(project => project.id === projectId) || null;
}
