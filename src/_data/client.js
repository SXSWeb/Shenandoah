module.exports = {
	"name": "SXSWeb Design",
	"email": "info@sxsweb.design",
	"phoneForTel": "5555555555",
	"phoneFormatted": "(555) 555-5555",
	"address": {
		"lineOne": "SXSWeb Design",
		"lineTwo": "7413 Sagira Path",
		"city": "Austin",
		"state": "TX",
		"zip": "78724",
		"mapLink": "https://maps.app.goo.gl/5ryBu5c4nCtZVmGw9"
	},
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://sxsweb.design",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
