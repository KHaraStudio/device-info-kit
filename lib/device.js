import os from "os";

export default async function getDeviceName() {
  try {
    return os.hostname() || "Unknown Device";
  } catch {
    return "Unknown Device";
  }
}
