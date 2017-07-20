# Environment flags

You can enable some codes only in development environment with environment flags.

通过环境标志，能使一些代码只在开发环境中生效


Now pass environment variable into webpack.
```bash
# Linux & Mac
$ env DEBUG=true webpack-dev-server

# Windows-cmd
$ set DEBUG=true
$ webpack-dev-server

# Windows-powershell
$ $env:DEBUG='true'
$ webpack-dev-server
```
