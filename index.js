import { fileURLToPath } from "url";
import path from "path";
import cron from "node-cron";
import { spawn } from "child_process";

/**DB Name */
const DB_NAME = "nodeRestShop";

/**replicating __dirname feature in ES6 module */
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**Back up folder and filename.
 * optional argument --host --port
 */
const BACKUP_PATH = path.join(__dirname, "backup", `${DB_NAME}.gzip`);

/**cron job scheduled, to back up every 5 sec.
 * For more information visit "https://crontab.guru/examples.html"
 */
cron.schedule("*/5 * * * * *", () => backupDB());

/** Function to do back up. */
const backupDB = () => {
  /**spawn child process to execute command, you can use exec
   * provide all string in one variable and use that in exec
   */
  const child = spawn("mongodump", [
    `--db=${DB_NAME}`,
    `--archive=${BACKUP_PATH}`,
    "--gzip",
  ]);

  /**handling standart output */
  child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  /**handling standart error */
  child.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
  });

  /**handling error */
  child.on("error", (error) => {
    console.log(`error: ${error}`);
  });

  /**handling exit */
  child.on("exit", (code, signal) => {
    if (code) console.log(`process exited with a code: ${code}`);
    else if (signal) console.log(`process exited with a signal: ${signal}`);
    else console.log("Backup is successfull.");
  });
};
