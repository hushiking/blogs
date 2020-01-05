---
title: 解决 VSCode 占用 CPU 过高问题
date: 2019-10-06 22:02:06
categories: web前端
tags: VSCode
description: "在 Mac 电脑上使用 VSCode 时总会出现 CPU 占用过高问题，可以使用本文方法解决此问题。"
---

## 介绍

最近在 VSCode 使用一段时间后， Mac 电脑总会发出 CPU 占用过高的嗡嗡声，打开进程监视器发现是一个叫做 `Code Helper` 的进程出了问题。

![Alt Code Helper](/images/front-end/code-helper.jpg "Code Helper 占用 CPU 过高图")

## 解决方法

在 VSCode 的 `setting.json` 文件中加入如下配置，然后完全退出并重启软件。

```json
"files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/tmp": true,
    "**/node_modules": true,
    "**/bower_components": true,
    "**/dist": true
},
"files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/**": true,
    "**/tmp/**": true,
    "**/bower_components/**": true,
    "**/dist/**": true
}
```
