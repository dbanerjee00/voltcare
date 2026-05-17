const imgs = {
  arduino: "/assets/images/products/arduino.png",
  pi: "/assets/images/products/pi.png",
  pico: "/assets/images/products/pico.png",
  led: "/assets/images/products/led.png",
  breadboard: "/assets/images/products/breadboard.png",
  resistor: "/assets/images/products/resistor.png",
  capacitor: "/assets/images/products/capacitor.png",
  transistor: "/assets/images/products/transistor.png",
  multimeter: "/assets/images/products/multimeter.png",
  soldering: "/assets/images/products/soldering.png",
  stepper: "/assets/images/products/stepper.png",
  servo: "/assets/images/products/servo.png",
  pir: "/assets/images/products/pir.png",
  ultrasonic: "/assets/images/products/ultrasonic.png",
  nodemcu: "/assets/images/products/nodemcu.png",
  esp32: "/assets/images/products/esp32.png",
  lcd: "/assets/images/products/lcd.png",
  battery: "/assets/images/products/battery.png",
  drone: "/assets/images/products/drone.png",
  robot: "/assets/images/products/robot.png"
};

// Global products list to be used across the app
export const productsData = [
  { id: 'p1', img: imgs.arduino, img1: imgs.arduino, img2: imgs.arduino, title: "Arduino Uno R3", category: "Microcontrollers", rating: 5, price: 1200, oldPrice: 2000, desc: "The classic Arduino Uno R3. Perfect for beginners and advanced users alike to build electronic projects.", badge: "sale", badgeClass: "angle black" },
  { id: 'p2', img: imgs.pi, img1: imgs.pi, img2: imgs.pi, title: "Raspberry Pi 4 8GB", category: "Microcontrollers", rating: 4.5, price: 6500, oldPrice: 8000, desc: "A powerful microcomputer capable of running full desktop environments and complex servers." },
  { id: 'p3', img: imgs.led, img1: imgs.led, img2: imgs.led, title: "5mm Red LEDs (Pack of 100)", category: "Passives", rating: 4.5, price: 240, oldPrice: 400, desc: "Bright 5mm Red LEDs suitable for breadboarding and custom PCB indicators.", badge: "15%", badgeClass: "" },
  { id: 'p4', img: imgs.breadboard, img1: imgs.breadboard, img2: imgs.breadboard, title: "Breadboard 830 Point", category: "Passives", rating: 5, price: 320, oldPrice: 480, desc: "Solderless breadboard with 830 tie points. Essential for prototyping." },
  { id: 'p5', img: imgs.resistor, img1: imgs.resistor, img2: imgs.resistor, title: "10K Ohm Resistor Pack", category: "Passives", rating: 4, price: 160, oldPrice: 400, desc: "Pack of 100 10K Ohm 1/4W through-hole resistors.", badge: "new", badgeClass: "angle pink" },
  { id: 'p6', img: imgs.capacitor, img1: imgs.capacitor, img2: imgs.capacitor, title: "100uF Electrolytic Capacitor", category: "Passives", rating: 4, price: 120, oldPrice: 240, desc: "Electrolytic capacitors for power smoothing and filtering." },
  { id: 'p7', img: imgs.transistor, img1: imgs.transistor, img2: imgs.transistor, title: "NPN Transistor BC547", category: "Active Components", rating: 4.5, price: 320, oldPrice: 640, desc: "Standard general purpose NPN bipolar junction transistors." },
  { id: 'p8', img: imgs.esp32, img1: imgs.esp32, img2: imgs.esp32, title: "ESP32 Development Board", category: "Microcontrollers", rating: 5, price: 640, oldPrice: 1200, desc: "Powerful WiFi and Bluetooth combo chip for IoT projects.", badge: "sale", badgeClass: "angle black" },
  { id: 'p9', img: imgs.multimeter, img1: imgs.multimeter, img2: imgs.multimeter, title: "Digital Multimeter", category: "Tools", rating: 4.5, price: 1200, oldPrice: 2000, desc: "Auto-ranging digital multimeter for measuring voltage, current, and resistance." },
  { id: 'p10', img: imgs.soldering, img1: imgs.soldering, img2: imgs.soldering, title: "Soldering Iron 60W", category: "Tools", rating: 4, price: 960, oldPrice: 1600, desc: "Adjustable temperature soldering iron for precise component mounting." },
  { id: 'p11', img: imgs.stepper, img1: imgs.stepper, img2: imgs.stepper, title: "Stepper Motor NEMA 17", category: "Motors", rating: 4.5, price: 1120, oldPrice: 1600, desc: "High torque NEMA 17 stepper motor for 3D printers and CNC machines." },
  { id: 'p12', img: imgs.drone, img1: imgs.drone, img2: imgs.drone, title: "DIY Quadcopter Drone Kit", category: "Kits", rating: 5, price: 8500, oldPrice: 10000, desc: "Complete kit to build your own drone. Includes frame, motors, ESCs, and flight controller.", badge: "hot", badgeClass: "angle red" },
  { id: 'p13', img: imgs.robot, img1: imgs.robot, img2: imgs.robot, title: "Robotic Arm Kit", category: "Kits", rating: 4.5, price: 4500, oldPrice: 5500, desc: "4-axis robotic arm kit powered by servo motors. Great for learning kinematics." },
  { id: 'p14', img: imgs.lcd, img1: imgs.lcd, img2: imgs.lcd, title: "OLED Display 0.96 inch", category: "Displays", rating: 5, price: 400, oldPrice: 720, desc: "Crisp and bright I2C OLED display for microcontrollers." },
  { id: 'p15', img: imgs.battery, img1: imgs.battery, img2: imgs.battery, title: "Li-ion Battery 18650", category: "Power", rating: 4.5, price: 320, oldPrice: 560, desc: "Rechargeable 3.7V 18650 lithium-ion cell." },
  { id: 'p16', img: imgs.nodemcu, img1: imgs.nodemcu, img2: imgs.nodemcu, title: "NodeMCU ESP8266", category: "Microcontrollers", rating: 4, price: 480, oldPrice: 800, desc: "Popular WiFi enabled development board." }
];

export const banners = [
  { id: 1, img: imgs.esp32, subtitle: "Trending Component", title: "Latest Microcontroller Boards", pricePrefix: "starting at ₹ ", priceAmount: "399", priceSuffix: "", btnText: "Shop now" },
  { id: 2, img: imgs.multimeter, subtitle: "Trending Tools", title: "Precision Multimeters", pricePrefix: "starting at ₹ ", priceAmount: "1999", priceSuffix: "", btnText: "Shop now" },
  { id: 3, img: imgs.drone, subtitle: "Clearance Sale", title: "Starter Kits & Modules", pricePrefix: "starting at ₹ ", priceAmount: "1599", priceSuffix: "", btnText: "Shop now" }
];

export const categoriesRow = [
  { id: 1, icon: "hardware-chip-outline", title: "Microcontrollers", amount: "53" },
  { id: 2, icon: "analytics-outline", title: "Passives", amount: "58" },
  { id: 3, icon: "wifi-outline", title: "Sensors", amount: "68" },
  { id: 4, icon: "flash-outline", title: "Power Supplies", amount: "84" },
  { id: 5, icon: "bulb-outline", title: "Displays", amount: "35" },
  { id: 6, icon: "git-network-outline", title: "Cables", amount: "16" },
  { id: 7, icon: "cog-outline", title: "Motors", amount: "27" },
  { id: 8, icon: "construct-outline", title: "Tools", amount: "39" }
];

export const bestSellers = productsData.slice(0, 4);
export const newArrivals = productsData.slice(4, 12);
export const trending = productsData.slice(7, 15);
export const topRated = [productsData[13], productsData[14], productsData[3], productsData[10], productsData[2], productsData[8], productsData[6], productsData[7]];

export const dealsOfDay = [
  { id: 1, productRef: 'p12', img: imgs.drone, title: "DIY Quadcopter Drone Kit", desc: "Complete kit to build your own drone. Includes frame, motors, ESCs, and flight controller.", price: "₹8500", oldPrice: "₹10000", sold: 20, available: 40 },
  { id: 2, productRef: 'p2', img: imgs.pi, title: "Raspberry Pi 4 Ultimate Kit", desc: "Everything you need to get started with Raspberry Pi 4. Includes case, power supply, and SD card.", price: "₹6500", oldPrice: "₹8000", sold: 15, available: 40 }
];

export const newProducts = productsData.slice(0, 12);

export const blogs = [
  { id: 1, img: imgs.robot, category: "Projects", title: "How to Build Your First Arduino Robot in 2024.", author: "Admin", date: "Apr 06, 2024", content: ["Building an Arduino robot is an exciting and rewarding project that introduces you to the worlds of electronics, programming, and mechanics. In 2024, the availability of high-quality, affordable components has never been better.", "First, you'll need a basic chassis, two DC motors, an L298N motor driver, an Arduino Uno, and a battery pack. Start by assembling the chassis and mounting the motors. Connect the motors to the driver board, and then wire the driver to your Arduino's digital pins.", "Next, it's time to write the code. Using the Arduino IDE, you can easily control the digital pins to spin the motors forward, backward, or in opposite directions to turn. Add an ultrasonic sensor later to give your robot obstacle-avoidance capabilities!"] },
  { id: 2, img: imgs.breadboard, category: "Tutorials", title: "Understanding I2C and SPI Communication Protocols.", author: "Robin", date: "Jan 18, 2024", content: ["When working with microcontrollers and external modules like sensors or displays, you often need a reliable way for them to talk to each other. Two of the most popular serial communication protocols are I2C and SPI.", "I2C (Inter-Integrated Circuit) requires only two wires: SDA (data) and SCL (clock). It's great for connecting multiple devices on the same bus, but it's relatively slow. It's ideal for simple sensors and OLED displays.", "SPI (Serial Peripheral Interface), on the other hand, requires four wires: MOSI, MISO, SCK, and CS. It is much faster than I2C and operates in full-duplex mode. Use SPI for SD card readers, TFT displays, and applications requiring high-speed data transfer."] },
  { id: 3, img: imgs.led, category: "Electronics", title: "Choosing the Right Resistor for Your LED Projects.", author: "Selsa", date: "Feb 10, 2024", content: ["One of the most common mistakes beginners make is connecting an LED directly to a power source without a resistor. This usually results in a burnt-out LED and a quick lesson in current limiting.", "To choose the right resistor, you need to know Ohm's Law: V = I × R. First, find the forward voltage (Vf) and typical current (If) of your LED. Subtract the LED's forward voltage from your power supply voltage to find the voltage the resistor needs to drop.", "For example, if you have a 5V supply and a red LED (Vf = 2V, If = 20mA), the resistor must drop 3V. R = 3V / 0.02A = 150 Ohms. Always round up to the nearest standard resistor value, like 220 Ohms, to be safe!"] },
  { id: 4, img: imgs.esp32, category: "Microcontrollers", title: "ESP32 vs ESP8266: Which One Should You Choose?", author: "Pawar", date: "Mar 15, 2024", content: ["The ESP8266 revolutionized the DIY IoT world by providing incredibly cheap Wi-Fi connectivity. However, its successor, the ESP32, brought a massive leap in performance and features.", "The ESP32 boasts a dual-core processor, built-in Bluetooth (Classic and BLE), more GPIO pins, hardware encryption, and significantly more RAM. If you are building a complex smart home device, a web server, or need Bluetooth, the ESP32 is the absolute winner.", "However, the ESP8266 is still relevant! It is slightly cheaper, consumes less power in some deep sleep scenarios, and is perfectly adequate for simple Wi-Fi sensor nodes. For basic projects, the 8266 remains a solid choice, but for anything demanding, go with the ESP32."] },
];

export const sidebarCategories = [
  { title: "Components", icon: "hardware-chip-outline", items: [{ name: "Passives", stock: "300" }, { name: "Active Components", stock: "60" }, { name: "Microcontrollers", stock: "50" }] },
  { title: "Sensors", icon: "wifi-outline", items: [{ name: "Temperature", stock: "45" }, { name: "Motion", stock: "75" }, { name: "Light", stock: "35" }] },
  { title: "Modules", icon: "git-network-outline", items: [{ name: "Displays", stock: "46" }, { name: "Motors", stock: "73" }, { name: "Power", stock: "61" }] },
  { title: "Tools", icon: "construct-outline", items: [{ name: "Tools", stock: "12 pcs" }, { name: "Kits", stock: "8 pcs" }] }
];
