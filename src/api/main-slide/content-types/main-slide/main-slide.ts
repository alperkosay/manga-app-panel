// Interface automatically generated by schemas-to-ts

import { Manga } from '../../../manga/content-types/manga/manga';
import { Manga_Plain } from '../../../manga/content-types/manga/manga';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface MainSlide {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    manga?: { data: Manga };
  };
}
export interface MainSlide_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  manga?: Manga_Plain;
}

export interface MainSlide_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  manga?: number;
}

export interface MainSlide_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  manga?: AdminPanelRelationPropertyModification<Manga_Plain>;
}
