/**
 * news
 */
const addNews = async (data) => {
  const sequelize = require('./sequelize').getSequelize();
  return sequelize.news.create(data);
};

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
};

const updateNewsSource = async (id, data) => {
  const { news_sources } = require('./sequelize').getSequelize();
  const source = await news_sources.findByPk(id)
  return source.update(data);
};

exports.getNewsSources = getNewsSources;
exports.updateNewsSource = updateNewsSource;
exports.addNews = addNews;
