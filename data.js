// ---------------------------------------------------------------------
//  Student roster – give every student a short, unique id for easy look-up
// ---------------------------------------------------------------------
const students = [
    { id: "elias",   name: "Elias",   points: 0, spent: 0 },
    { id: "ili",     name: "Ili",     points: 0, spent: 0 },
    { id: "lehua",   name: "Lehua",   points: 0, spent: 0 },
    { id: "kahiau",  name: "Kahiau",  points: 0, spent: 0 },
    { id: "ku",      name: "Ku",      points: 0, spent: 0 },
    { id: "breezy",  name: "Breezy",  points: 0, spent: 0 },
    { id: "jonnie",  name: "Jonnie",  points: 0, spent: 0 }
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
      completedBy: ["elias", "ku", "kahiau", "jonnie"]
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
    {
      id: "mood-meter",
      title: "Mood Meter",
      points: 5,
      day: 2,
      type: "side",
      completedBy: []
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
      id: "password",
      title: "Create a Password",
      points: 15,
      day: 2,
      type: "challenge",
      completedBy: []
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
      completedBonusBy: []
    },
    {
      id: "rgb-led",
      title: "RGB LED Colors",
      points: 10,
      bonus: 10,
      day: 2,
      type: "story",
      completedBy: [],
      completedBonusBy: []
    },
    {
      id: "color-picker",
      title: "Color Picker",
      points: 20,
      day: 2,
      type: "boss",
      completedBy: [],
    },
    {
      id: "buzzer",
      title: "Passive Buzzer",
      points: 5,
      bonus: 5,
      day: 2,
      type: "story",
      completedBy: [],
      completedBonusBy: []
    },
    {
      id: "ultrasonic-sensor",
      title: "Ultrasonic Sensor",
      points: 10,
      bonus: 10,
      day: 2,
      type: "story",
      completedBy: [],
      completedBonusBy: []
    },
    {
      id: "lcd-display",
      title: "LCD Display",
      points: 20,
      day: 2,
      type: "story",
      completedBy: [],
    },
    {
      id: "adventure-game",
      title: "Choose Your Own Adventure Game", 
      points: 50,
      day: 2,
      type: "boss",
      completedBy: [],
    },
    
  ];
  