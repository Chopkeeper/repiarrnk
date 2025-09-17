const cron = require('node-cron');
const backup = require('../utils/backup');

// สำรองข้อมูลทุกวันตอนตี 2
cron.schedule('0 2 * * *', async () => {
    console.log('🕑 Running daily backup...');
    await backup.runBackup();
});
