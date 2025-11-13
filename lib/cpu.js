import { execSync } from "child_process";
import os from "os";

export default function getCPUInfo() {
  let cpuModel = "Unknown CPU";
  try {
    const cpuInfo = execSync("cat /proc/cpuinfo").toString();
    const match = cpuInfo.match(/Hardware\s*:\s*(.+)/);
    if (match) cpuModel = match[1].trim();
  } catch {
    cpuModel = os.cpus()?.[0]?.model || "Unknown CPU";
  }

  const cores = os.cpus()?.length || 1;
  const speedMHz = os.cpus()?.[0]?.speed || 0;

  return { model: cpuModel, cores, speedMHz };
}
