// LocalStorage封装工具

// 存储键名常量
const STORAGE_KEYS = {
  LEARNING_PROGRESS: 'python-learning-progress',
  CODE_DRAFTS: 'python-code-drafts',
  CHAT_HISTORY: 'python-chat-history',
};

// 类型定义
export interface ProjectProgress {
  code: string;
  completed: boolean;
  lastUpdated: number;
}

export interface CodeDraft {
  id: string;
  content: string;
  lastUpdated: number;
  projectId?: string;
  lessonId?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
}

export interface ChatHistory {
  id: string;
  messages: ChatMessage[];
  lastUpdated: number;
  projectId?: string;
  lessonId?: string;
}

// 检查LocalStorage容量
const checkStorageCapacity = (): boolean => {
  try {
    // 测试LocalStorage是否可用
    const testKey = '__storage_test__';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};

// 估算存储大小
const estimateStorageSize = (data: any): number => {
  return new Blob([JSON.stringify(data)]).size;
};

// 清理旧数据以释放空间
const cleanupOldData = (): void => {
  try {
    // 按照最后更新时间排序，清理最旧的数据
    const allKeys = Object.values(STORAGE_KEYS);
    const dataMap: Record<string, { size: number; lastUpdated: number }> = {};

    allKeys.forEach(key => {
      const data = localStorage.getItem(key);
      if (data) {
        try {
          const parsed = JSON.parse(data);
          const size = estimateStorageSize(parsed);
          // 计算最后更新时间
          let lastUpdated = 0;
          if (key === STORAGE_KEYS.CODE_DRAFTS) {
            lastUpdated = Math.max(...Object.values(parsed).map((draft: CodeDraft) => draft.lastUpdated));
          } else if (key === STORAGE_KEYS.CHAT_HISTORY) {
            lastUpdated = Math.max(...Object.values(parsed).map((chat: ChatHistory) => chat.lastUpdated));
          } else if (key === STORAGE_KEYS.LEARNING_PROGRESS) {
            lastUpdated = Date.now();
          }
          dataMap[key] = { size, lastUpdated };
        } catch (error) {
          // 解析失败，删除该数据
          localStorage.removeItem(key);
        }
      }
    });

    // 按最后更新时间排序，清理最旧的数据
    const sortedKeys = Object.keys(dataMap).sort((a, b) => dataMap[a].lastUpdated - dataMap[b].lastUpdated);
    
    // 清理最旧的数据，直到有足够空间
    for (const key of sortedKeys) {
      if (!checkStorageCapacity()) {
        localStorage.removeItem(key);
      } else {
        break;
      }
    }
  } catch (error) {
    console.error('Error cleaning up old data:', error);
  }
};

// 安全存储数据
const safeSetItem = (key: string, data: any): boolean => {
  try {
    if (!checkStorageCapacity()) {
      cleanupOldData();
    }
    
    if (checkStorageCapacity()) {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } else {
      console.error('LocalStorage capacity exceeded');
      return false;
    }
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
};

// 安全读取数据
const safeGetItem = <T>(key: string, defaultValue: T): T => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
};

// 学习进度存储
export const learningProgress = {
  save: (progress: Record<string, ProjectProgress>): boolean => {
    return safeSetItem(STORAGE_KEYS.LEARNING_PROGRESS, progress);
  },
  
  get: (): Record<string, ProjectProgress> => {
    return safeGetItem(STORAGE_KEYS.LEARNING_PROGRESS, {});
  },
  
  getProject: (projectId: string): ProjectProgress => {
    const allProgress = learningProgress.get();
    return allProgress[projectId] || { code: '', completed: false, lastUpdated: 0 };
  },
  
  updateProject: (projectId: string, data: Partial<ProjectProgress>): boolean => {
    const allProgress = learningProgress.get();
    allProgress[projectId] = {
      ...allProgress[projectId],
      ...data,
      lastUpdated: Date.now()
    };
    return learningProgress.save(allProgress);
  },
  
  deleteProject: (projectId: string): boolean => {
    const allProgress = learningProgress.get();
    delete allProgress[projectId];
    return learningProgress.save(allProgress);
  }
};

// 代码草稿存储
export const codeDrafts = {
  save: (drafts: Record<string, CodeDraft>): boolean => {
    return safeSetItem(STORAGE_KEYS.CODE_DRAFTS, drafts);
  },
  
  get: (): Record<string, CodeDraft> => {
    return safeGetItem(STORAGE_KEYS.CODE_DRAFTS, {});
  },
  
  getDraft: (draftId: string): CodeDraft | null => {
    const allDrafts = codeDrafts.get();
    return allDrafts[draftId] || null;
  },
  
  createOrUpdateDraft: (draftId: string, content: string, metadata?: { projectId?: string; lessonId?: string }): boolean => {
    const allDrafts = codeDrafts.get();
    allDrafts[draftId] = {
      id: draftId,
      content,
      lastUpdated: Date.now(),
      ...metadata
    };
    return codeDrafts.save(allDrafts);
  },
  
  deleteDraft: (draftId: string): boolean => {
    const allDrafts = codeDrafts.get();
    delete allDrafts[draftId];
    return codeDrafts.save(allDrafts);
  },
  
  getByProject: (projectId: string): CodeDraft[] => {
    const allDrafts = codeDrafts.get();
    return Object.values(allDrafts).filter(draft => draft.projectId === projectId);
  }
};

// 聊天记录存储
export const chatHistory = {
  save: (histories: Record<string, ChatHistory>): boolean => {
    return safeSetItem(STORAGE_KEYS.CHAT_HISTORY, histories);
  },
  
  get: (): Record<string, ChatHistory> => {
    return safeGetItem(STORAGE_KEYS.CHAT_HISTORY, {});
  },
  
  getHistory: (historyId: string): ChatHistory | null => {
    const allHistories = chatHistory.get();
    return allHistories[historyId] || null;
  },
  
  addMessage: (historyId: string, role: 'user' | 'assistant' | 'system', content: string, metadata?: { projectId?: string; lessonId?: string }): boolean => {
    const allHistories = chatHistory.get();
    
    if (!allHistories[historyId]) {
      allHistories[historyId] = {
        id: historyId,
        messages: [],
        lastUpdated: Date.now(),
        ...metadata
      };
    }
    
    allHistories[historyId].messages.push({
      role,
      content,
      timestamp: Date.now()
    });
    
    allHistories[historyId].lastUpdated = Date.now();
    
    // 限制每个聊天记录的消息数量，避免存储过大
    if (allHistories[historyId].messages.length > 50) {
      allHistories[historyId].messages = allHistories[historyId].messages.slice(-50);
    }
    
    return chatHistory.save(allHistories);
  },
  
  deleteHistory: (historyId: string): boolean => {
    const allHistories = chatHistory.get();
    delete allHistories[historyId];
    return chatHistory.save(allHistories);
  },
  
  getByProject: (projectId: string): ChatHistory[] => {
    const allHistories = chatHistory.get();
    return Object.values(allHistories).filter(history => history.projectId === projectId);
  }
};

// 清理所有数据
export const clearAllStorage = (): void => {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
};

// 导出存储键名，方便其他模块使用
export { STORAGE_KEYS };
