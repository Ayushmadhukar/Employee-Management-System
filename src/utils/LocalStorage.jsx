const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Login Page",
        description: "Create UI for login page",
        date: "2026-02-01",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Signup Page UI",
        description: "Design signup page",
        date: "2026-02-03",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Navbar Bug",
        description: "Resolve navbar alignment issue",
        date: "2026-01-28",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update Footer",
        description: "Improve footer layout",
        date: "2026-01-26",
        category: "UI"
      }
    ]
  },

  {
    id: 2,
    firstName: "Mohit",
    email: "employee2@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 0,
      completed:3,
      failed: 0
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create Dashboard",
        description: "Build dashboard UI",
        date: "2026-02-02",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Optimize Images",
        description: "Compress images",
        date: "2026-01-29",
        category: "Performance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Add Charts",
        description: "Add charts to dashboard",
        date: "2026-02-06",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Responsive Issues",
        description: "Fix mobile responsiveness",
        date: "2026-01-27",
        category: "UI"
      }
    ]
  },

  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Form Validation",
        description: "Add validation to signup form",
        date: "2026-02-03",
        category: "Validation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Refactor Code",
        description: "Refactor components",
        date: "2026-01-30",
        category: "Refactor"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Redux Setup",
        description: "Setup Redux store",
        date: "2026-01-27",
        category: "State Management"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        title: "API Planning",
        description: "Plan API flow",
        date: "2026-02-07",
        category: "Planning"
      }
    ]
  },

  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 0,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create Footer",
        description: "Design footer section",
        date: "2026-02-04",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "SEO Meta Tags",
        description: "Add SEO tags",
        date: "2026-01-31",
        category: "SEO"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Lazy Loading",
        description: "Implement lazy loading",
        date: "2026-01-26",
        category: "Performance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Accessibility Fixes",
        description: "Improve accessibility",
        date: "2026-02-06",
        category: "Accessibility"
      }
    ]
  },

  {
    id: 5,
    firstName: "Kunal",
    email: "employee5@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Profile Page",
        description: "Build profile page",
        date: "2026-02-05",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Edit Profile Feature",
        description: "Add edit profile functionality",
        date: "2026-02-07",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Button Styles",
        description: "Fix button styling",
        date: "2026-01-30",
        category: "UI"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Unit Testing",
        description: "Write unit tests",
        date: "2026-01-27",
        category: "Testing"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    firstName: "Admin",
    email: "admin@me.com",
    password: "123"
  }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
  
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return{admin,employees}
}