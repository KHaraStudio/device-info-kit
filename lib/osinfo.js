import os from "os";

export default async function getOSInfo() {
  return {
    platform: os.platform(),
    release: os.release(),
    architecture: os.arch(),
  };
}
