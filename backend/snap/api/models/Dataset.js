/**
 * Dataset.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'datasets',
  attributes: {
    id: { type: 'string', pk: true },
    name: { type: 'string' },
    contact_email: { type: 'string' },
    contact_name: { type: 'string' },
    title: { type: 'string' },
    description: { type: 'string' },
    modified_date: { type: 'string' },
    license_id: { type: 'string' },
    license_title: { type: 'string' },
    license_url: { type: 'string' },
    url: { type: 'string' },
//    keywords: { collection: 'Keywords', dominant: true }
  }
};

