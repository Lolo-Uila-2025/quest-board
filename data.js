// ---------------------------------------------------------------------
//  Student roster – give every student a short, unique id for easy look-up
// ---------------------------------------------------------------------
const students = [
    { id: "alice",   name: "Alice",   points: 0, spent: 0 },
    { id: "bob",     name: "Bob",     points: 0, spent: 0 },
    { id: "charlie", name: "Charlie", points: 0, spent: 0 },
    { id: "diana",   name: "Diana",   points: 0, spent: 0 },
    { id: "ethan",   name: "Ethan",   points: 0, spent: 0 },
    { id: "fiona",   name: "Fiona",   points: 0, spent: 0 },
    { id: "george",  name: "George",  points: 0, spent: 0 },
    { id: "hannah",  name: "Hannah",  points: 0, spent: 0 }
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
      completedBy: ["alice"]
    },
    {
      id: "serial",
      title: "Serial Monitor Basics",
      points: 5,
      day: 1,
      type: "mission",
      completedBy: ["alice"]
    },
    {
      id: "setup-vs-loop",
      title: "Setup vs Loop",
      points: 5,
      day: 1,
      type: "mission",
      completedBy: ["alice"]
    },
    {
      id: "infinite-serial",
      title: "Infinite Serial Loop",
      points: 5,
      day: 1,
      type: "mission",
      completedBy: ["alice"]
    },
    {
      id: "delay",
      title: "Understanding delay()",
      points: 5,
      day: 1,
      type: "mission",
      completedBy: ["alice"]
    },
    {
      id: "if-statements",
      title: "Learning If Statements",
      points: 5,
      day: 1,
      type: "mission",
      completedBy: ["alice"]
    },
    {
      id: "if-else-tree",
      title: "If-Else Trees",
      points: 5,
      day: 1,
      type: "mission",
      completedBy: ["alice"]
    },
    {
      id: "while-loops",
      title: "Learning While Loops",
      points: 5,
      day: 1,
      type: "mission",
      completedBy: ["alice"]
    },
    {
      id: "for-loops",
      title: "Learning For Loops",
      points: 5,
      day: 1,
      type: "mission",
      completedBy: ["alice"]
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
  