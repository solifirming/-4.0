# Vercel 修复说明

本包针对 Vercel `4-0` 项目。保留 Cloudflare Pages Functions（`functions/`）供旧部署使用；Vercel 使用新建的 `api/` 路由。

## 操作步骤
1. 把所有文件覆盖到 **已克隆的 GitHub 仓库**（保留 `.git`）。提交前可在电脑终端执行 `npm install`，这会生成新的 `package-lock.json`。不要上传 `node_modules`。
2. 建议先本地执行 `npm run build`；成功后 `git add -A && git commit -m "fix: Vercel Blob card persistence" && git push origin main`。不要用 `--force`。
3. Vercel `4-0` 项目必须已连接你创建的 Private Blob Store，且部署为 OIDC 模式。确保 Project Settings 中的 Root Directory 是仓库根目录，并触发新部署。
4. 打开 `https://diybirthday.srzf.asia/api/cards/latest`，应返回 JSON 而非 HTML/404。保存新卡片后，用新卡片 `?card=...` URL 在不同浏览器测试。
5. Vercel Functions 日志可用于查找 4xx/5xx 报错。

## 重要限制
- 图片沿用原站的 Base64 JSON 方式保存整张卡片；超出请求大小限制会返回 413（本包设定约 3.5MB；平台限制可能更低）。正式大规模使用应改成逐张图片上传。
- 为兼容原站逻辑，`latest` 仍可读取最近卡片；缺少用户登录、写入鉴权和访问权限机制。**不要用这个版本保存或收集敏感私人照片，也不要公开运营**。公开上线前必须加入授权和防滥用机制。
- 并发编辑同一卡片时，写入可能相互覆盖，需用数据库事务进一步完善。
- 这里没有联网安装 npm 依赖，未验证云端 OIDC 实际访问。完整上线需运行 `npm install` / `npm run build` 与 Vercel 实测。
- 原 ZIP 的 `cards_db.json` 是历史数据文件，不会自动导入 Vercel Blob；若需迁移旧卡片，需另行处理。
