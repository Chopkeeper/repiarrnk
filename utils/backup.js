const fs = require('fs-extra');
const path = require('path');
const mongoose = require('mongoose');

const backupDir = path.join(__dirname, '../backups');

exports.runBackup = async () => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupPath = path.join(backupDir, `backup-${timestamp}.json`);

    const collections = mongoose.connection.collections;
    const data = {};

    for (const name in collections) {
        const docs = await collections[name].find().toArray();
        data[name] = docs;
    }

    await fs.ensureDir(backupDir);
    await fs.writeJson(backupPath, data, { spaces: 2 });
    console.log(`✅ Backup created at ${backupPath}`);
};
