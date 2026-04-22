# Python数据分析AI训练平台（Cloudflare免费版）- 产品需求文档

## Overview
- **Summary**: 基于Cloudflare免费资源实现的Python数据分析实操训练平台，采用"3步认知+10个梯度项目+AI错题倒逼"的学习模式，零成本、零运维、无传统后端，打开浏览器即可使用。
- **Purpose**: 解决Python数据分析学习中环境配置复杂、缺乏实操项目、AI辅助不足的问题，提供一个完全免费且易于部署的学习平台。
- **Target Users**: 开发工程师、数据分析爱好者、Python学习者。

## Goals
- 实现完全基于Cloudflare免费套餐的Python数据分析训练平台
- 提供10个梯度项目的实操训练
- 集成AI陪练功能，支持思路点拨和代码纠错
- 实现浏览器端Python运行环境，无需后端服务器
- 确保学习进度本地存储，刷新页面不丢失
- 提供简洁美观的新中式国风UI界面

## Non-Goals (Out of Scope)
- 不使用任何付费服务或传统后端服务器
- 不实现多设备进度同步（MVP阶段）
- 不支持大型数据集处理（仅支持浏览器端可处理的数据集大小）
- 不包含用户账号系统和权限管理

## Background & Context
- 传统Python学习平台通常需要本地环境配置，门槛较高
- 云端Python环境往往需要付费服务，成本较高
- Cloudflare提供丰富的免费资源，包括Pages、Workers、KV存储等
- Pyodide技术使得在浏览器端运行Python成为可能
- AI技术可以提供个性化的学习辅助

## Functional Requirements
- **FR-1**: 前端页面展示，包括首页、学习引导、思维模型、争议模块、项目列表、项目详情页
- **FR-2**: 在线代码编辑器，支持语法高亮、自动补全、行号显示
- **FR-3**: 浏览器端Python运行环境，支持pandas、numpy、matplotlib等库
- **FR-4**: AI陪练功能，支持思路点拨、代码纠错、错题追问
- **FR-5**: 学习进度本地存储，包括代码草稿、完成状态、聊天记录
- **FR-6**: 10个梯度项目的实操训练，包含数据集生成、代码运行、AI辅助
- **FR-7**: 第一天底层认知模块，包括思维模型、行业争议、辨析题

## Non-Functional Requirements
- **NFR-1**: 性能要求，首屏加载时间<2秒，代码运行响应时间<3秒
- **NFR-2**: 可靠性，所有功能基于Cloudflare免费套餐，不超出免费额度
- **NFR-3**: 可部署性，按照简化步骤可快速部署，无需复杂配置
- **NFR-4**: 兼容性，优先适配Chrome、Edge等现代浏览器
- **NFR-5**: 安全性，AI API Key不暴露在前端，通过Workers代理调用

## Constraints
- **Technical**: 基于Cloudflare免费套餐，Workers每天10万次请求限制，LocalStorage单域名5-10MB限制
- **Business**: 零成本实现，不使用任何付费服务
- **Dependencies**: Pyodide、Cloudflare Pages、Cloudflare Workers、Cloudflare KV、Cloudflare AI Gateway

## Assumptions
- 用户拥有现代浏览器，支持WebAssembly（Pyodide运行需要）
- Cloudflare免费套餐的额度足够支撑MVP阶段的使用需求
- 用户网络环境稳定，能够访问Cloudflare和相关CDN资源

## Acceptance Criteria

### AC-1: 前端部署成功
- **Given**: 前端代码已准备就绪
- **When**: 按照部署步骤部署到Cloudflare Pages
- **Then**: 平台可通过Cloudflare生成的域名访问，首屏加载时间<2秒
- **Verification**: `programmatic`

### AC-2: Python代码运行功能
- **Given**: Pyodide环境已初始化
- **When**: 用户在代码编辑器中编写Python代码并点击运行
- **Then**: 代码在浏览器端执行，输出结果和图表正常显示，响应时间<3秒
- **Verification**: `programmatic`

### AC-3: AI陪练功能
- **Given**: Workers AI代理已部署
- **When**: 用户点击"思路点拨"或"代码纠错"
- **Then**: 前端发送请求到Workers，Workers代理调用AI API，返回结果给前端，AI API Key不暴露
- **Verification**: `programmatic`

### AC-4: 学习进度保存
- **Given**: 用户完成项目任务
- **When**: 系统自动保存学习进度
- **Then**: 学习进度、代码草稿、聊天记录存入LocalStorage，刷新页面后自动加载
- **Verification**: `programmatic`

### AC-5: 10个项目可正常运行
- **Given**: 项目内容已配置
- **When**: 用户选择任意项目进行学习
- **Then**: 项目描述、任务清单、代码编辑器、AI陪练功能均正常工作
- **Verification**: `human-judgment`

### AC-6: 新中式国风UI
- **Given**: UI设计已实现
- **When**: 用户访问平台
- **Then**: 页面展示新中式国风风格，包括米白底色、青黛蓝强调色、墨黑文字、浅灰辅助色，布局美观，响应式设计适配不同屏幕
- **Verification**: `human-judgment`

## Open Questions
- [ ] 如何优化Pyodide首次加载速度，减少用户等待时间
- [ ] 如何处理大型数据集的前端生成和处理
- [ ] 如何确保AI提示词的一致性和质量
- [ ] 如何实现多设备进度同步（未来迭代）