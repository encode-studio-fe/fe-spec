---
title: no-secret-info
categories:
  - Eslint插件规范
tags:
  - Eslint插件规范
author:
  name: 澄怀
  link: https://github.com/encode-studio-fe/fe-spec
---

# no-secret-info

不在代码中直接通过纯文本值设置 `password` `token` 和 `secret` 信息。

## 规则内容

在包含 `password` `token` and `secret` 名称的 key 中禁止使用纯文本值。

**错误**代码示例:

```js
var accessKeySecret = 'xxxx';

var client = {
  accessKeyToken: 'xxxx',
};
```

**正确**代码示例:

```js
var accessKeySecret = process.env.ACCESS_KEY_SECRET;

var client = {
  accessKeyToken: process.env.ACCESS_KEY_SECRET,
};
```
