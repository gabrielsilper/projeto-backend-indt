import { ResearcherDegree } from "enums/reseacher-degree";

export default interface ResearcherDto {
    id:string;
    registration: string;
    name: string;
    email: string;
    specialty?: string;
    degree: ResearcherDegree;
    research?: string;
    birthDate: Date;
}