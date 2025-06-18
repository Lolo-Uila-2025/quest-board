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
    // ─── Missions ─────────────────────────────────────────────
    {
      id: "variables",
      title: "Variable Basics",
      points: 5,
      day: 1,
      type: "mission",
      completedBy: ["ku", "elias"]
    },
    {
      id: "serial",
      title: "Serial Monitor Basics",
      points: 5,
      day: 1,
      type: "mission",
      completedBy: ["lehua", "elias", "jonnie", "breezy", "kahiau", "ku", "ili"]
    },
    {
      id: "setup-vs-loop",
      title: "Setup vs Loop",
      points: 5,
      day: 1,
      type: "mission",
      completedBy: ["elias", "ku", "kahiau"]
    },
    {
      id: "infinite-serial",
      title: "Infinite Serial Loop",
      points: 5,
      day: 1,
      type: "mission",
      completedBy: ["ku", "kahiau", "elias", "ili", "lehua", "breezy"]
    },
    {
      id: "delay",
      title: "Understanding delay()",
      points: 5,
      day: 1,
      type: "mission",
      completedBy: ["ku", "elias", "kahiau", "ili"]
    },
    {
      id: "if-statements",
      title: "Learning If Statements",
      points: 5,
      day: 1,
      type: "mission",
      completedBy: ["ku", "elias"]
    },
    {
      id: "if-else-tree",
      title: "If-Else Trees",
      points: 5,
      day: 1,
      type: "mission",
      completedBy: []
    },
    {
      id: "while-loops",
      title: "Learning While Loops",
      points: 5,
      day: 1,
      type: "mission",
      completedBy: []
    },
    {
      id: "for-loops",
      title: "Learning For Loops",
      points: 5,
      day: 1,
      type: "mission",
      completedBy: []
    },
    {
      id: "functions",
      title: "Writing Your Own Functions",
      points: 5,
      day: 1,
      type: "mission",
      completedBy: []
    },
    {
      id: "function-parameters",
      title: "Function Parameters",
      points: 5,
      day: 1,
      type: "mission",
      completedBy: []
    },
    {
      id: "function-return",
      title: "Function Return Values",
      points: 5,
      day: 1,
      type: "mission",
      completedBy: []
    },
  
    // ─── Challenges ───────────────────────────────────────────
    {
      id: "print-every-second",
      title: "Print Every Second for 10 Seconds",
      points: 10,
      day: 1,
      type: "challenge",
      completedBy: []
    },
    {
      id: "double-trouble",
      title: "Double Trouble",
      points: 10,
      day: 1,
      type: "challenge",
      completedBy: []
    },
    {
      id: "odd-squad",
      title: "Odd Squad",
      points: 10,
      day: 1,
      type: "challenge",
      completedBy: []
    },
    {
      id: "power-up",
      title: "Power Up!",
      points: 10,
      day: 1,
      type: "challenge",
      completedBy: []
    },
    {
      id: "running-total",
      title: "Running Total",
      points: 10,
      day: 1,
      type: "challenge",
      completedBy: []
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
    }
  ];
  