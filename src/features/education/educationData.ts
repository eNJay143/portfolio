export interface EducationItem {
  id: string;
  degree: string;
  university: string;
  training: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Science in Computer Science",
    university: "Visayas State University Main Campus",
    training: ["START x DOST DataCamp Scholar"]
  }
];
