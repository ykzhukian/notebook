#### 先在 snippets 中新建配置
```json
// console.log.code-snippets
{
  "console.log": {
		"scope": "javascript,typescript,javascriptreact",
		"prefix": "log",
		"body": [
			"console.log('$1', $1);"
		],
		"description": "Log output to console"
	}
}
```

#### 在 Keyboard Shortcuts 中
```json
{
  "key": "shift+cmd+l",
  "command": "editor.action.insertSnippet",
  "args": { "name": "console.log" }
}
```

```json
// setting.json
{
    "workbench.colorTheme": "Dracula",
    "window.zoomLevel": 1,
    "workbench.iconTheme": "material-icon-theme",
    "editor.tabSize": 2,
    "emmet.triggerExpansionOnTab": true,
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "html",
            "autoFix": true
        },
        {
            "language": "vue",
            "autoFix": true
        }
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "terminal.external.osxExec": "iTerm.app",
    "emmet.extensionsPath": ""
}
```