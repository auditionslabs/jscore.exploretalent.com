'use strict';

var _ = require('lodash'),
	date = require('src/services/date.js');

function Casting(data) {
	_.extend(this, data);
}

Casting.prototype.getRate = function() {
	var rates = {
		0	:	"",
		1	:	"event",
		2	:	"hour",
		3	:	"day",
		4	:	"week",
		5	:	"month"
	};

	return rates[this.rate_des];
};

Casting.prototype.getCategory = function() {
	var categories = {
		0  :  "",
		1  :  "Commercials",
		10 :  "Feature Film - Non-SAG",
		11 :  "Feature Film - Student Films",
		12 :  "Feature Film - Short Film",
		13 :  "Feature Film - Documentaries",
		14 :  "Feature Film - Inde/Low Budget",
		15 :  "Infomercials",
		16 :  "Crew - Assistants & Entry Level",
		17 :  "Industrial/Training Films",
		18 :  "Modeling - Runway",
		19 :  "Modeling - Hair/Cosmetics",
		20 :  "Modeling - Print",
		21 :  "Music Videos",
		22 :  "Theatre - Equity (Union)",
		23 :  "Theatre - Non-Equity",
		24 :  "Trade Shows/Live Events/Promo Model",
		25 :  "Crew - Marketing/PR",
		26 :  "Voice Over",
		27 :  "Internet",
		28 :  "Music - Vocals",
		29 :  "Music - Strings",
		3  :  "Dance - Ballet/Classic",
		30 :  "Music - Horns",
		31 :  "Music - Keyboards",
		32 :  "Music - Drums",
		33 :  "Music - Other",
		34 :  "Crew - Ligthing/Sound",
		35 :  "Crew - Camera/Editor",
		36 :  "Crew - Producer/Director",
		37 :  "Crew - Make Up/Stylist",
		38 :  "Crew - Other",
		39 :  "Crew - Writing/Script/Edit",
		4  :  "Dance - Modern/Jazz",
		40 :  "Crew - Showbiz Internship",
		41 :  "Acting - Comedy/Clown",
		42 :  "Variety - Variety Acts",
		43 :  "Acting - Acrobatics/Stunts",
		44 :  "Music - Band",
		45 :  "Music - DJ/Sound",
		46 :  "Music - Teacher",
		47 :  "Crew - TV/Radio",
		48 :  "Crew - Graphic/Web/Animate",
		49 :  "Crew - Accounting/Payroll/HR",
		5  :  "Episodic TV - Pilots",
		50 :  "Crew - Technology/MIS",
		51 :  "Crew - Management",
		52 :  "Crew - Talent/Casting Mgmt",
		53 :  "Dance - HipHop",
		54 :  "Dance - Club/Gogo",
		55 :  "Dance - Traditonal/Latin",
		56 :  "Dance - Choreography",
		57 :  "Dance - Teacher",
		58 :  "Dance - Other/General",
		59 :  "Reality TV",
		6  :  "Episodic TV - SAG",
		60 :  "Extras",
		61 :  "Acting - Other",
		7  :  "Episodic TV - AFTRA",
		8  :  "Episodic TV - Non-Union",
		9  :  "Feature Film - SAG",
	};

	return categories[this.cat];
}

Casting.prototype.getProjectType = function() {

	var projectTypes = {
		0  : "Commercials",
		1  : "Print",
		2  : "Music Video",
		3  : "Feature Film",
		4  : "SAG Experm",
		5  : "Episodic",
		6  : "Pilots",
		7  : "Voice Over",
		8  : "Live Event",
		9  : "Infomercial",
		10 : "Doc. Short Film",
		11 : "TV Show",
		12 : "Music",
		13 : "Crew",
		14 : "Dance"
	}

	return projectTypes[this.project_type];
}

Casting.prototype.convertToFullDate = function(timestamp) {
	return date.formatYMD(parseInt(timestamp));
};

Casting.prototype.getUrl = function() {
	if (this.zip) {
		return 'https://www.exploretalent.com/auditions/' + this.normalize(this.getCategory()) + '-' +
			this.normalize(this.name) + '-' +
			this.normalize(this.location) + '-' +
			this.normalize(this.zip) + '_' +
			this.normalize(this.casting_id);
	}
	else {
		return 'https://www.exploretalent.com/auditions/' + this.normalize(this.getCategory()) + '-' +
			this.normalize(this.name) + '-' +
			this.normalize(this.location) + '-' +
			this.normalize(this.casting_id);
	}
}

Casting.prototype.normalize = function(url) {
	url = url + '';
	var str = url.replace(/[^a-zA-Z0-9-_ ]/, '');
	var strs = str.toLowerCase().split(' ');

	_.remove(strs, function(s) {
		return s.trim() == '';
	});

	str = strs.join('-');
	strs = str.toLowerCase().split('-');

	_.remove(strs, function(s) {
		return (s.trim() == '' || s.trim() == '-');
	});

	str = strs.join('_');
	strs = str.toLowerCase().split('_');

	_.remove(strs, function(s) {
		return (s.trim() == '' || s.trim() == '_');
	});

	return strs.join('-');
}

Casting.relationship = [
	'data:bam_castings',
	'bam_cd_user',
	'bam_roles'
];

module.exports = Casting;
