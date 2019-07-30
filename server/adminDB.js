/**
 * news
 */
const addNews = async (data) => {
  const sequelize = require('./sequelize').getSequelize();
  return sequelize.news.create(data);
};

const getLatestNews = async () => {
  const { news } = require('./sequelize').getSequelize();
  const { rowCount, rows } = await news.getLatestInfluencerNews();
  return {
    rowCount,
    data: rows.map(r => r.get({ plain: true })),
  };
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
};

const updateNewsSource = async (id, data) => {
  const { news_sources } = require('./sequelize').getSequelize();
  const source = await news_sources.findByPk(id)
  return source.update(data);
};

exports.getNewsSources = getNewsSources;
exports.getLatestNews = getLatestNews;
exports.updateNewsSource = updateNewsSource;
exports.addNews = addNews;
