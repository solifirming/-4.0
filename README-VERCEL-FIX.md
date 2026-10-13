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
- 修改后运行 `npm test`、`npm run lint` 和 `npm run build`，部署后还需使用独立无缓存浏览器会话验证分享。
- 原 ZIP 的 `cards_db.json` 是历史数据文件，不会自动导入 Vercel Blob；若需迁移旧卡片，需另行处理。

## 照片同步与分享

- 主页面统一读取和保存整张卡片；照片组件不再独立请求云端或回退到其他卡片的照片缓存。
- 编辑页面先显示当前卡片的本地备份，再以云端结果为准。云端读取失败时禁止照片编辑和分享，避免未读取原卡片就覆盖数据。
- 分享页面从云端读取；空数组表示零张照片，旧版预设照片不会自动恢复，用户替换过的照片会保留。
- 新增照片时系统文件选择框支持多选，整批按选择顺序处理完成后更新；没有五张上限，可以删除最后一张。
- 同一卡片的保存请求串行执行。分享提交包含照片的完整快照，并等待服务器保存和回读核对成功后才显示链接；复制成功还需等待剪贴板确认。
- Vercel 的读取使用 `get(..., { access: 'private', useCache: false })`，避免私有 Blob 的 CDN 缓存返回旧卡片。接口响应同时设置 `Cache-Control: no-store`。
- 照片数量没有固定限制，但图片仍以 Base64 保存在卡片 JSON 中，总请求大小仍受 Vercel 平台及接口的约 3.5MB 限制，超限会明确报错并阻止分享。

验收应包括一次上传六张不同照片、在独立无缓存手机尺寸会话打开同一分享链接并核对内容和顺序、删除全部后再次分享，以及模拟保存失败时不显示成功弹窗。只刷新原浏览器不足以证明跨设备分享正确。
