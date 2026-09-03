export interface EducationItem {
    id: string;
    degree: string;
    university: string;
    training: string[];
}

export const educationData: EducationItem[] = [
    {
        id: "edu-1",
        degree: "Bachelor of Science in Computer Science | 2024-2028",
        university: "Visayas State University - Main Campus | 3rd Year | Accumulated GWA 1.334",
        training: ["START x DOST DataCamp Scholar"]
    }
];
