import {Comparation} from "./comparation";

export const history: Comparation[] = [
  {
    file1: "test1",
    file2: "test1",
    date: new Date().toDateString(),
    plagiarism: 10
  },
  {
    file1: "attachment1.xlsx",
    file2: "attachment2.xlsx",
    date: new Date().toDateString(),
    plagiarism: 20
  }
]
const cmpValues = [
  { name: "UFP", value1: 7, value2: 26 },
  { name: "VAF", value1: 0.65, value2: 0.69 },
  { name: "AFP", value1: 4.55, value2: 17.94 },
  { name: "LOC (C)", value1: 890, value2: 3328 },
  { name: "Basic E", value1: 2.139, value2: 8.482 },
  { name: "Basic D", value1: 3.337, value2: 5.633 },
  { name: "Basic P", value1: 3.337, value2: 5.633 },
  { name: "Interm E", value1: 0.55, value2: 1.48 },
  { name: "Interm D", value1: 2.966, value2: 7.294 },
  { name: "Interm P", value1: 1, value2: 3 },
];

export const compare_result = {
  files: [
    new File([""], "attachment1.xlsx"),
    new File([""], "attachment2.xlsx"),
  ],
  plagiarism: 25,
  values: cmpValues
}

export interface Student {
  name: string;
  lastActivity: string;
  activeAssignment: string;
  studyGroup: string;
  studyGroupGrade: string;
}

export const student_list: Student[] = [
  {
    name: "John Doe",
    lastActivity: "2024-12-08",
    activeAssignment: "Project Management - Assignment 3",
    studyGroup: "Group A",
    studyGroupGrade: "A"
  },
  {
    name: "Jane Smith",
    lastActivity: "2024-12-07",
    activeAssignment: "Mathematics - Assignment 2",
    studyGroup: "Group B",
    studyGroupGrade: "B+"
  },
  {
    name: "Michael Johnson",
    lastActivity: "2024-12-06",
    activeAssignment: "History - Essay 1",
    studyGroup: "Group C",
    studyGroupGrade: "A-"
  },
  {
    name: "Emily Davis",
    lastActivity: "2024-12-09",
    activeAssignment: "Science - Lab Report",
    studyGroup: "Group D",
    studyGroupGrade: "B"
  },
  {
    name: "Chris Wilson",
    lastActivity: "2024-12-05",
    activeAssignment: "Computer Science - Coding Challenge",
    studyGroup: "Group E",
    studyGroupGrade: "A+"
  },
  {
    name: "Patricia Moore",
    lastActivity: "2024-12-08",
    activeAssignment: "Literature - Book Review",
    studyGroup: "Group F",
    studyGroupGrade: "B"
  },
  {
    name: "James Taylor",
    lastActivity: "2024-12-06",
    activeAssignment: "Physics - Experiment 2",
    studyGroup: "Group G",
    studyGroupGrade: "A"
  },
  {
    name: "Linda Anderson",
    lastActivity: "2024-12-07",
    activeAssignment: "Biology - Research Paper",
    studyGroup: "Group H",
    studyGroupGrade: "C+"
  },
  {
    name: "David Thomas",
    lastActivity: "2024-12-04",
    activeAssignment: "Chemistry - Quiz 3",
    studyGroup: "Group I",
    studyGroupGrade: "B+"
  },
  {
    name: "Sarah Jackson",
    lastActivity: "2024-12-03",
    activeAssignment: "Philosophy - Discussion Board",
    studyGroup: "Group J",
    studyGroupGrade: "A"
  },
  {
    name: "Robert Harris",
    lastActivity: "2024-12-09",
    activeAssignment: "Geography - Research Assignment",
    studyGroup: "Group K",
    studyGroupGrade: "B-"
  },
  {
    name: "Mary White",
    lastActivity: "2024-12-02",
    activeAssignment: "Art - Project 1",
    studyGroup: "Group L",
    studyGroupGrade: "A-"
  },
  {
    name: "William Martin",
    lastActivity: "2024-12-01",
    activeAssignment: "Psychology - Survey Analysis",
    studyGroup: "Group M",
    studyGroupGrade: "C"
  },
  {
    name: "Elizabeth Lee",
    lastActivity: "2024-12-09",
    activeAssignment: "Engineering - Design Project",
    studyGroup: "Group N",
    studyGroupGrade: "B+"
  },
  {
    name: "Charles Allen",
    lastActivity: "2024-12-05",
    activeAssignment: "Statistics - Problem Set",
    studyGroup: "Group O",
    studyGroupGrade: "A"
  },
  {
    name: "Jessica Young",
    lastActivity: "2024-12-06",
    activeAssignment: "Music - Performance Analysis",
    studyGroup: "Group P",
    studyGroupGrade: "B+"
  },
  {
    name: "Daniel King",
    lastActivity: "2024-12-08",
    activeAssignment: "Economics - Case Study",
    studyGroup: "Group Q",
    studyGroupGrade: "A"
  },
  {
    name: "Barbara Scott",
    lastActivity: "2024-12-03",
    activeAssignment: "Political Science - Debate",
    studyGroup: "Group R",
    studyGroupGrade: "B"
  },
  {
    name: "Thomas Green",
    lastActivity: "2024-12-09",
    activeAssignment: "Social Studies - Group Project",
    studyGroup: "Group S",
    studyGroupGrade: "A-"
  },
  {
    name: "Helen Adams",
    lastActivity: "2024-12-04",
    activeAssignment: "Engineering - Prototype Model",
    studyGroup: "Group T",
    studyGroupGrade: "B+"
  }
];
