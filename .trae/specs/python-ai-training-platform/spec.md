# Python数据分析AI训练平台 - Product Requirement Document

## Overview
- **Summary**: 基于Cloudflare免费资源实现的Python数据分析实操训练平台，采用"3步认知+10个梯度项目+AI错题倒逼"模式，零成本、零运维、无传统后端，打开浏览器即可使用。
- **Purpose**: 为学生提供实践导向的Python数据分析学习平台，通过AI辅助和项目实操提升技能，完全基于Cloudflare免费套餐。
- **Target Users**: 学习数据分析的学生和初学者，特别是商务数据分析与应用专业的学生。

## Goals
- 实现基于Cloudflare免费资源的无后端Python数据分析训练平台
- 提供10个梯度项目的实操训练
- 集成AI陪练功能，提供思路点拨和代码纠错
- 实现浏览器端Python代码运行环境
- 提供本地存储学习进度和代码草稿的功能
- 确保所有功能使用Cloudflare免费套餐，不超出免费额度

## Non-Goals (Out of Scope)
- 不使用任何付费服务
- 不搭建传统后端服务器
- 不提供实时协作功能
- 不支持大规模数据集处理（超过10万行）
- 不使用Cloudflare D1（避免超出免费额度）

## Background & Context
- Cloudflare提供免费的Pages、Workers、KV、AI Gateway等服务
- Pyodide可在浏览器端运行Python代码，支持pandas、numpy、matplotlib等库
- AI API可通过Cloudflare AI Gateway调用，隐藏API Key
- 学生需要实践导向的数据分析学习平台，无需后端依赖

## Functional Requirements
- **FR-1**: 3步认知模块（思维模型、行业争议、辨析题）
- **FR-2**: 10个梯度项目的实操训练
- **FR-3**: 浏览器端Python运行环境（Pyodide）
- **FR-4**: AI陪练功能（思路点拨、代码纠错）
- **FR-5**: 本地存储学习进度和代码草稿（LocalStorage）
- **FR-6**: 数据可视化和图表渲染（Recharts + Matplotlib）
- **FR-7**: 在线代码编辑器（Monaco Editor）
- **FR-8**: 静态内容托管（Workers KV）

## Non-Functional Requirements
- **NFR-1**: 首屏加载时间<2秒
- **NFR-2**: 代码运行响应时间<3秒
- **NFR-3**: 支持Chrome、Edge等现代浏览器
- **NFR-4**: 遵循Cloudflare免费资源使用规范
- **NFR-5**: 10万行数据处理可在2秒内完成

## Constraints
- **Technical**: 基于Cloudflare免费套餐，使用Pyodide运行Python，采用前端+边缘计算架构
- **Business**: 无预算，使用免费服务
- **Dependencies**: Cloudflare Pages, Workers, KV, AI Gateway, Pyodide, Monaco Editor, Recharts

## Assumptions
- 用户使用现代浏览器访问
- 用户有基础的网络连接
- 免费版服务能满足初期需求
- 数据集规模在10万行以内
- 用户代码复杂度在浏览器端可处理范围内

## Acceptance Criteria

### AC-1: 3步认知模块
- **Given**: 用户访问平台
- **When**: 用户进入第一天认知模块
- **Then**: 可以学习思维模型、行业争议和完成辨析题
- **Verification**: human-judgment

### AC-2: 10个梯度项目
- **Given**: 用户选择项目
- **When**: 用户完成项目任务
- **Then**: 系统在前端生成数据集，用户编写代码，运行并查看结果
- **Verification**: programmatic

### AC-3: Python代码运行
- **Given**: 用户编写Python代码
- **When**: 用户点击运行按钮
- **Then**: 代码在浏览器端通过Pyodide执行，显示结果和图表
- **Verification**: programmatic

### AC-4: AI陪练功能
- **Given**: 用户遇到问题
- **When**: 用户请求AI帮助
- **Then**: 前端发送请求到Workers，Workers代理调用AI API，返回思路点拨或代码纠错
- **Verification**: human-judgment

### AC-5: 学习进度保存
- **Given**: 用户完成部分任务
- **When**: 用户刷新页面或重新访问
- **Then**: 系统从LocalStorage恢复之前的代码和进度
- **Verification**: programmatic

### AC-6: 静态内容管理
- **Given**: 平台需要更新项目内容
- **When**: 管理员更新Workers KV中的内容
- **Then**: 前端自动加载最新内容
- **Verification**: programmatic

## Open Questions
- [ ] Cloudflare AI Gateway的具体配置步骤
- [ ] 如何优化Pyodide的首次加载速度
- [ ] 10个梯度项目的具体内容和难度梯度设计
- [ ] 如何处理浏览器LocalStorage的存储限制