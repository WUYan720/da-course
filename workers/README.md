# Cloudflare Workers AI 代理服务

## 项目概述

本项目是一个基于 Cloudflare Workers 的 AI API 代理服务，用于隐藏 API Key，避免前端暴露导致的安全问题。同时提供静态内容托管功能，存储项目描述、任务清单等静态数据。

## 核心功能

1. **AI API 代理**：隐藏 API Key，通过 Cloudflare AI Gateway 转发请求
2. **静态内容托管**：通过 Workers KV 存储和提供静态内容
3. **无后端架构**：完全基于 Cloudflare 免费资源，无需传统后端服务器

## 技术栈

- Cloudflare Workers
- TypeScript
- Cloudflare Workers KV
- Cloudflare AI Gateway

## 项目结构

```
workers/
├── worker.ts          # Worker 主代码
├── wrangler.toml      # Wrangler 配置文件
├── DEPLOYMENT.md      # 部署指南
└── README.md          # 项目说明
```

## 快速开始

### 1. 安装依赖

```bash
npm install -g wrangler
```

### 2. 登录 Cloudflare

```bash
wrangler login
```

### 3. 配置环境变量

在 Cloudflare 控制台中设置以下环境变量：

- `CLOUDFLARE_ACCOUNT_ID`：Cloudflare 账号 ID
- `AI_GATEWAY_NAME`：AI Gateway 名称
- `AI_API_KEY`：AI API 密钥（OpenAI 或豆包）

### 4. 创建 KV 命名空间

1. 登录 Cloudflare 控制台
2. 进入 Workers & Pages → KV
3. 点击 "创建命名空间"
4. 名称设置为 `PYTHON_AI_TRAINING_KV`
5. 复制命名空间 ID 到 `wrangler.toml` 文件中

### 5. 配置 AI Gateway

1. 登录 Cloudflare 控制台
2. 进入 AI → AI Gateway
3. 点击 "创建 Gateway"
4. 名称设置为 `python-ai-training`
5. 绑定你的 AI API（OpenAI 或豆包）

### 6. 部署 Worker

```bash
cd workers
wrangler deploy
```

## API 接口

### AI 代理接口

- **URL**：`/api/ai`
- **方法**：POST
- **请求体**：
  ```json
  {
    "messages": [
      {
        "role": "user",
        "content": "你的问题"
      }
    ]
  }
  ```
- **响应**：AI 模型的回答

### 静态内容接口

- **URL**：`/api/content/{key}`
- **方法**：GET
- **响应**：存储在 KV 中的静态内容

## 前端集成

在前端代码中，使用以下方式调用 AI 服务：

```typescript
import { callAI, getHint, getCodeFix } from '@/services/ai';

// 调用 AI 服务
const response = await callAI([
  {
    role: 'user',
    content: '如何处理 Python 中的缺失值？'
  }
]);

// 获取思路点拨
const hintResponse = await getHint('如何使用 pandas 进行数据清洗？');

// 获取代码纠错
const fixResponse = await getCodeFix('your code', 'error message');
```

## 免费资源使用

- **Cloudflare Workers**：每天 10 万次请求，1GB 内存，30 秒超时
- **Workers KV**：1GB 存储，每天 100 万次读，1000 次写
- **Cloudflare AI Gateway**：每天 10 万次请求

## 故障排查

### 常见错误

| 错误信息 | 可能原因 | 解决方案 |
|---------|---------|----------|
| `AI请求失败` | AI API 密钥错误或网络问题 | 检查环境变量配置 |
| `Content not found` | KV 命名空间未配置或键不存在 | 检查 KV 配置和键值 |
| `Method Not Allowed` | 请求方法错误 | 确保使用 POST 方法调用 /api/ai |

### 查看日志

```bash
wrangler tail
```

## 部署成功验证

- [x] Worker 部署成功，可通过 URL 访问
- [x] AI 请求通过 Worker 代理正常返回结果
- [x] API Key 不暴露在前端
- [x] 静态内容可通过 KV 访问

## 后续维护

- 定期检查 Cloudflare 免费额度使用情况
- 根据需要更新 AI 提示词和系统配置
- 监控 Worker 性能和错误率
