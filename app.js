require('dotenv').config();
const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const ejsMate = require('ejs-mate');
// const pastevents = require("./seeds/event");
const contact = require("./seeds/contact");
const webinar = require("./seeds/webinars");
const sponsors = require("./seeds/sponsors");
const events = require("./seeds/evntdata");
const instacode = require("./seeds/instacodes");
const port = process.env.PORT || 3000;
const app = express();

// STATIC FILES
app.use('/css', express.static('public/css'));
app.use('/images', express.static('public/images'));
app.use('/js', express.static('public/js'));
app.use('/video', express.static('public/video'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);
app.engine('ejs', ejsMate);

// Home Page
app.get('/', (req, res) => {
    res.status(200).render("home", { events: events, webinar: webinar, instacode: instacode });
});

// Events Page
app.get('/events', (req, res) => {
    res.status(200).render("liveevents", { events: events });
});

// Events Registration Page
app.get('/eventRegistration', (req, res) => {
    res.status(200).render("evntRegis", { ca: req.query.CAid, event: req.query.event });
});

// Tech Expo Page
app.get('/techexpo', (req, res) => {
    res.status(200).render("techexpo");
});

/ // Symposium Page
// app.get('/symposium', (req, res) => {
// 	res.status(200).render("StayTuned");
// });

// // Past Site Page
// app.get('/pastsite', (req, res) => {
// 	res.status(200).render("StayTuned");
// });

//StayTuned
// app.get('/staytuned', (req, res) => {
// 	res.status(200).render("StayTuned");
// });

// //Live Events
// app.get('/events', (req, res)=>{
//     res.render('liveevents', {lvevents: lvevents});
// })


// Sponsors Page
app.get('/sponsors', (req, res) => {
    res.status(200).render("sponsors", { sponsors1: sponsors[0], sponsors2: sponsors[1], sponsors3: sponsors[2], sponsors4: sponsors[3], sponsors5: sponsors[4] });
});

// Contact Page
app.get('/contact', (req, res) => {
    res.status(200).render("team", { contact: contact });
});

// CA Portal
app.get('/CAportal', (req, res) => {
    res.status(200).render("CAhome");
});

// CA Register
app.get('/CAregister', (req, res) => {
    res.status(200).render("CAform");
});

// Webinars
app.get('/webinars', (req, res) => {
    res.status(200).render("Webinar", { webinars1: webinar[0], webinars0: webinar[1] });
});

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});

module.exports = app;
