---
title: markdownlint-config-encode
categories:
  - 工程规范
tags:
  - 工程规范
author:
  name: 澄怀
  link: https://github.com/encode-studio-fe/fe-spec
---

# markdownlint-config-encode

:::tip
印客学院 文档 规范
:::

支持配套的 [markdownlint 可共享配置](https://www.npmjs.com/package/markdownlint#optionsconfig)。

## 安装
需要先全局安装 [markdownlint-cli](https://www.npmjs.com/package/markdownlint-cli)
```bash
npm install -g markdownlint-cli
```

再安装 [markdownlint](https://www.npmjs.com/package/markdownlint)：

```bash
npm install markdownlint-config-encode markdownlint --save-dev
```

## 使用

在 `.markdownlint.json` 中继承本包:

```json
{
  "extends": "markdownlint-config-encode"
}
```
