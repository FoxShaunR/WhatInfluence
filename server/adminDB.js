/**
 * news
 */
const addNews = async (data) => {
  const sequelize = require('./sequelize').getSequelize();
  return sequelize.news.create(data);
}

/**
 * news_sources
 */

const getNewsSources = async () => {
  const sequelize = require('./sequelize').getSequelize();
  const { rowCount, rows } = await sequelize.news_sources.findAndCountAll();
  return {
    rowCount,
    data: rows.map(r => r.get({ plain: true })),
  };
}

exports.getNewsSources = getNewsSources;
exports.addNews = addNews;
