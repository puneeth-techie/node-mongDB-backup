import { fileURLToPath } from "url";
import path from "path";
import cron from "node-cron";
import { spawn } from "child_process";

const DB_NAME = "nodeRestShop";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BACKUP_PATH = path.join(__dirname, "backup", `${DB_NAME}.gzip`);

cron.schedule("*/5 * * * * *", () => backupDB());

const backupDB = () => {
  const child = spawn("mongodump", [
    `--db=${DB_NAME}`,
    `--archive=${BACKUP_PATH}`,
    "--gzip",
  ]);
  child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });
  child.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
  });
  child.on("error", (error) => {
    console.log(`error: ${error}`);
  });
  child.on("exit", (code, signal) => {
    if (code) console.log(`process exited with a code: ${code}`);
    else if (signal) console.log(`process exited with a signal: ${signal}`);
    else console.log("Backup is successfull.");
  });
};
