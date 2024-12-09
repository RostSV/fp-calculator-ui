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
