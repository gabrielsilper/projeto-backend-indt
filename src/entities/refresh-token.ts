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

  @Column({ type: 'varchar', nullable: false, unique: true, length: 255 })
  jti!: string;

  @Column({ type: 'varchar', nullable: true, unique: true, name: 'session_id' })
  sessionId!: string;

  @Column({ type: 'varchar', nullable: true, name: 'user_agent' })
  userAgent!: string;

  @Column({ type: 'varchar', nullable: true, name: 'ip_address' })
  ipAddress!: string;

  @Column({ type: 'varchar', nullable: true, length: 255, name: 'token_hash' })
  tokenHash!: string;

  @Column({ type: 'date', nullable: true, name: 'expire_in' })
  expireIn?: Date;

  @Column({ type: 'boolean', default: true })
  revoked!: boolean;

  @ManyToOne(() => Researcher, { onDelete: 'CASCADE' })
  researcher!: Researcher;

  @CreateDateColumn({ name: 'created_at' })
  createAt!: Date;
}
