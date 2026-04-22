# Cloudflare Workers 部署指南

## 1. 准备工作

### 1.1 安装 Wrangler CLI

```bash
npm install -g wrangler
```

### 1.2 登录 Cloudflare

```bash
wrangler login
```

## 2. 环境变量配置

在 Cloudflare 控制台中设置以下环境变量：

| 环境变量名称 | 描述 | 示例值 |
|-------------|------|--------|
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare 账号 ID | `1234567890abcdef1234567890abcdef` |
| `AI_GATEWAY_NAME` | AI Gateway 名称 | `python-ai-training` |
| `AI_API_KEY` | AI API 密钥（OpenAI 或豆包） | `sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` |

## 3. KV 命名空间创建

1. 登录 Cloudflare 控制台
2. 进入 Workers & Pages → KV
3. 点击 "创建命名空间"
4. 名称设置为 `PYTHON_AI_TRAINING_KV`
5. 复制命名空间 ID 到 `wrangler.toml` 文件中

## 4. AI Gateway 配置

1. 登录 Cloudflare 控制台
2. 进入 AI → AI Gateway
3. 点击 "创建 Gateway"
4. 名称设置为 `python-ai-training`
5. 绑定你的 AI API（OpenAI 或豆包）
6. 复制 Gateway 访问地址

## 5. 部署 Worker

### 5.1 本地构建

```bash
cd workers
npx esbuild worker.ts --bundle --outfile=dist/worker.js --platform=node
```

### 5.2 部署到 Cloudflare

```bash
wrangler deploy
```

## 6. 测试 Worker

### 6.1 测试 AI 代理接口

```bash
curl -X POST https://python-ai-training-platform.your-subdomain.workers.dev/api/ai \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [{
      "role": "user",
      "content": "我在Python数据分析时遇到了问题，如何处理缺失值？"
    }]
  }'
```

### 6.2 测试静态内容接口

```bash
curl https://python-ai-training-platform.your-subdomain.workers.dev/api/content/test
```

## 7. 前端集成

在前端代码中，将 AI 请求发送到 Worker 地址：

```typescript
// 前端 API 调用示例
async function callAI(messages) {
  const response = await fetch('https://python-ai-training-platform.your-subdomain.workers.dev/api/ai', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ messages })
  });
  return await response.json();
}
```

## 8. 故障排查

### 8.1 常见错误

| 错误信息 | 可能原因 | 解决方案 |
|---------|---------|----------|
| `AI请求失败` | AI API 密钥错误或网络问题 | 检查环境变量配置 |
| `Content not found` | KV 命名空间未配置或键不存在 | 检查 KV 配置和键值 |
| `Method Not Allowed` | 请求方法错误 | 确保使用 POST 方法调用 /api/ai |

### 8.2 查看 Worker 日志

```bash
wrangler tail
```

## 9. 部署成功验证

- [x] Worker 部署成功，可通过 URL 访问
- [x] AI 请求通过 Worker 代理正常返回结果
- [x] API Key 不暴露在前端
- [x] 静态内容可通过 KV 访问

## 10. 后续维护

- 定期检查 Cloudflare 免费额度使用情况
- 根据需要更新 AI 提示词和系统配置
- 监控 Worker 性能和错误率
