require('dotenv').config()
const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const ejsMate = require('ejs-mate');
const events = require("./seeds/event");
const contact = require("./seeds/about");
const webinar = require("./seeds/webinars");
const sponsors = require("./seeds/sponsors");
const webinars = require('./seeds/webinars');


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

// Events Page
app.get('/events', (req, res) => {
	res.status(200).render("events", { events: events });
});


// Tech Expo Page
app.get('/techexpo', (req, res) => {
	res.status(200).render("StayTuned");
});

// Sponsors Page
app.get('/sponsors', (req, res) => {
	res.status(200).render("sponsors", { sponsors1: sponsors[0], sponsors2: sponsors[1] });
});

// Symposium Page
app.get('/webinars', (req, res) => {
	res.status(200).render("Webinar", { webinars1: webinars[0], webinars2: webinar[1] });
});

// Past Site Page
app.get('/pastsite', (req, res) => {
	res.status(200).render("StayTuned");
});

// Contact Page
app.get('/contact', (req, res) => {
	res.status(200).render("StayTuned");
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



app.listen((process.env.PORT || PORT), () => {
	console.log(`The application started successfully on port ${PORT}`);
});