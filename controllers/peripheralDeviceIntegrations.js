import SerialPort from "serialport"
import Readline from "@serialport/parser-readline"

export const readScaleWeight = async (req,res) => {
   try {
    // Replace '/dev/ttyUSB0' with the correct port for your scale
    const port = new SerialPort('/dev/ttyUSB0', {
    baudRate: 9600, // Match this to your scale's specifications
  });
  
  const parser = port.pipe(new Readline({ delimiter: '\r\n' }));
  
  port.on('error', (err) => {
    console.error('Error: ', err.message);
  });
  
  parser.on('data', (data) => {
    console.log('Weight:', data);
    // Integrate the data into your POS application as needed
  });
  
   }catch (err) {
    res.status(400).json({err: err.message})
   } 
}