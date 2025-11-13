import { execSync } from "child_process";

export default function getStorageInfo() {
  try {
    const output = execSync("df -h /data").toString();
    const lines = output.trim().split("\n");
    const parts = lines[1].split(/\s+/);

    return {
      total: parts[1],
      used: parts[2],
      free: parts[3],
    };
  } catch {
    return {
      total: "unknown",
      used: "unknown",
      free: "unknown",
    };
  }
}
