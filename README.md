# Edit KOReader Lua

[简体中文](README.zh-CN.md)

This is a sample plugin for editing KOReader metadata.epub.lua as a markdown file in Obsidian.

# How to Use

- download the `obsidian-edit-koreader-lua.zip` from [Release](https://github.com/NoHeartPen/obsidian-edit-koreader-lua/releases)
- unpack the `obsidian-edit-koreader-lua.zip` on `.obsidian\plugins` folder
- restart Obsidian 
- open `metadata.epub.lua` and edit it:)

# Tips

`metadata.epub.lua` may be like this:
```md
    ["bookmarks"] = {
        [1] = {
            ["chapter"] = "4.11.2 QClipboard",
            ["datetime"] = "2023-05-26 22:45:35",
            ["highlighted"] = true,
            ["notes"] = "This is origin text from book",
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
            ["text"] = "Here is your note",
        },
```
If you only edit `["text"] = "Here is your note"`, KOReader also use edited file correctly.

If you just want read your Highlight, you can use the plugin [KOReader Highlight](obsidian://show-plugin?id=obsidian-koreader-plugin), you can get more information on [here](https://github.com/Edo78/obsidian-koreader-sync).

# Donate

[ko-fi](https://ko-fi.com/noheartpen)

# License

Licensed under the [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0.html).
