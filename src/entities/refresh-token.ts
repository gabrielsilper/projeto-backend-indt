import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Researcher from './researcher';

@Entity('refresh_tokens')
export default class RefreshToken {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', nullable: false, length: 255 })
  jti!: string;

  @Column({ type: 'varchar', nullable: false, length: 255, name: 'token_hash' })
  tokenHash!: string;

  @Column({ type: 'timestamp', nullable: true, name: 'expire_in' })
  expireIn?: Date;

  @Column({ default: false })
  revoked!: boolean;

  @ManyToOne(() => Researcher, { onDelete: 'CASCADE' })
  researcher!: Researcher;

  @CreateDateColumn({ name: 'created_at' })
  createAt!: Date;
}
