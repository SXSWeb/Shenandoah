module.exports = {
	"name": "Shenandoah Baptist Church",
	"email": "shenandoah.baptist.office@gmail.com",
	"phoneForTel": "5122586909",
	"phoneFormatted": "(512) 258-6909",
	"address": {
		"lineOne": "Shenandoah Baptist Church",
		"lineTwo": "3003 Blue Ridge Dr.",
		"city": "Cedar Park",
		"state": "TX",
		"zip": "78613",
		"mapLink": "https://maps.app.goo.gl/KfWgCJiSQ1AQrNe36"
	},


    socials: {
        facebook: "https://www.facebook.com/ShenandoahBaptistChurch.CedarPark",
        youtube: "https://www.youtube.com/@Shenandoahcptx/streams",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://shenandoah-baptist.org",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
