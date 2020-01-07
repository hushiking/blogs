---
title: git rm -r --cached 去掉已经托管在 git 上的文件
date: 2019-10-19 22:47:16
categories: web前端
tags: Git
description: ".gitignore 只能忽略那些原来没有被 track 的文件，如果某些文件已经被纳入了版本管理中，则修改 .gitignore 是无效的。"
---

## 去掉已经托管到 git 上的文件

有不该提交的文件已经提交后，仅仅在 .gitignore 中加入忽略是不行的。这个时候需要执行:

```bash
git rm -r --cached . # . 可以是任意想忽略的文件路径 -r(recursive) 表示递归搜索每个文件
git add .
git commit -m 'update .gitignore' # 任意提交信息
```

## .gitignore 文件

一个典型的 `.gitignore` 文件如下:

```bash
*.a       # 忽略所有 .a 结尾的文件
!lib.a    # 但 lib.a 除外
/TODO     # 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO
build/    # 忽略 build/ 目录下的所有文件
doc/*.txt # 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt
```

### 其他匹配规则

- `?`：代表任意的一个字符
- `＊`：代表任意数目的字符
- `{!ab}`：必须不是此类型
- `{ab,bb,cx}`：代表ab,bb,cx中任一类型即可
- `[abc]`：代表a,b,c中任一字符即可
- `[ ^abc]`：代表必须不是a,b,c中任一字符

> 添加 `.gitkeep` 文件解决 git 不能追踪空目录问题

## 手动设置不要检查特定文件的更改情况

- 暂时忽略某个文件不提交

```bash
git update-index --assume-unchanged path/to/some/dir
```

- 恢复被忽略的文件重新被版本控制

```bash
git update-index --no-assume-unchanged path/to/some/dir
```

*另外 git 还提供了另一种 exclude 的方式来做同样的事情，不同的是 .gitignore 这个文件本身会提交到版本库中去，用来保存的是公共的需要排除的文件。而 `.git/info/exclude` 这里设置的则是你自己本地需要排除的文件。* 他不会影响到其他人，也不会提交到版本库中去。
