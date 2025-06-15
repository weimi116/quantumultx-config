// Subscription Info Notify Script
let info = $persistentStore.read("sub_info");
let time = new Date().toLocaleString();
$notify("📡 订阅更新提醒", `${time}`, info || "订阅信息获取失败");
$done();