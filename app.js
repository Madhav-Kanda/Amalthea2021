require('dotenv').config()
const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const ejsMate = require('ejs-mate');
// const pastevents = require("./seeds/event");
const contact = require("./seeds/contact");
const webinar = require("./seeds/webinars");
const sponsors = require("./seeds/sponsors");
const events = require("./seeds/evntdata")

const app = express();
const PORT = 80;

// STATIC FILES
app.use('/css', express.static('public/css'));
app.use('/images', express.static('public/images'));
app.use('/js', express.static('public/js'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded())

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);
app.engine('ejs', ejsMate)

// Home Page
app.get('/', (req, res) => {
	res.status(200).render("home", { events: events, webinar: webinar });
});

//Events Page
app.get('/events', (req, res) => {
	res.status(200).render("liveevents", { events: events });
});

// // Webinars Page
// app.get('/webinars', (req, res) => {
// 	res.status(200).render("StayTuned");
// });

// // Tech Expo Page
// app.get('/techexpo', (req, res) => {
// 	res.status(200).render("StayTuned");
// });

// Sponsors Page
app.get('/sponsors', (req, res) => {
	res.status(200).render("sponsors", { sponsors1: sponsors[0], sponsors2: sponsors[1] });
});

// // Symposium Page
// app.get('/symposium', (req, res) => {
// 	res.status(200).render("StayTuned");
// });

// // Past Site Page
// app.get('/pastsite', (req, res) => {
// 	res.status(200).render("StayTuned");
// });

// Contact Page
app.get('/contact', (req, res) => {
	res.status(200).render("team", {contact: contact});
});


//StayTuned
app.get('/staytuned', (req, res) => {
	res.status(200).render("StayTuned");
});
//CA page
app.get('/CAportal', (req, res) => {
	res.status(200).render("CAhome");
});
//CA register
app.get('/CAregister', (req, res) => {
	res.status(200).render("CAform");
});

// //Live Events
// app.get('/events', (req, res)=>{
//     res.render('liveevents', {lvevents: lvevents});
// })

app.listen((process.env.PORT || PORT), () => {
	console.log(`The application started successfully on port ${PORT}`);
});