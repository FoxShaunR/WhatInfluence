
const getNewsSources = async () => {
  const sequelize = require('./sequelize').getSequelize();
  const { rowCount, rows } = await sequelize.news_sources.findAndCountAll();
  return {
    rowCount,
    data: rows.map(r => r.get({ plain: true })),
  };
}

exports.getNewsSources = getNewsSources;
