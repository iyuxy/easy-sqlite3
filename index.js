/**
 * sqlite util
 * @type {[type]}
 */

const _ = require('underscore');
const Promise = require('bluebird');
const sqlite3 = require('sqlite3').verbose();

const defaultConf = require('./config/conf');

function util(customConf) {
    const conf = customConf || defaultConf;
    this.initDB = () => {
        return new Promise((resolve, reject) => {
            if (conf.database && conf.table && conf.column) {
                let DB = new sqlite3.Database('./db/' + conf.database + '.db');
                DB.each('SELECT name FROM sqlite_master WHERE type="table" ORDER BY name', (err, row) => {
                    if (!_.contains(_.values(row), conf.table)) {
                        let columnArray = [];
                        _.each(conf.column, (value, key) => {
                            columnArray.push(key + ' ' + value);
                        });
                        let createSql = 'create table if not exists '
                            + conf.table
                            + ' ('
                            + columnArray.join(', ')
                            + ');';
                        DB.run(createSql, (err) => {
                            if (err !== null) {
                                DB.close();
                                console.log('创建数据库失败: ' + err);
                                reject(false);
                            }
                            else {
                               resolve(DB); 
                            }
                        });
                    }
                    else {
                        resolve(DB);
                    }
                });
            }
            else {
                console.log('请提供sqlite库表配置');
                reject(false);
            }
        });
        
    };
    this.insertData = (data, callback, errorCallback) => {
        this.initDB().then((DB) => {
            let columnArray = [];
            let valueArray = [];
             _.each(conf.column, (value, key) => {
                columnArray.push(key);
                valueArray.push('"' + data[key] + '"');
            });
            let insertSql = 'INSERT INTO '
                + conf.table
                + ' ('
                + columnArray.join(',')
                + ') VALUES ('
                + valueArray.join(',')
                + ')';
            DB.run(insertSql, (err) => {
                DB.close();
                if (err !== null) {
                    console.log('插入数据库失败');
                    if (typeof errorCallback === 'function') {
                        errorCallback('数据库连接失败: ' + err);
                    }
                }
                else {
                    if (typeof callback === 'function') {
                        callback();
                    }
                }
            });
        }, () => {
            if (typeof errorCallback === 'function') {
                errorCallback('数据库连接失败');
            }
            else {
                throw new Error('数据库连接失败');
            }
        }); 
    };
    this.selectData = (params, callback, errorCallback) => {
        this.initDB().then((DB) => {
            let selectSql = 'select * from '
                + conf.table
                + ' WHERE '
                + conf.key
                + ' = '
                + params[conf.key]
                + ';'
            DB.all(selectSql, function(err, rows) {
                if (err === null && typeof callback === 'function') {
                    callback(rows);
                }
                else if (typeof errorCallback === 'function') {
                    errorCallback();
                }
                else {
                    throw new Error('查询失败');
                }
            });
        });
    };
};

module.exports = util;
