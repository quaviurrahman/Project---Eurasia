import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';
import { MockBinding } from '@serialport/binding-mock';

export const readScaleWeight = async (req, res) => {
  try {
// Function to read weight from the serial port
function getLbs() {
  return new Promise((resolve, reject) => {
    const comPort = new SerialPort({
      path: '/dev/tty.usbserial-CYBLj137C01',
      baudRate: 9600,
      parity: 'none',
      dataBits: 8,
      stopBits: 1,
      flowControl: 'none'
    });

    const parser = comPort.pipe(new ReadlineParser({ delimiter: '\r\n' }));
    comPort.on('open', () => {
      console.log('Serial Port opened');

      // Send commands to the scale
      comPort.write('\x02'); // STX (Start of Text)
      console.log("stx sent")
      setTimeout(() => comPort.write('P'), 1000); // Command to read weight
      console.log("W sent")
      setTimeout(() => comPort.write('\x0D'), 2000); // CR (Carriage Return)
      console.log("CR sent")
    });
    
    // Handle the data received from the scale
    parser.on('data', line => {
      console.log("Awaiting data....")
      comPort.close();
      console.log("Port Closed")
      const trimmedLine = line.trim();
      if (!isNaN(parseFloat(trimmedLine))) {
        resolve(trimmedLine);
      } else {
        reject('Received data is not a number');
      }
    });

    // Error handling
    comPort.on('error', (err) => {
      reject(err.message);
    });
  });
}

// Usage of the getLbs function
getLbs().then(weight => {
  console.log(`Weight: ${weight} lbs`);
}).catch(error => {
  console.error('Error:', error);
});
    
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
}
