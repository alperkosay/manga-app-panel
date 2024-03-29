// Interface automatically generated by schemas-to-ts

import { Media } from '../../../../common/schemas-to-ts/Media';
import { MangaChapter } from '../../../manga-chapter/content-types/manga-chapter/manga-chapter';
import { Genre } from '../../../genre/content-types/genre/genre';
import { MangaChapter_Plain } from '../../../manga-chapter/content-types/manga-chapter/manga-chapter';
import { Genre_Plain } from '../../../genre/content-types/genre/genre';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export enum Status {
  YayNlanmad = 'Yayınlanmadı',
  DevamEdiyor = 'Devam Ediyor',
  Tamamland = 'Tamamlandı',}

export interface Manga {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    title: string;
    slug: string;
    status: Status;
    otherNames?: string;
    year: Date;
    cover: { data: Media };
    manga_chapters: { data: MangaChapter[] };
    description?: string;
    genres?: { data: Genre[] };
  };
}
export interface Manga_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title: string;
  slug: string;
  status: Status;
  otherNames?: string;
  year: Date;
  cover: Media;
  manga_chapters: MangaChapter_Plain[];
  description?: string;
  genres?: Genre_Plain[];
}

export interface Manga_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title: string;
  slug: string;
  status: Status;
  otherNames?: string;
  year: Date;
  cover: number;
  manga_chapters: number[];
  description?: string;
  genres?: number[];
}

export interface Manga_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title: string;
  slug: string;
  status: Status;
  otherNames?: string;
  year: Date;
  cover: AdminPanelRelationPropertyModification<Media>;
  manga_chapters: AdminPanelRelationPropertyModification<MangaChapter_Plain>;
  description?: string;
  genres?: AdminPanelRelationPropertyModification<Genre_Plain>;
}
