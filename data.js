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
      id: "cleanup",
      title: "Classroom Cleanup",
      points: 10,
      completedBy: ["alice", "george"]      // sample data
    },
    {
      id: "riddle",
      title: "Weekly Riddle",
      points: 5,
      completedBy: ["charlie"]
    },
    {
      id: "extra-credit",
      title: "Extra Credit Assignment",
      points: 15,
      completedBy: []                       // none yet
    }
  ];
  