import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Author } from './author.entity';

@Entity({ name: 'books' })
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'int' })
  chapters: number;

  @Column({ type: 'int' })
  pages: number;

  @ManyToMany(() => Author, (author) => author.books)
  @JoinTable({
    name: 'books_authors',
    joinColumn: {
      name: 'book_id',
    },
    inverseJoinColumn: {
      name: 'author_id',
    },
  })
  authors: Author[];
}
