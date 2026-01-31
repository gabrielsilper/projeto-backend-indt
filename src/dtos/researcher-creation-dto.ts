import { ResearcherDegree } from "enums/reseacher-degree";

export default interface ResearcherCreationDto{
    registration: string;
    name: string;
    email: string;
    password: string;
    specialty?: string;
    degree: ResearcherDegree;
    research?: string;
    birthDate: Date;
}