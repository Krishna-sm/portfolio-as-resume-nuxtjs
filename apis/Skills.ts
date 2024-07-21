// export const items= {
//     frontend:["React Js","Angular Js","Vue Js","Next Js","Nuxt Js","Svelete"],
//     Backend:["Node Js","Flask","Django Rest Framework","Express Js","Bun Js","Nest Js","Spring Boot"],
//     languages:["Java","Python","C","C++ JavaScript","Go","Rust","Kotlin","C#"],
//     database:["Mongo DB","MySql","postgreSql"]
// }


export const SkillsItems = {
    frontend: [
      { id: 1, name: "React Js", percentage: 94 },  // Random percentage (0-100)
      { id: 2, name: "Angular Js", percentage: 82},
      { id: 3, name: "Vue Js", percentage: 90 },
      { id: 4, name: "Next Js", percentage: 98 },
      { id: 5, name: "Nuxt Js", percentage: 96 },
      { id: 6, name: "Svelte", percentage: 60 },
    ],
    Backend: [
      { id: 7, name: "Node Js", percentage: 99 },
      { id: 8, name: "Flask", percentage: 92 },
      { id: 9, name: "Django Rest Framework", percentage: 85 },
      { id: 10, name: "Express Js", percentage: 94 },
      { id: 11, name: "Bun Js", percentage: 78 },
      { id: 12, name: "Nest Js", percentage: 87 },
      { id: 13, name: "Spring Boot", percentage: 70 },
    ],
    languages: [
      { id: 14, name: "Java", percentage:90},
      { id: 15, name: "Python", percentage:92},
      { id: 16, name: "C", percentage:78},
      { id: 17, name: "C++", percentage:85},
      { id: 18, name: "JavaScript", percentage:97},
      { id: 19, name: "Go", percentage: 60 },  // Consistent percentage format
      { id: 20, name: "Rust", percentage: 60 },
      { id: 21, name: "Kotlin", percentage: 80 },
      { id: 22, name: "C#", percentage: 87 },
    ],
    database: [
      { id: 23, name: "Mongo DB", percentage: Math.floor(Math.random() * 101) },
      { id: 24, name: "MySQL", percentage: Math.floor(Math.random() * 101) }, // Corrected spelling
      { id: 25, name: "PostgreSQL", percentage: Math.floor(Math.random() * 101) },
    ],
    android: [
      { id: 26, name: "React Native", percentage: Math.floor(96) },
      { id: 27, name: "Flutter", percentage: Math.floor(78) }, // Corrected spelling
      { id: 28, name: "Xarmin", percentage: Math.floor(10) },
      { id: 29, name: "Java & Kotlin", percentage: Math.floor(47) },
    ],
  };


  export const SkillsCategories = [
    { value: 'frontend', label: 'Frontend' },
    { value: 'Backend', label: 'Backend' },
    { value: 'languages', label: 'Languages' },
    { value: 'database', label: 'Database' },
    { value: 'android', label: 'Android' },
  ]

  