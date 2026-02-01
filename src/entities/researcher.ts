import ResearcherDto from 'dtos/researcher-dto';
import { ResearcherDegree } from 'enums/reseacher-degree';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('researchers')
export default class Researcher {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  registration!: string;

  @Column({ type: 'varchar', nullable: false })
  name!: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  email!: string;

  @Column({ type: 'varchar', nullable: false })
  password!: string;

  @Column({ type: 'varchar', nullable: true })
  specialty?: string;

  @Column({ type: 'int', enum: ResearcherDegree, nullable: false })
  degree!: ResearcherDegree;

  @Column({ type: 'varchar', nullable: true })
  research?: string;

  @Column({ type: 'date', nullable: false, name: 'birth_date' })
  birthDate!: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  public toDto(): ResearcherDto {
    return {
      id: this.id,
      registration: this.registration,
      name: this.name,
      email: this.email,
      specialty: this.specialty,
      degree: this.degree,
      research: this.research,
      birthDate: this.birthDate,
    };
  }
}
