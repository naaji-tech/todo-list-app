export interface Task {
  id: string;
  title: string;
  dueDate: string;
  time: string;
  isStarred: boolean;
  isComplete: boolean;
}

export interface UserProfile {
  id: string;
  profileUrl: string;
  name: string;
  dateOfBirth: string;
  email: string;
  mobileNumber: string;
  location: string;
}

export interface TaskGroup {
  date: string;
  tasks: Task[];
}
