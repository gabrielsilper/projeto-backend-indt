import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sensores')
export class Sensor {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    name: 'serial_number',
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  serialNumber!: string;

  @Column({ type: 'varchar', nullable: false })
  name!: string;

  @Column({ type: 'varchar', nullable: true })
  description?: string;
}
