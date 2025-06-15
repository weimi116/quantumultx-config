// Welcome Notification Script
let body = {
  title: "👋 Quantumult X 启动成功",
  content: "已加载远程配置：weimi116",
  icon: "qrcode",
};
$notify(body.title, body.content);
$done();