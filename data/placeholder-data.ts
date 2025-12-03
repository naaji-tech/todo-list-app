import { Task, UserProfile } from "@/constants/types";

const TASK_LIST: Task[] = [
  {
    id: "1",
    title: "Buy groceries",
    dueDate: "2025-12-02",
    time: "2:00 PM",
    isStarred: true,
    isComplete: true,
  },
  {
    id: "2",
    title: "Team meeting",
    dueDate: "2025-12-02",
    time: "10:00 AM",
    isStarred: false,
    isComplete: true,
  },
  {
    id: "3",
    title: "Dentist appointment",
    dueDate: "2025-12-02",
    time: "3:30 PM",
    isStarred: true,
    isComplete: false,
  },
  {
    id: "4",
    title: "Submit project report",
    dueDate: "2025-12-04",
    time: "5:00 PM",
    isStarred: true,
    isComplete: false,
  },
  {
    id: "5",
    title: "Gym workout",
    dueDate: "2025-12-04",
    time: "7:00 AM",
    isStarred: false,
    isComplete: false,
  },
  {
    id: "6",
    title: "Book flight tickets",
    dueDate: "2025-12-06",
    time: "12:00 PM",
    isStarred: false,
    isComplete: false,
  },
  {
    id: "7",
    title: "Car service",
    dueDate: "2025-12-06",
    time: "9:00 AM",
    isStarred: false,
    isComplete: false,
  },
  {
    id: "8",
    title: "Pay utility bills",
    dueDate: "2025-12-08",
    time: "11:00 AM",
    isStarred: true,
    isComplete: false,
  },
  {
    id: "9",
    title: "Birthday party",
    dueDate: "2025-12-08",
    time: "6:00 PM",
    isStarred: true,
    isComplete: false,
  },
  {
    id: "10",
    title: "Code review session",
    dueDate: "2025-12-08",
    time: "2:00 PM",
    isStarred: false,
    isComplete: false,
  },
  {
    id: "11",
    title: "Prepare presentation",
    dueDate: "2025-12-10",
    time: "4:00 PM",
    isStarred: true,
    isComplete: false,
  },
];

const USER_PROFILE: UserProfile = {
  id: "u1",
  profileUrl:
    "https://github.com/naaji-tech/todo-list-app/blob/34888e7efa14db1607d843c538098e81f119ecf6/assets/app-images/profile-pic.jpeg?raw=true",
  name: "Mohamed Naaji",
  dateOfBirth: "10/02/2000",
  email: "mohamednaaji@gmail.com",
  mobileNumber: "+94770835948",
  location: "Colombo, Sri Lanka",
};

export { TASK_LIST, USER_PROFILE };
