# Edit KOReader Lua

这是一个用于在 Obsidian 内像编辑 markdown 一样编辑 KOReader 的`metadate.epub.lua`的插件。

# 快速上手

- 从 [Release](https://github.com/NoHeartPen/obsidian-edit-koreader-lua/releases)下载`obsidian-edit-koreader-lua.zip` 
- 在`.obsidian\plugins` 文件夹下解压`obsidian-edit-koreader-lua.zip`
- 重启 Obsidian
- 打开 `metadata.epub.lua` ，开始编辑吧:)

# 提示

你的 `metadata.epub.lua` 应该是下面这样的结构:
```md
    ["bookmarks"] = {
        [1] = {
            ["chapter"] = "4.11.2 QClipboard",
            ["datetime"] = "2023-05-26 22:45:35",
            ["highlighted"] = true,
            ["notes"] = "这里是从书中摘录的原文",
            ["page"] = 357,
            ["pos0"] = {
                ["page"] = 357,
                ["rotation"] = 0,
                ["x"] = 101.40549545288,
                ["y"] = 467.39669677734,
                ["zoom"] = 1.9607843137255,
            },
            ["pos1"] = {
                ["page"] = 357,
                ["rotation"] = 0,
                ["x"] = 380.65280639648,
                ["y"] = 549.96508666992,
                ["zoom"] = 1.9607843137255,
            },
            ["text"] = "这里是你的笔记",
        },
```
如果你只编辑了 `["text"] = "这里是你的笔记"`, KOReader 仍然可以正确处理`metadata.epub.lua`.

如果你只是想读你的笔记, 推荐使用 [KOReader Highlight](obsidian://show-plugin?id=obsidian-koreader-plugin) 插件, 你可以在[这里](https://github.com/Edo78/obsidian-koreader-sync)查看相关信息。

# 赞助

[爱发电](https://afdian.net/a/NoHeartPen)

# 许可证

使用[Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0.html)进行许可。
