'use strict';

var api = require('src/config/api.js'),
	Resource = require('src/services/resource.js');

var resource = new Resource(api.base + api.type + '/talentci/:talentId', {
	model: 'bam_talentci'
});

resource.searchTalents = function(data) {
	var deferred = $.Deferred();
	var talents, talentnums;

	self.core.resource.search_talent.get(data)
		.then(function(res) {
			talents = res;
			if (talents.total) {
				talentnums = _.map(talents.data, function(talent) {
					return talent.talentnum;
				});

				talentnums.push(0);

				var data2 = {
					query : [
						[ 'whereIn', 'talentci.talentnum', talentnums ],
						[ 'with', 'bam_talent_media2' ],
						[ 'with', 'user' ]
					]
				};
				return self.core.resource.talent.get(data2);
			}
			else {
				return $.when({ data : [] });
			}
		})
		.then(function (res) {
			_.each(talents.data, function(talent) {
				var talentci = _.find(res.data, function(tm) {
					return talent.talentnum == tm.talentnum;
				});

				if (talentci) {
					talent.bam_talent_media2 = talentci.bam_talent_media2;
					talent.user = talentci.user;
				}
			});

			// if (talents.total) {
			if (false) {		// TODO: uncomment line above when API is working
				// get favorite talents
				var data2 = {
					query : [
						[ 'whereIn', 'bam_talentnum', talentnums ]
					]
				};

				return self.core.resource.favorite_talent.get(data2);
			}
			else {
				return $.when({ data : [] });
			}
		})
		.then(function(res) {
			if (talents.total) {
				//assign favorite talents to talent
				_.each(talents.data, function(talent) {
					talent.favorite = _.find(res.data, function(favorite) {
						return talent.talentnum == favorite.bam_talentnum;
					});
				});
			}

			deferred.resolve(talents);
		});

	return deferred.promise();
}

module.exports = resource;
