const Perfumes = [
    {
        id: 1
        , name: "Versace Eros EDT 100ml"
        , precio: "$1,500"
        , tipo: "diseñador"
        , imagen: "https://www.sephora.com/productimages/product/p382751-av-5-zoom.jpg"
        , descripcion: "una fragancia masculina fresca, dulce y magnética, diseñada para el hombre audaz que busca destacar en la noche y en climas fríos. Combina notas vibrantes de menta y manzana verde con la calidez seductora del haba tonka y la vainilla. Funciona bien en climas templados o frios"
    },
    
    {
        id: 2
        ,name: "Yves Saint Laurent EDP 100ml"
        , precio: "$2,000 "
        , tipo: "diseñador"
        , imagen: "https://static.sweetcare.com/img/prd/488/v-638823779045898411/yves-saint-laurent-014046ys-2.webp"
        , descripcion: "Yves Saint Laurent EDP es una fragancia masculina que combina notas de bergamota, lavanda y jazmín con un fondo de cedro y vetiver. Es ideal para uso diario."
    },
    
    {
        id: 3
        , name: "valentino born in roma intense 100ml"
        , precio: "$2,500"
        , tipo: "diseñador"
        , imagen:"https://http2.mlstatic.com/D_NQ_NP_795935-MLA91377493693_082025-O.webp"
        , descripcion: "Valentino Born in Roma Intense es una fragancia de la familia Ámbar, sumamente seductora, cálida y magnética, donde destaca una nota intensa de vainilla bourbon combinada con toques florales. Es perfecto para la noche, citas románticas, eventos especiales y climas templados o fríos "
    },

    {
        id: 4
        , name: "Acqua di Gio Parfum 100ml"
        , precio: "$3,000"
        , tipo: "diseñador"
        , imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTvz2Pu0eZdc4tgpkhbaEK-mFdqxv_P98hgcqLXJOsrg&s=10"
        , descripcion: "Acqua di Giò Parfum es una fragancia marina, ahumada y elegante que combina la frescura del océano con el misterio del incienso.Su uso ideal es en tardes y noches de primavera, verano y otoño, perfecto para ocasiones formales, citas románticas o eventos semi-formales" 
    },

    {
        id: 5
        , name: "Bleu de Chanel EDP 100ml"
        , precio: "$"
        , tipo: "diseñador"
        , imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRw_1RLgMriJ3-YiUciJ7d08uDWqpUMg5gXDAreih4Q&s=10"
        , descripcion:"BLEU DE CHANEL EDP es un perfume amaderado y sofisticado que abre con cítricos frescos y evoluciona hacia un fondo elegante de incienso, ámbar y sándalo cremoso, consolidándose como el rey de la versatilidad gracias a un aroma limpio y masculino perfecto para las 4 estaciones del año"
    },

    {
        id: 6
        , name: "Hayaati Lattafa 100ml"
        , precio: "$350"
        , tipo: "arabes"
        ,imagen: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRugYbszY_2u4Wa3_BXzo6KxXM-BS2VlmAB3ihH7DxnxhlBVOyNl4rvnbZrfXFlejTOsXYAqhw0iiBJ1sDHYc2puwZvB855XQ"
        , descripcion: "Hayaati de Lattafa es una fragancia fresca, frutal y especiada con un fondo dulce de vainilla. Es ampliamente reconocida por su excelente relación calidad-precio y su gran similitud con el popular aroma de Invictus de Paco Rabanne o Hawas de Rasasi. Es ideal para uso diario"
    },

    {
        id: 7
        , name: "Lattafa Afeef Eau de Parfum 100ml"
        , precio: "$850"
        , tipo: "ars"
        , imagen: "https://azjasklep.com/cdn/shop/files/lattafa_afeef_1_1080.webp?v=1784336647"
        , descripcion: " Lattafa Afeef Eau de Parfum es una fragancia unisex con un aroma dulce, frutal y floral blanco, empaquetada en un llamativo frasco dorado con diseño de pavos reales. Su composición destaca por una salida jugosa de durazno, un corazón elegante de jazmín y nardos, y un fondo cremoso y gourmand de praliné y sándalo. Es un perfume versátil."
    },

    {
        id: 8
        , name: "Orientica Amber Rouge 80ml"
        , precio: "$1,499"
        , tipo: "arabes"
        , imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmiom5Wke4yD-XSHKkQYJ218EeXfaLxEAbybbZ-I6Fqw&s=10"
        , descripcion: "Orientica Amber Rouge es un extracto de perfume conocido por su aroma dulce, resinoso y sofisticado, famoso mundialmente por capturar la esencia de la alta perfumería de nicho a un precio accesible. Pertenece a la familia olfativa Ámbar Amaderada y destaca por su carácter opulento, cálido y una fijación excepcional en la piel. Su uso ideal es en ocasiones especiales, noches frías y eventos formales, donde su aroma envolvente y elegante deja una impresión duradera."
    },

    {
        id: 9
        , name: " Al Haramain Amber Oud Gold Edition Eau de Parfum 100ml"
        , precio: "$1,199"
        , tipo: "arabes"
        , imagen: "https://nobleperfumeria.com/wp-content/uploads/2025/12/45.6-Haramain-Amber-Oud-Gold-Edition-Unisex.webp"
        , descripcion: " Al Haramain Amber Oud Gold Edition es un extracto de perfume de la familia ámbar vainilla conocido por su potente aroma frutal de melón y piña con un fondo cremoso de vainilla y almizcle, cuyo uso ideal se centra en fiestas, salidas nocturnas y climas templados o fríos debido a su proyección pesada y duración extrema que dura más de 12 horas. "
    },

    {
        id: 10
        , name: "Supremacy Collector's Edition 100ml"
        , precio: "$1,450"
        , tipo: "arabes"
        , imagen: "https://http2.mlstatic.com/D_NQ_NP_881183-MLA109631059422_042026-O-arabe-afnan-supremacy-collectors-edition-edp-100ml.webp"
        , descripcion: "Supremacy Collector's Edition es un perfume árabe de alta duración con un aroma a piña madura, maderas finas y ámbar gris, conocido por ser una alternativa sofisticada y accesible al exclusivo Absolu Aventus de Creed. Su uso ideal en salidas nocturnas, citas y eventos especiales o formales durante las estaciones de otoño, invierno y días frescos, ya que su densa mezcla de piña madura y maderas sofisticadas destaca al máximo en climas templados."
    },



    ];

    let carrito = [];

    function precioANumero(precio) {
        return parseFloat(precio.replace("$", "").replace(",", ""));
    }

    function mostrarPerfumes(lista) {
        const contenedor = document.getElementById("perfumes");
        contenedor.innerHTML = "";

        if (lista.length === 0) {
            contenedor.innerHTML = "<p>No se encontraron perfumes que coincidan con la búsqueda.</p>";
            return;
        }

        for (let i = 0; i < lista.length; i++) {
            let color ="";
            if (lista[i].tipo === "diseñador") {
                color = "background-color: #999;";
            } else if (lista[i].tipo === "arabes") {
                color = "background-color: #f9f9f9;";
                } else {
                    color = "background-color: #898;";
                }

                contenedor.innerHTML += `
                <div class="card" style="${color}">
                    <img src="${lista[i].imagen}" alt="${lista[i].name}">
                    <h3>${lista[i].name}</h3>
                    <div class="desc">${lista[i].descripcion}</div>
                    <div class="notas">${lista[i].tipo}</div>
                    <div class="precio">${lista[i].precio}</div>
                    <button onclick="agregarALcarrito(${lista[i].id})">Agregar al carrito</button>
                </div>
                `;
        }
    }

    function agregarALcarrito(id) {
        let perfume = Perfumes.find(p => p.id === id);
        carrito.push(perfume);
        actualizarCarrito();
    }

    function abrirCarrito() {
        document.getElementById("panelCarrito").classList.toggle("abierto");
        document.getElementById("fondoCarrito").classList.toggle("oculto");
    }

    function quitarDelCarrito(position) {
        carrito.splice(position, 1);
        actualizarCarrito();
    }

    function actualizarCarrito() {
        let totalcarrito = 0;
        let lista = "";

        for (let i = 0; i < carrito.length; i++) {
            totalcarrito = totalcarrito + precioANumero(carrito[i].precio);
            lista += `
            <div class="item-carrito">
                ${carrito[i].name} - ${carrito[i].precio}
                <button onclick="quitarDelCarrito(${i})">Quitar</button>
            </div>`
        }

        let mensaje = "";
        let totalFinal = totalcarrito;
        if (totalcarrito >= 3500) {
            let descuento = totalcarrito * 0.10
            totalFinal = totalcarrito - descuento;
            mensaje = ` - ¡Felicidades! Has recibido un descuento del 10% por llegar a los $3500. Tu total con descuento es: $${(totalcarrito - descuento).toFixed(2)}`;
        } else if (totalcarrito >= 2500 && totalcarrito < 3500) {
            let descuento = totalcarrito * 0.05
            totalFinal = totalcarrito - descuento;
            mensaje = ` - ¡Felicidades! Has recibido un descuento del 5% por llegar a los $2500. Tu total con descuento es: $${(totalcarrito - descuento).toFixed(2)}`;
        
    }

    let texto= carrito.length === 1? "Perfume" : "Perfumes";
    document.getElementById("carrito").innerHTML = `${carrito.length} ${texto} - $${totalcarrito.toFixed(2)}${mensaje}`;
    document.getElementById("listaCarrito").innerHTML = lista ==="" ? "<p>El carrito está vacío.</p>" : lista;
    document.getElementById("totalPanel").innerHTML = `Total: $${totalFinal.toFixed(2)}`;
    document.getElementById("btnCarrito").innerHTML = `carrito (${carrito.length})`;
    }

    function filtrarPerfumes(tipo) {
        if (tipo === "todos") {
            mostrarPerfumes(Perfumes);
        } else if (tipo === "diseñador" || tipo === "arabes" || tipo === "nichos") {
            let lista = Perfumes.filter(p =>  p.tipo === tipo);
            mostrarPerfumes(lista);
        } else if (tipo === "precio") {
            let lista = Perfumes.filter(p => precioANumero(p.precio) < 2500);
            mostrarPerfumes(lista);
        }
    }

    mostrarPerfumes(Perfumes); 
    actualizarCarrito();

    