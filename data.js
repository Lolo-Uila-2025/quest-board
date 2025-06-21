// ---------------------------------------------------------------------
//  Student roster – give every student a short, unique id for easy look-up
// ---------------------------------------------------------------------
const students = [
    { id: "elias",   name: "Elias",   points: 120, spent: 245 },
    { id: "ili",     name: "Ili",     points: 108, spent: 60 },
    { id: "lehua",   name: "Lehua",   points: 115, spent: 70 },
    { id: "kahiau",  name: "Kahiau",  points: 109, spent: 250 },
    { id: "ku",      name: "Ku",      points: 180, spent: 200 },
    { id: "breezy",  name: "Breezy",  points: 119, spent: 70 },
    { id: "jonnie",  name: "Jonnie",  points: 149, spent: 20 }
  ];
  
  
  // ---------------------------------------------------------------------
  //  Quest catalogue – each quest now tracks who has finished it
  //  `completedBy` holds an array of student **ids** (not names)
  // ---------------------------------------------------------------------
  const quests = [
    // ─── Side Missions ─────────────────────────────────────────────
    {
      id: "variables",
      title: "Variable Basics",
      points: 5,
      day: 1,
      type: "side",
      completedBy: ["ku", "elias", "jonnie", "breezy", "ili"] 
    },
    {
      id: "serial",
      title: "Serial Monitor Basics",
      points: 5,
      day: 1,
      type: "side",
      completedBy: ["lehua", "elias", "jonnie", "breezy", "kahiau", "ku", "ili"]
    },
    {
      id: "setup-vs-loop",
      title: "Setup vs Loop",
      points: 5,
      day: 1,
      type: "side",
      completedBy: ["elias", "ku", "kahiau", "jonnie", "lehua", "breezy", "ili"]
    },
    {
      id: "infinite-serial",
      title: "Infinite Serial Loop",
      points: 5,
      day: 1,
      type: "side",
      completedBy: ["ku", "kahiau", "elias", "ili", "lehua", "breezy", "jonnie"]
    },
    {
      id: "delay",
      title: "Understanding delay()",
      points: 5,
      day: 1,
      type: "side",
      completedBy: ["ku", "elias", "kahiau", "ili", "lehua", "breezy", "jonnie"]
    },
    {
      id: "if-statements",
      title: "Learning If Statements",
      points: 5,
      day: 1,
      type: "side",
      completedBy: ["ku", "elias", "lehua", "ili", "breezy", "jonnie"]
    },
    {
      id: "if-else-tree",
      title: "If-Else Trees",
      points: 5,
      day: 1,
      type: "side",
      completedBy: ["ku", "elias"]
    },
    {
      id: "while-loops",
      title: "Learning While Loops",
      points: 5,
      day: 1,
      type: "side",
      completedBy: ["elias", "ku"]
    },
    {
      id: "for-loops",
      title: "Learning For Loops",
      points: 5,
      day: 1,
      type: "side",
      completedBy: ["ku"]
    },
    {
      id: "functions",
      title: "Writing Your Own Functions",
      points: 5,
      day: 1,
      type: "side",
      completedBy: ["breezy", "ili", "ku"]
    },
    {
      id: "function-parameters",
      title: "Function Parameters",
      points: 5,
      day: 1,
      type: "side",
      completedBy: ["ku"]
    },
    {
      id: "function-return",
      title: "Function Return Values",
      points: 5,
      day: 1,
      type: "side",
      completedBy: ["ku"]
    },
    
  
    // ─── Challenges ───────────────────────────────────────────
    {
      id: "print-every-second",
      title: "Print Every Second for 10 Seconds",
      points: 10,
      day: 1,
      type: "challenge",
      completedBy: ["elias"]
    },
    {
      id: "double-trouble",
      title: "Double Trouble",
      points: 10,
      day: 1,
      type: "challenge",
      completedBy: ["elias"]
    },
    {
      id: "odd-squad",
      title: "Odd Squad",
      points: 10,
      day: 1,
      type: "challenge",
      completedBy: ["elias"]
    },
    {
      id: "power-up",
      title: "Power Up!",
      points: 10,
      day: 1,
      type: "challenge",
      completedBy: ["elias"]
    },
    {
      id: "running-total",
      title: "Running Total",
      points: 10,
      day: 1,
      type: "challenge",
      completedBy: ["elias"]
    },
    {
      id: "is-even",
      title: "Is It Even?",
      points: 5,
      day: 1,
      type: "challenge",
      completedBy: []
    },
    {
      id: "square-it",
      title: "Square It!",
      points: 5,
      day: 1,
      type: "challenge",
      completedBy: []
    },
    {
      id: "bigger-one",
      title: "The Bigger One",
      points: 5,
      day: 1,
      type: "challenge",
      completedBy: []
    },
    {
      id: "mood-meter",
      title: "Mood Meter",
      points: 5,
      day: 3,
      type: "challenge",
      completedBy: []
    },
    {
      id: "password",
      title: "Create a Password",
      points: 10,
      day: 3,
      type: "challenge",
      completedBy: []
    },
    {
      id: "cookie-clicker",
      title: "Cookie Clicker",
      points: 15,
      day: 3,
      type: "challenge",
      completedBy: ["elias"],
      completedBonusBy: []
    },
    {
      id: "movement-alarm",
      title: "Movement Alarm",
      points: 15,
      day: 3,
      type: "challenge",
      completedBy: [],
      completedBonusBy: []
    },
    {
      id: "safe-cracker",
      title: "Safe Cracker",
      points: 15,
      day: 3,
      type: "challenge",
      completedBy: [],
      completedBonusBy: []
    },
     
    
    

    // ─── Story Quests ───────────────────────────────────────────
    {
      id: "button-input",
      title: "Connect a button to the Arduino!",
      points: 10,
      bonus: 5,
      day: 2,
      type: "story",
      completedBy: ["ku", "elias", "kahiau", "ili", "breezy", "lehua", "jonnie"],
      completedBonusBy: ["ku", "elias", "kahiau", "ili", "breezy", "lehua", "jonnie"]
    },
    {
      id: "potentiometer-input",
      title: "Connect a potentiometer to the Arduino!",
      points: 10,
      bonus: 10,
      day: 2,
      type: "story",     
      completedBy: ["ku", "elias", "kahiau", "ili", "breezy", "lehua", "jonnie"],
      completedBonusBy: ["ku", "elias", "kahiau", "ili", "breezy", "lehua"]
    },
    {
      id: "joystick-input",
      title: "Connect a joystick to the Arduino!",
      points: 10,
      bonus: 10,
      day: 2,
      type: "story",
      completedBy: ["ku", "elias", "kahiau", "ili", "breezy", "lehua", "jonnie"],
      completedBonusBy: ["jonnie", "ku", "elias", "kahiau", "breezy"]
    },
    {
      id: "rgb-led",
      title: "RGB LED Colors",
      points: 10,
      bonus: 10,
      day: 2,
      type: "story",
      completedBy: ["ku", "elias", "kahiau", "ili", "breezy", "lehua", "jonnie"],
      completedBonusBy: ["jonnie", "elias", "ku", "kahiau", "lehua", "breezy"]
    },
    {
      id: "color-picker",
      title: "Color Picker",
      points: 20,
      day: 2,
      type: "boss",
      completedBy: ["ku", "elias", "kahiau", "breezy", "lehua", "jonnie", "ili"],
    },
    {
      id: "buzzer",
      title: "Passive Buzzer",
      points: 5,
      bonus: 5,
      day: 2,
      type: "story",
      completedBy: ["jonnie", "ku", "elias"],
      completedBonusBy: ["jonnie", "ku", "elias"]
    },
    {
      id: "ultrasonic-sensor",
      title: "Ultrasonic Sensor",
      points: 10,
      bonus: 10,
      day: 2,
      type: "story",
      completedBy: ["ku", "elias", "breezy", "lehua", "jonnie", "ili", "kahiau"],
      completedBonusBy: ["ku", "elias"]
    },
    {
      id: "lcd-display",
      title: "LCD Display",
      points: 20,
      day: 2,
      type: "story",
      completedBy: ["ku", "elias", "breezy", "lehua", "jonnie", "ili", "kahiau"],
    },
    {
      id: "menu-interface",
      title: "Menu Interface",
      points: 15,
      bonus: 5,
      day: 3,
      type: "story",
      completedBy: ["lehua", "breezy", "ili", "jonnie", "ku", "elias", "kahiau"],
      completedBonusBy: ["ku", "jonnie"]
    },
    {
      id: "adventure-game",
      title: "Choose Your Own Adventure Game", 
      points: 50,
      day: 3,
      type: "boss",
      completedBy: ["lehua", "elias", "ku", "kahiau", "breezy", "ili"],
    },
    {
      id: "random-led",
      title: "Random LED Brightness",
      points: 15,
      bonus: 5,
      day: 3,
      type: "story",
      completedBy: [],
      completedBonusBy: []
    },
    {
      id: "higher-lower",
      title: "Higher or Lower",
      points: 10,
      day: 3,
      type: "story",
      completedBy: [],
      completedBonusBy: []
    },
    {
      id: "monitor-reefs",
      title: "Monitor the Reefs!",
      points: 10,
      bonus: 25,
      day: 4,
      type: "story",
      completedBy: ["elias", "ku", "kahiau", "jonnie", "breezy", "ili", "lehua"],
      completedBonusBy: ["ku", "jonnie", "elias"]
    },
    {
      id: "release-the-fish",
      title: "Release the Fish!",
      points: 30,
      day: 4,
      type: "story",
      completedBy: ["elias", "ku", "kahiau", "jonnie", "breezy", "ili", "lehua"]
    },
    {
  id: "ai-hand-classifier",
  title: "Teachable Machine: Hand Signs",
  points: 10,
  day: 5,
  type: "story",
  completedBy: ["kahiau", "elias", "ku", "jonnie"]
  },
{
  id: "ai-student-teacher-detector",
  title: "Teachable Machine: Haumana or Kumu?",
  points: 10,
  day: 5,
  type: "story",
  completedBy: ["elias"]
},
{
  id: "ai-pose-spell-name",
  title: "Teachable Machine: Spell Your Name with Poses",
  points: 10,
  day: 5,
  type: "story",
  completedBy: []
},
{
  id: "ai-mood-classifier",
  title: "Teachable Machine: Mood Classifier",
  points: 10,
  day: 5,
  type: "story",
  completedBy: []
},
{
  id: "ai-custom-image-classifier",
  title: "Teachable Machine: Internet Images",
  points: 20,
  day: 5,
  type: "story",
  completedBy: []
},

    
    
  ];
  