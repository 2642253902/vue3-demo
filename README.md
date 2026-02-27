# Vue3 演示项目

这是一个基于 Vue 3 + TypeScript + Vite 构建的完整演示项目，展示了 Vue 3 生态系统中的核心功能和最佳实践。

## 📋 项目简介

本项目是一个功能完整的 Vue3 示例应用，涵盖了现代 Vue 开发中常用的技术栈和开发模式，适合学习和参考。

## ✨ 主要特性

- 🚀 **Vue 3** - 使用最新的 Composition API
- 💪 **TypeScript** - 完整的类型支持
- ⚡️ **Vite** - 极速的开发体验
- 🗂 **Vue Router 4** - 官方路由管理器
  - 声明式路由配置
  - 嵌套路由
  - 路由传参（params 和 query）
  - 具名路由
- 🍍 **Pinia** - 新一代状态管理
  - State、Getters、Actions
  - TypeScript 支持
- 🎨 **Element Plus** - Vue 3 组件库
- 🔧 **ESLint** - 代码质量检查
- 🎯 **Vue DevTools** - 开发调试工具

## 🛠 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Vue | ^3.5.17 | 渐进式 JavaScript 框架 |
| TypeScript | ~5.8.0 | JavaScript 的超集 |
| Vite | ^7.0.0 | 下一代前端构建工具 |
| Vue Router | ^4.5.1 | 官方路由管理器 |
| Pinia | ^3.0.3 | Vue 状态管理库 |
| Element Plus | ^2.10.3 | Vue 3 UI 组件库 |

## 📦 项目结构

```
vue-project/
├── public/              # 静态资源
├── src/
│   ├── assets/         # 样式文件
│   │   ├── base.css    # 基础样式
│   │   └── main.css    # 主样式
│   ├── components/     # 公共组件
│   │   ├── HelloWorld.vue
│   │   ├── MySalarinfo.vue    # 薪资信息组件
│   │   ├── MySalary.ts        # 薪资逻辑
│   │   ├── TheWelcome.vue
│   │   ├── WelcomeItem.vue
│   │   ├── icons/             # 图标组件
│   │   │   ├── IconCommunity.vue
│   │   │   ├── IconDocumentation.vue
│   │   │   ├── IconEcosystem.vue
│   │   │   ├── IconSupport.vue
│   │   │   └── IconTooling.vue
│   │   └── types/             # 类型定义
│   │       └── salaryInfo.ts
│   ├── pages/          # 页面组件
│   │   ├── HomePage.vue       # 首页
│   │   ├── AboutPage.vue      # 关于页
│   │   ├── NewpPage.vue       # 新闻列表页
│   │   ├── NewsDetail1.vue    # 新闻详情页1（query传参）
│   │   └── NewsDetail2.vue    # 新闻详情页2（params传参）
│   ├── store/          # 状态管理
│   │   └── user.ts            # 用户状态
│   ├── App.vue         # 根组件
│   └── main.ts         # 应用入口
├── index.html          # HTML 模板
├── vite.config.ts      # Vite 配置
├── tsconfig.json       # TypeScript 配置
├── eslint.config.ts    # ESLint 配置
└── package.json        # 项目依赖
```

## 🎯 核心功能演示

### 1. 路由系统

#### 基础路由配置
- **首页** (`/home`) - 应用首页
- **关于** (`/about`) - 关于页面
- **新闻** (`/new`) - 新闻页面（带子路由）

#### 路由跳转方式
```vue
<!-- 字符串跳转 -->
<RouterLink to="/home">首页</RouterLink>

<!-- 对象跳转 -->
<RouterLink :to="{ path: 'about' }">关于</RouterLink>

<!-- 具名路由跳转 -->
<RouterLink :to="{ name: 'new' }">新闻</RouterLink>
```

#### 嵌套路由
新闻页面包含两个子路由：
- `/new/1` - 使用 query 传参的新闻详情
- `/new/2/:id/:title/:content` - 使用 params 传参的新闻详情

#### 路由传参演示
```vue
<!-- Query 传参 -->
<RouterLink to="/new/1?id=1&title=新闻1&content=内容">新闻1</RouterLink>
<RouterLink :to="{ path: '/new/1', query: { id: 1, title: '新闻1' } }">新闻1</RouterLink>

<!-- Params 传参 -->
<RouterLink to="/new/2/2/新闻2/内容">新闻2</RouterLink>
<RouterLink :to="{ name: 'news2', params: { id: 2, title: '新闻2' } }">新闻2</RouterLink>
```

### 2. 状态管理（Pinia）

项目使用 Pinia 进行状态管理，以用户信息为例：

```typescript
// store/user.ts
export const useUserStore = defineStore("userStore", {
    state() {
        return {
            username: '--'
        }
    },
    getters: {
        getUsername(): string {
            return this.username.toUpperCase();
        }
    },
    actions: {
        changeUsername(value: string) {
            if (value && value.length < 10) {
                this.username += value;
            }
        }
    }
})
```

### 3. TypeScript 类型支持

项目使用 TypeScript 提供完整的类型支持：

```typescript
// components/types/salaryInfo.ts
export interface SalaryInfo {
    username: string;
    salary: number;
}
```

### 4. 组件示例

#### 薪资信息组件
- 使用 `v-model` 双向绑定
- TypeScript 类型定义
- Props 传递

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0
- npm >= 9.0 或 pnpm >= 8.0

### 安装依赖

```bash
cd vue-project
npm install
# 或
pnpm install
```

### 开发模式

启动开发服务器，支持热更新：

```bash
npm run dev
```

访问 http://localhost:5173 查看应用

### 生产构建

构建生产版本：

```bash
npm run build
```

构建产物将生成在 `dist` 目录下

### 预览生产构建

本地预览生产构建：

```bash
npm run preview
```

### 类型检查

运行 TypeScript 类型检查：

```bash
npm run type-check
```

### 代码检查

使用 ESLint 检查并自动修复代码：

```bash
npm run lint
```

## 💡 推荐开发环境

### IDE

- **VSCode** + **Volar** 扩展（推荐）
  - 禁用 Vetur 扩展（如果已安装）
  - Volar 提供了对 Vue 3 和 TypeScript 的完整支持

### VSCode 扩展推荐

- Vue Language Features (Volar)
- TypeScript Vue Plugin (Volar)
- ESLint
- Prettier

## 📚 学习要点

本项目涵盖以下学习要点：

1. **Vue 3 Composition API**
   - `<script setup>` 语法糖
   - 响应式 API
   - 生命周期钩子

2. **Vue Router 4**
   - 路由配置
   - 编程式导航
   - 路由传参
   - 嵌套路由

3. **Pinia 状态管理**
   - Store 定义
   - State、Getters、Actions
   - Store 组合使用

4. **TypeScript 集成**
   - .vue 文件中的类型支持
   - 接口定义和使用
   - Props 类型定义

5. **Vite 构建工具**
   - 开发配置
   - 路径别名 (@)
   - 插件使用

## 🔧 配置说明

### 路径别名

项目配置了 `@` 别名指向 `src` 目录：

```typescript
// vite.config.ts
resolve: {
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url))
  }
}
```

使用示例：
```typescript
import HomePage from "@/pages/HomePage.vue"
import type { SalaryInfo } from "@/components/types/salaryInfo"
```

### 路由模式

项目使用 `createWebHistory()` 模式（HTML5 History 模式），需要服务器配置支持。

如需使用 Hash 模式，可修改 `main.ts`：
```typescript
const router = createRouter({
  history: createWebHashHistory(),  // 改为 Hash 模式
  routes
})
```

## 📖 相关文档

- [Vue 3 官方文档](https://cn.vuejs.org/)
- [Vite 官方文档](https://cn.vitejs.dev/)
- [Vue Router 官方文档](https://router.vuejs.org/zh/)
- [Pinia 官方文档](https://pinia.vuejs.org/zh/)
- [TypeScript 官方文档](https://www.typescriptlang.org/zh/)
- [Element Plus 官方文档](https://element-plus.org/zh-CN/)
