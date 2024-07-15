
import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';
import { MockBinding } from '@serialport/binding-mock';



export const readScaleWeight = async (req, res) => {
  try {
    // Create the mock port
    MockBinding.createPort('/dev/ttyUSB0', { echo: true, record: true });

    const port = new SerialPort({
      path: '/dev/ttyUSB0',
      baudRate: 9600,
      binding: MockBinding
    });

    const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

    port.on('error', (err) => {
      console.error('Error:', err.message);
    });

    parser.on('data', (data) => {
      console.log('Received data:', data);
    });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
}