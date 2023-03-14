const express = require("express");
const app = express()
const hbs = require("hbs")
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static("public"))
hbs.registerPartials(__dirname + "/views/partials")

app.listen(3000)
app.get("/", (req, res) => {
    res.render("index")
})
app.get("/nosotros", (req, res) => {
    console.log("pagina nosotros2")
    res.render("nosotros", { nombre: "SAS", region: "Rancagua" })
})

// app.get("/tarjetas", (req, res, next) => {
//     console.log("pagina tarjetas")
//     res.render("tarjetas",)
// })

app.get('/tarjetas', (req, res) => {
    console.log("pagina tarjetas")
    // 👇
    const players = [
        {
            'continente': 'África',
            'pais': 'Angola',
            'capital': 'Luanda',
            'photo': 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg'
        },
        {
            'name': 'Kevin',
            'lastName': 'Durant',
            'team': 'GSW',
            'photo': 'https://img.bleacherreport.net/img/images/photos/003/670/482/hi-res-3c2473cd8600df96c4b94c93808562c8_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top'
        },
        {
            'name': 'Lebron',
            'lastName': 'James',
            'team': 'CLE',
            'photo': 'https://usatftw.files.wordpress.com/2018/01/ap_cavaliers_timberwolves_basketball.jpg?w=1000&h=600&crop=1'
        },
        {
            'name': 'Emanuel',
            'lastName': 'Ginóbilli',
            'team': 'SAS',
            'photo': 'https://cdn.vox-cdn.com/thumbor/Z9kR0HDJrzOzxOdwGe7Jwyxxvjk=/0x0:2802x4203/1200x800/filters:focal(1329x1158:1777x1606)/cdn.vox-cdn.com/uploads/chorus_image/image/57733525/usa_today_10429631.0.jpg'
        },
        {
            'name': 'Kyrie',
            'lastName': 'Irving',
            'team': 'BOS',
            'photo': 'https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/11/11/kyrie-irving-mvp-case.jpg?itok=PWYqUSGf'
        },
        {
            'name': 'Kobe',
            'lastName': 'Bryant',
            'team': 'LAK',
            'photo': 'https://clutchpoints.com/wp-content/uploads/2017/10/Kobe-Bryant-e1508564618882.jpg'
        },
    ];
    // ☝️

    res.render("tarjetas", { players });
});