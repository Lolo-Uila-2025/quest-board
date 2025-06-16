// ---------------------------------------------------------------------
//  Student roster – give every student a short, unique id for easy look-up
// ---------------------------------------------------------------------
const students = [
    { id: "alice",   name: "Alice",   points: 120 },
    { id: "bob",     name: "Bob",     points:  85 },
    { id: "charlie", name: "Charlie", points:  95 },
    { id: "diana",   name: "Diana",   points: 110 },
    { id: "ethan",   name: "Ethan",   points:  70 },
    { id: "fiona",   name: "Fiona",   points: 105 },
    { id: "george",  name: "George",  points:  90 },
    { id: "hannah",  name: "Hannah",  points: 130 }
  ];
  
  // ---------------------------------------------------------------------
  //  Quest catalogue – each quest now tracks who has finished it
  //  `completedBy` holds an array of student **ids** (not names)
  // ---------------------------------------------------------------------
  const quests = [
    {
      id: "variables",
      title: "Variable Basics",
      points: 5,
      completedBy: ["charlie"]
    },
    {
        id: "serial",
        title: "Serial Monitor Basics",
        points: 5,
        completedBy: []
    },
    {
        id: "setup-vs-loop",
        title: "Setup vs Loop",
        points: 5,
        completedBy: []
    },
    {
        id: "infinite-serial",
        title: "Infinite Serial Loop",
        points: 5,
        completedBy: []
    },
    {
        id: "delay",
        title: "Understanding delay()",
        points: 5,
        completedBy: []
    },
    {
        id: "if-statements",
        title: "Learning If Statements",
        points: 5,
        completedBy: []
    },      
    {
        id: "if-else-tree",
        title: "If-Else Trees",
        points: 5,
        completedBy: []
    },

  

  ];
  