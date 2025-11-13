import getCPUInfo from "./lib/cpu.js";
import getMemoryInfo from "./lib/memory.js";
import getStorageInfo from "./lib/storage.js";
import getOSInfo from "./lib/osinfo.js";
import getDeviceName from "./lib/device.js";

export default async function getDeviceInfo() {
  return {
    device: await getDeviceName(),
    os: await getOSInfo(),
    cpu: await getCPUInfo(),
    memory: await getMemoryInfo(),
    storage: await getStorageInfo(),
  };
}
