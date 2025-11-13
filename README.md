## device-info-kit

Simple Node.js module to get CPU, RAM, Storage, and OS information.
Developed by KHara-Studio


---

## Installation

npm install device-info-kit

or use with pnpm / yarn:

pnpm add device-info-kit
# or
yarn add device-info-kit


---

## Usage

import getDeviceInfo from "device-info-kit";

const main = async () => {
  const info = await getDeviceInfo();
  console.log(info);
};

main();


---

## Example Output

{
  device: 'localhost',
  os: {
    platform: 'android',
    release: '4.19.191-perf-g753965064ab0',
    architecture: 'arm64'
  },
  cpu: { model: 'MT6769V/CZ', cores: 8, speedMHz: 1700 },
  memory: { totalGB: '3.65', freeGB: '1.24', usageGB: '2.41' },
  storage: { total: '107G', used: '83G', free: '25G' }
}


---

## Local Testing

# Create a new file called test.js:

import getDeviceInfo from "./index.js";

const info = await getDeviceInfo();
console.log(info);

# Then run it with Node:

node test.js

# or use the REPL:

const { default: getDeviceInfo } = await import("./index.js");
const info = await getDeviceInfo();
console.log(info);


---

## Notes

Works on Linux, macOS, Windows, and Termux (Android).

Storage info may vary depending on platform permission.

If some values show as "unknown", try running with elevated privileges or use termux-api.

##

---

## License

MIT © 2025 KHara-Studio
