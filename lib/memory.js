import os from "os";

export default async function getMemoryInfo() {
  const total = os.totalmem() / 1024 / 1024 / 1024;
  const free = os.freemem() / 1024 / 1024 / 1024;
  return {
    totalGB: total.toFixed(2),
    freeGB: free.toFixed(2),
    usageGB: (total - free).toFixed(2),
  };
}
