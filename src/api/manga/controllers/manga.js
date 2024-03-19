"use strict";

/**
 * manga controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::manga.manga", ({ strapi }) => ({
  async getWithLastChapters(ctx) {
    const mangaList = await strapi.entityService.findMany("api::manga.manga", {
      populate: { cover: true },
      limit: ctx.query.limit ? Number(ctx.query.limit) : 20,
      sort: {
        createdAt: "desc",
        // manga_chapters: {
        //   // updatedAt: "desc",
        //   createdAt: "asc",
        // },
      },
    });
    const newMangaWithChaptersPromise = await Promise.all(
      mangaList.map(async (manga) => {
        const chapters = await strapi.entityService.findMany(
          "api::manga-chapter.manga-chapter",
          {
            filters: {
              manga: {
                id: {
                  $eq: manga.id,
                },
              },
            },
            limit: 2,
            sort: {
              createdAt: "desc",
            },
          }
        );

        //@ts-ignore
        manga.manga_chapters = chapters;
        return manga;
      })
    );

    const resolvedData = await Promise.resolve(newMangaWithChaptersPromise);

    return resolvedData;
  },
}));
