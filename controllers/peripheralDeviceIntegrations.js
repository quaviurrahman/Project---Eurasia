import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';
import { MockBinding } from '@serialport/binding-mock';

export const readScaleWeight = async (req, res) => {
  try {

    const port = new SerialPort({
      path: '/dev/tty.usbserial-CYBLj137C01',
      baudRate: 9600,  // adjustable based on switches
      dataBits: 7,
      stopBits: 2,
      parity: 'none',  // adjust based on switch 3
      rtscts: true,
      autoOpen: false
    });

    // Open the port manually to handle errors
    port.open(function (err) {
      if (err) {
        return console.log('Error opening port:', err.message);
      }
      console.log('Port is open');
    });

    const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));
    const commandKey = req.body.command
    const message = Buffer.from(commandKey)


      // Write command to the port
      port.write(message, (err) => {
        if (err) {
          console.error('Error sending command:', err);
        } else {
          console.log(`Command ${message} sent`);
        }
      });

      // Listen for data
      parser.on('data', data => {
        console.log('Received data:', data);
        parseResponse(data);
      });

      // Function to parse response from the scale
      function parseResponse(data) {
        if (data.startsWith('?')) {
          console.error('Error or status message received:', data);
          // Further handling based on status byte parsing
        } else {
          console.log('Valid weight data received:', data);
        }
      }
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
}
