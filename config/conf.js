/**
 * conf
 * @author darren
 */

const conf = {
	database: 'iyuxy',
	table: 'comments',
	key: 'pageId',
	column: {
		_id: 'TEXT',
		title: 'TEXT',
		url: 'TEXT',
		pageId: 'INTEGER',
		email: 'TEXT',
		nickname: 'TEXT',
		comment: 'TEXT',
		website: 'TEXT',
		parentId: 'TEXT',
		time: 'INTEGER'
	}
};

module.exports = conf;
