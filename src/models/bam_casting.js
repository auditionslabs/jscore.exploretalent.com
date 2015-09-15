'use strict';

var _ = require('lodash');

function Casting(data) {
	_.extend(this, data);
}

Casting.prototype.getCategory = function() {
	var categories = {
		0  :  "",
		1  :  "Commercials",
		10 :  "Feature Film - Non-SAG",
		11 :  "Feature Film - Student Films",
		12 :  "Feature Film - Short Film",
		13 :  "Feature Film - Documentaries",
		14 :  "Feature Film - :Low Budget/Independent",
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
		26 :  "Voice Over"
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

Casting.relationship = [
	'data:bam_castings'
];

module.exports = Casting;
