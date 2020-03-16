module.exports = function (app, swig) {

    app.post("/cancion", function (req, res) {
        res.send("Canción agregada:" + req.body.nombre + "<br>"
            + " Género :" + req.body.genero + "<br>"
            + " Precio: " + req.body.precio);
    });

    app.get('/canciones/agregar', function (req, res) {
        let respuesta = swig.renderFile('views/bagregar.html', {});
        res.send(respuesta);
    })

    app.get("/canciones", function (req, res) {
        var canciones = [
            {"nombre": "Blank space", "precio": "1.2"},
            {"nombre": "See you again", "precio": "1.3"},
            {"nombre": "Uptown Funk", "precio": "1.1"}
        ];
        let respuesta = swig.renderFile('views/btienda.html', {
            vendedor: 'Tienda de canciones',
            canciones: canciones
        });
        res.send(respuesta);
    });

    app.get('/suma', function (req, res) {
        let respuesta = parseInt(req.query.num1) + parseInt(req.query.num2);
        res.send(String(respuesta));
    });

    app.get('/canciones/:id', function (req, res) {
        var respuesta = 'id: ' + req.params.id;
        res.send(respuesta);
    })
    app.get('/canciones/:genero/:id', function (req, res) {
        var respuesta = 'id: ' + req.params.id + '<br>'
            + 'Genero: ' + req.params.genero;
        res.send(respuesta);
    })

};