'use strict';

var _ = require('lodash');

function Casting(data) {
	_.extend(this, data);
}

Casting.prototype.getCategory = function() {
	var categories = {
		0  :  "",
		43 :  "Acting - Acrobatics/Stunts",
		41 :  "Acting - Comedy/Clown",
		61 :  "Acting - Other",
		42 :  "Variety - Variety Acts",
		1  :  "Commercials",
		16 :  "Crew - Assistants & Entry Level",
		49 :  "Crew - Accounting/Payroll/HR",
		35 :  "Crew - Camera/Editor",
		48 :  "Crew - Graphic/Web/Animate",
		34 :  "Crew - Ligthing/Sound",
		37 :  "Crew - Make Up/Stylist",
		51 :  "Crew - Management",
		25 :  "Crew - Marketing/PR",
		38 :  "Crew - Other",
		36 :  "Crew - Producer/Director",
		40 :  "Crew - Showbiz Internship",
		52 :  "Crew - Talent/Casting Mgmt",
		50 :  "Crew - Technology/MIS",
		47 :  "Crew - TV/Radio",
		39 :  "Crew - Writing/Script/Edit",
		3  :  "Dance - Ballet/Classic",
		56 :  "Dance - Choreography",
		54 :  "Dance - Club/Gogo",
		53 :  "Dance - HipHop",
		4  :  "Dance - Modern/Jazz",
		58 :  "Dance - Other/General",
		57 :  "Dance - Teacher",
		55 :  "Dance - Traditonal/Latin",
		5  :  "Episodic TV - Pilots",
		6  :  "Episodic TV - SAG",
		7  :  "Episodic TV - AFTRA",
		8  :  "Episodic TV - Non-Union",
		60 :  "Extras",
		9  :  "Feature Film - SAG",
		10 :  "Feature Film - Non-SAG",
		11 :  "Feature Film - Student Films",
		12 :  "Feature Film - Short Film",
		13 :  "Feature Film - Documentaries",
		14 :  "Feature Film - :Low Budget/Independent",
		15 :  "Infomercials",
		17 :  "Industrial/Training Films",
		27 :  "Internet",
		18 :  "Modeling - Runway",
		19 :  "Modeling - Hair/Cosmetics",
		20 :  "Modeling - Print",
		21 :  "Music Videos",
		44 :  "Music - Band",
		45 :  "Music - DJ/Sound",
		30 :  "Music - Horns",
		32 :  "Music - Drums",
		31 :  "Music - Keyboards",
		33 :  "Music - Other",
		29 :  "Music - Strings",
		46 :  "Music - Teacher",
		28 :  "Music - Vocals",
		59 :  "Reality TV",
		22 :  "Theatre - Equity (Union)",
		23 :  "Theatre - Non-Equity",
		24 :  "Trade Shows/Live Events/Promo Model",
		26 :  "Voice Over"
	};

	return categories[this.cat];
}

Casting.relationship = [
	'data:bam_castings'
];

module.exports = Casting;
