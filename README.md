# NineControl
Next.js Web Bluetooth dashboard for compatible Ninebot scooters.

## Run
npm install
npm run dev

Open the HTTPS deployment in Chrome/Edge. Web Bluetooth requires a secure context and a user gesture.

## Firmware safety
This project intentionally does not pretend to flash firmware. A real firmware writer must implement and verify the exact bootloader/IAP protocol for each supported model and firmware generation before sending data. The BLE transport layer is real; the flash action currently performs validation only.
