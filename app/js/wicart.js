/***************************************
 * JQuery based script
 * Basket on client side
 * Created WebInside WebStudio (c) 2014
 * Use only for linked www.webinside.ru
 **************************************/

var cart;
var config;
var wiNumInputPrefID;
/* WI-GLOBAL-VARS */
$(document).ready(function() {
    cart = new WICard("cart");
    config = {
        'clearAfterSend': true,
        'showAfterAdd': false
    };

    cart.init("basketwidjet", config);
    /* WI-MODULES */
});
document.addEventListener('visibilitychange', function(e) {
    cart.init("basketwidjet", config);
}, false);


var priceList = {
    "001": {
        "id": "001",
        "subid": {},
        "name": "Вега",
        "price": "199"
    },
    "002": {
        "id": "002",
        "subid": {},
        "name": "Гари",
        "price": "199"
    },
    "003": {
        "id": "003",
        "subid": {},
        "name": "Бука",
        "price": "129"
    },
    "004": {
        "id": "004",
        "subid": {},
        "name": "Капа хосомаки",
        "price": "99"
    },
    "005": {
        "id": "005",
        "subid": {},
        "name": "Лава",
        "price": "279"
    },
    "006": {
        "id": "006",
        "subid": {},
        "name": "Нью-Йорк маки",
        "price": "219"
    },
    "006": {
        "id": "006",
        "subid": {},
        "name": "Грин ролл",
        "price": "189"
    },
    "007": {
        "id": "007",
        "subid": {},
        "name": "Сырный ролл",
        "price": "169"
    },
    "008": {
        "id": "008",
        "subid": {},
        "name": "Аляска",
        "price": "259"
    },
    "009": {
        "id": "009",
        "subid": {},
        "name": "Банито маки",
        "price": "219"
    },
    "010": {
        "id": "010",
        "subid": {},
        "name": "Кунсей капа",
        "price": "229"
    },
    "011": {
        "id": "011",
        "subid": {},
        "name": "Золотой унаги дракон",
        "price": "259"
    },
    "012": {
        "id": "012",
        "subid": {},
        "name": "Икура сомаки",
        "price": "279"
    },
    "013": {
        "id": "013",
        "subid": {},
        "name": "Мадагаскар",
        "price": "229"
    },
    "014": {
        "id": "014",
        "subid": {},
        "name": "Майами",
        "price": "199"
    },
    "015": {
        "id": "015",
        "subid": {},
        "name": "Йоджи маки",
        "price": "380"
    },
    "016": {
        "id": "016",
        "subid": {},
        "name": "Cин унаги",
        "price": "249"
    },
    "017": {
        "id": "017",
        "subid": {},
        "name": "Скандинавия",
        "price": "279"
    },
    "018": {
        "id": "018",
        "subid": {},
        "name": "Калифорния с креветкой",
        "price": "259"
    },
    "019": {
        "id": "019",
        "subid": {},
        "name": "Филадельфия делюкс",
        "price": "289"
    },
    "020": {
        "id": "020",
        "subid": {},
        "name": "Тори ролл",
        "price": "289"
    },
    "021": {
        "id": "021",
        "subid": {},
        "name": "Саяке маки",
        "price": "279"
    },
    "022": {
        "id": "022",
        "subid": {},
        "name": "Хауз ролл",
        "price": "179"
    },
    "023": {
        "id": "023",
        "subid": {},
        "name": "Шахматы роллы",
        "price": "259"
    },
    "024": {
        "id": "024",
        "subid": {},
        "name": "Филадельфия",
        "price": "249"
    },
    "025": {
        "id": "025",
        "subid": {},
        "name": "Цезарь ролл",
        "price": "159"
    },
    "026": {
        "id": "026",
        "subid": {},
        "name": "Филадельфия с луком",
        "price": "249"
    },
    "027": {
        "id": "027",
        "subid": {},
        "name": "Кавагиши",
        "price": "129"
    },
    "028": {
        "id": "028",
        "subid": {},
        "name": "Зелёный дракон",
        "price": "299"
    },
    "029": {
        "id": "029",
        "subid": {},
        "name": "Гейша",
        "price": "199"
    },
    "030": {
        "id": "030",
        "subid": {},
        "name": "Инь-Янь",
        "price": "209"
    },
    "031": {
        "id": "031",
        "subid": {},
        "name": "Калифорния",
        "price": "249"
    },
    "032": {
        "id": "032",
        "subid": {},
        "name": "Канада",
        "price": "279"
    },
    "033": {
        "id": "033",
        "subid": {},
        "name": "Нежный угорь",
        "price": "229"
    },
    "034": {
        "id": "034",
        "subid": {},
        "name": "Планета маки",
        "price": "199"
    },
    "035": {
        "id": "035",
        "subid": {},
        "name": "Онигара",
        "price": "299"
    },
    "036": {
        "id": "036",
        "subid": {},
        "name": "Саяке унаги маки",
        "price": "249"
    },
    "037": {
        "id": "037",
        "subid": {},
        "name": "Филадельфия с огурцом",
        "price": "249"
    },
    "038": {
        "id": "038",
        "subid": {},
        "name": "Унаги ролл",
        "price": "219"
    },
    "039": {
        "id": "039",
        "subid": {},
        "name": "Унаги маки ролл",
        "price": "189"
    },
    "040": {
        "id": "040",
        "subid": {},
        "name": "Унаги тидзу",
        "price": "249"
    },
    "041": {
        "id": "041",
        "subid": {},
        "name": "Фудзияма",
        "price": "249"
    },
    "042": {
        "id": "042",
        "subid": {},
        "name": "Экспресс",
        "price": "229"
    },
    "043": {
        "id": "043",
        "subid": {},
        "name": "Филадельфия с креветкой",
        "price": "259"
    },
    "044": {
        "id": "044",
        "subid": {},
        "name": "Якудза",
        "price": "269"
    },
    "045": {
        "id": "045",
        "subid": {},
        "name": "Норт ролл",
        "price": "259"
    },
    "046": {
        "id": "046",
        "subid": {},
        "name": "Окинава",
        "price": "219"
    },
    "047": {
        "id": "047",
        "subid": {},
        "name": "Унаги филадельфия",
        "price": "269"
    },
    "048": {
        "id": "048",
        "subid": {},
        "name": "Гурмэ маки",
        "price": "229"
    },
    "049": {
        "id": "049",
        "subid": {},
        "name": "Бука",
        "price": "129"
    },
    "050": {
        "id": "050",
        "subid": {},
        "name": "Бостон",
        "price": "219"
    },
    "051": {
        "id": "051",
        "subid": {},
        "name": "Ролл с огурцом",
        "price": "59"
    },
    "052": {
        "id": "052",
        "subid": {},
        "name": "Ролл с авокадо",
        "price": "79"
    },
    "053": {
        "id": "053",
        "subid": {},
        "name": "Ролл с слабосоленым лососем",
        "price": "89"
    },
    "054": {
        "id": "054",
        "subid": {},
        "name": "Ролл с лососем копченым",
        "price": "89"
    },
    "055": {
        "id": "055",
        "subid": {},
        "name": "Ролл с угрем",
        "price": "99"
    },
    "056": {
        "id": "056",
        "subid": {},
        "name": "Ролл с креветкой",
        "price": "99"
    },
    "057": {
        "id": "057",
        "subid": {},
        "name": "Ролл с тунцом",
        "price": "109"
    },
    "058": {
        "id": "058",
        "subid": {},
        "name": "Запеченный лосось",
        "price": "259"
    },
    "059": {
        "id": "059",
        "subid": {},
        "name": "Запеченная креветка",
        "price": "259"
    },
    "060": {
        "id": "060",
        "subid": {},
        "name": "Запеченная филадельфия",
        "price": "279"
    },
    "061": {
        "id": "061",
        "subid": {},
        "name": "Запеченные мидии",
        "price": "189"
    },
    "062": {
        "id": "062",
        "subid": {},
        "name": "Запеченный гребешок",
        "price": "189"
    },
    "063": {
        "id": "063",
        "subid": {},
        "name": "Запеченный кальмар",
        "price": "159"
    },
    "064": {
        "id": "064",
        "subid": {},
        "name": "Запеченный угорь",
        "price": "229"
    },
    "065": {
        "id": "065",
        "subid": {},
        "name": "Унаги темпура",
        "price": "239"
    },
    "066": {
        "id": "066",
        "subid": {},
        "name": "Цезарь темпура",
        "price": "199"
    },
    "067": {
        "id": "067",
        "subid": {},
        "name": "Сяки спайси темпура",
        "price": "199"
    },
    "068": {
        "id": "068",
        "subid": {},
        "name": "Эби спайси темпура",
        "price": "219"
    },
    "069": {
        "id": "069",
        "subid": {},
        "name": "Чиз темпура",
        "price": "249"
    },
    "070": {
        "id": "070",
        "subid": {},
        "name": "Горячая филадельфия",
        "price": "239"
    },
    "071": {
        "id": "071",
        "subid": {},
        "name": "Горячая гейша",
        "price": "259"
    },
    "072": {
        "id": "072",
        "subid": {},
        "name": "Темпура тортилья с лососем",
        "price": "239"
    },
    "073": {
        "id": "073",
        "subid": {},
        "name": "Темпура тортилья с беконом",
        "price": "249"
    },
    "074": {
        "id": "074",
        "subid": {},
        "name": "Тортилья с угрем",
        "price": "289"
    },
    "075": {
        "id": "075",
        "subid": {},
        "name": "Тортилья с лососем",
        "price": "219"
    },
    "076": {
        "id": "076",
        "subid": {},
        "name": "Тортилья с говядиной",
        "price": "199"
    },
    "077": {
        "id": "077",
        "subid": {},
        "name": "Тортилья с беконом",
        "price": "199"
    },
    "078": {
        "id": "078",
        "subid": {},
        "name": "Тортилья с курицей",
        "price": "169"
    },
    "079": {
        "id": "079",
        "subid": {},
        "name": "Тортилья с овощами",
        "price": "169"
    },
    "080": {
        "id": "080",
        "subid": {},
        "name": "Принт",
        "price": "159"
    },
    "081": {
        "id": "081",
        "subid": {},
        "name": "Тамаго эби маки",
        "price": "199"
    },
    "082": {
        "id": "082",
        "subid": {},
        "name": "Вегас",
        "price": "169"
    },
    "082": {
        "id": "082",
        "subid": {},
        "name": "Куцу",
        "price": "149"
    },
    "083": {
        "id": "083",
        "subid": {},
        "name": "Филадельфия в омлете",
        "price": "129"
    },
    "084": {
        "id": "084",
        "subid": {},
        "name": "Чакин икура",
        "price": "209"
    },
    "085": {
        "id": "085",
        "subid": {},
        "name": "Сяке",
        "price": "39"
    },
    "086": {
        "id": "086",
        "subid": {},
        "name": "Унаги",
        "price": "59"
    },
    "086": {
        "id": "086",
        "subid": {},
        "name": "Эби",
        "price": "69"
    },
    "087": {
        "id": "087",
        "subid": {},
        "name": "Умисай гюнику",
        "price": "209"
    },
    "088": {
        "id": "088",
        "subid": {},
        "name": "Сяки сарада",
        "price": "229"
    },
    "089": {
        "id": "089",
        "subid": {},
        "name": "Тикен сарада",
        "price": "199"
    },
    "090": {
        "id": "090",
        "subid": {},
        "name": "Цезарь с креветкой",
        "price": "299"
    },
    "091": {
        "id": "091",
        "subid": {},
        "name": "Цезарь с курицей",
        "price": "189"
    },
    "092": {
        "id": "092",
        "subid": {},
        "name": "Киоти",
        "price": "229"
    },
    "093": {
        "id": "093",
        "subid": {},
        "name": "Рис с креветками",
        "price": "199"
    },
    "094": {
        "id": "094",
        "subid": {},
        "name": "Рис с говядиной",
        "price": "189"
    },
    "095": {
        "id": "095",
        "subid": {},
        "name": "Рис со свининой",
        "price": "189"
    },
    "096": {
        "id": "096",
        "subid": {},
        "name": "Рис с курицей",
        "price": "179"
    },
    "097": {
        "id": "097",
        "subid": {},
        "name": "Рис с овощами",
        "price": "169"
    },
    "098": {
        "id": "098",
        "subid": {},
        "name": "Лапша с говядиной",
        "price": "300"
    },
    "099": {
        "id": "099",
        "subid": {},
        "name": "Лапша со свининой",
        "price": "300"
    },
    "100": {
        "id": "100",
        "subid": {},
        "name": "Лапша с курицей",
        "price": "300"
    },
    "101": {
        "id": "101",
        "subid": {},
        "name": "Лапша с морепродуктами",
        "price": "259"
    },
    "102": {
        "id": "102",
        "subid": {},
        "name": "Лапша с копченостями",
        "price": "219"
    },
    "103": {
        "id": "103",
        "subid": {},
        "name": "Фунчоза с говядиной",
        "price": "229"
    },
    "104": {
        "id": "104",
        "subid": {},
        "name": "Фунчоза со свининой",
        "price": "229"
    },
    "105": {
        "id": "105",
        "subid": {},
        "name": "Фунчоза с курицей",
        "price": "219"
    },
    "106": {
        "id": "106",
        "subid": {},
        "name": "Набор Мини",
        "price": "329"
    },
    "107": {
        "id": "107",
        "subid": {},
        "name": "Набор №1",
        "price": "749"
    },
    "108": {
        "id": "108",
        "subid": {},
        "name": "Набор №2",
        "price": "499"
    },
    "109": {
        "id": "109",
        "subid": {},
        "name": "Набор № 3",
        "price": "1899"
    },
    "110": {
        "id": "110",
        "subid": {},
        "name": "Набор Ассорти",
        "price": "899"
    },
    "111": {
        "id": "111",
        "subid": {},
        "name": "Набор Тортилья",
        "price": "1049"
    },
    "112": {
        "id": "112",
        "subid": {},
        "name": "Набор Дракон",
        "price": "2999"
    },
    "113": {
        "id": "113",
        "subid": {},
        "name": "Имбирь",
        "price": "20"
    },
    "114": {
        "id": "114",
        "subid": {},
        "name": "Соевый соус",
        "price": "20"
    },
    "115": {
        "id": "115",
        "subid": {},
        "name": "Васаби",
        "price": "20"
    },
    "116": {
        "id": "116",
        "subid": {},
        "name": "Терияки",
        "price": "20"
    },
    "117": {
        "id": "117",
        "subid": {},
        "name": "Цезарь-соус",
        "price": "20"
    },
    "118": {
        "id": "118",
        "subid": {},
        "name": "Сливочный соус",
        "price": "20"
    },
    "119": {
        "id": "119",
        "subid": {},
        "name": "Соус с зеленью",
        "price": "20"
    },
    "120": {
        "id": "120",
        "subid": {},
        "name": "Чесночный соус",
        "price": "20"
    },
    "121": {
        "id": "121",
        "subid": {},
        "name": "Соус спайси",
        "price": "20"
    },
    "122": {
        "id": "122",
        "subid": {},
        "name": "Coca-Cola",
        "price": "70"
    },
    "123": {
        "id": "123",
        "subid": {},
        "name": "Fanta",
        "price": "70"
    },
    "124": {
        "id": "124",
        "subid": {},
        "name": "Sprite",
        "price": "70"
    },
    "125": {
        "id": "125",
        "subid": {},
        "name": "Nestea",
        "price": "55"
    }
};

var local = {
    "basket_is_empty": "Корзина пуста",
    "name": "Название",
    "price": "Цена",
    "all": "Всего",
    "order": "Оформить заказ",
    "basket": "Корзина",
    "num": "Количество",
    "send": "Спасибо за покупку!\nМы свяжемся с Вами в ближайшее время",
    "goods": "товаров",
    "amount": "на сумму"
};

function WICard(obj, plugins) {
    this.widjetX = 0;
    this.widjetY = 0;
    this.widjetObj;
    this.widjetPos;
    this.cardID = "";
    this.DATA = {};
    this.IDS = [];
    this.objNAME = obj;
    this.CONFIG = {};
    this.IMG = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABpFBMVEUAAABEREBEREBEREBEREASEhEJCQgGBgYBAQEAAAAGBgUHBwYAAAAAAAADAwNEREBEREAJCQkICAcGBgYFBQUJCQgnJyVEREAICAgBAQEAAAAICAcAAAAAAAAAAAAJCQgAAAAGBgYBAQEQEA8NDQwHBwcBAQEMDAsSEhEJCQkBAQEBAQEBAQFAQDxEREBEREADAwIAAAABAQESEhEkJCIAAAAICAgAAAAQEA9EREAAAAATExIAAAAKCgkNDQwAAAAAAAABAQETExIHBwcDAwMDAwMTExIAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAADAwIAAAAGBgUBAQEWFhUAAAAAAAAHBwYBAQEVFRMDAwMHBwcUFBMWFhUBAQETExIAAAAAAAADAwMMDAsAAAAAAAASEhEAAAAUFBMAAAAJCQkrKygDAwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMAAAAJCQgAAAAiIiABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQFEREAFBQUBAQEAAAAGBgYICAgHBwcBAQEJW8x2AAAAhXRSTlMAAQcIAjJ0kZqZnp+LaygNDxKw/v6wIwPY1A+upf4nenGWvXCg/Pubc8eSmLkcHxpW+vlhBr6hl3EDUl9pop5Q+fhe+1FPXVT8mlxfXWD9+1dbnPRRRved9ldI+Fhd+mBaVlSYWJN1V2dqwwVTA8ORvJXAknRzKii2rCjc3BUTqagrepgUbRZwswAAAAlwSFlzAAAASAAAAEgARslrPgAAAb1JREFUOMuNk2dTwkAQhpdiCZagotiwd5RYQeyKJdii2FDsvffeG0TJnza3lzg4kBnv0zt5NpvdZ3IA/zs6vUGv00wAxrj4hESGnERTkomk5JRU1swaFZ6WnhEMieSEgl9qsmRmWVWe/R2W8KkUjkw5uUr/vNhcEvPpLHEZGly0FYA8pb4wqMFFscioBzAU06lKSsvKKa+orKqmqYY1yB3smGvrHFx9A0mNTQ6uuQU7Oc1yB50Lc6uDc0ObXNHYTlIHfqmTJaZcmLvkpwDdPb19hAODkzjRlAuzpx93GhhEPsTjpF6gBTg1PyxnN4d8hHKJoQUhuhU/qvKxcWVTWmAPKlsLE5RP8qoJLND5vhQ/U9PIYWZWNcWgyTnFpH+ecoCFgNKTQZM+atK/qHI3txSg73gjTC6vIF9dw0nXhSiTG8g3eaEeJ92KMrlN+I4gSp5dkvaiTO4fAKwJ6PQQ4Og4wuQJ3fp070zZXzhJOafpAgsuQ2Gtf+4KC64tWtx2gybZW61/8g7QpPn+ITZ/fAI0yVqfX2wx+r8+gxVNkl3f3j+cnU4v3j4vSa73NwDrJ5qkt+f3Jv5N6u3Vvt0/UGcpYbC85ecAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTMtMDUtMThUMDY6MDM6MzEtMDU6MDALk1CfAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDEzLTA1LTE4VDA2OjAzOjMxLTA1OjAwes7oIwAAAABJRU5ErkJggg==";


    this.init = function(widjetID, config) {
        this.CONFIG = config || {};
        try {
            this.DATA = JSON.parse(localStorage.getItem(widjetID));
            if ($.isEmptyObject(this.DATA)) {
                this.DATA = {};
            }
        } catch (e) {
            this.DATA = {};
        }
        try {
            this.IDS = JSON.parse(localStorage.getItem(widjetID + "_ids"));
            if ($.isEmptyObject(this.IDS)) {
                this.IDS = [];
            }
        } catch (e) {
            this.IDS = [];
        }

        this.cardID = widjetID;

        this.widjetObj = $("#" + widjetID);


        if ($.isEmptyObject(this.DATA)) {
            this.widjetObj.html(local.basket_is_empty);
        } else {
            this.reCalc();
            this.renderBasketTable();
        }

    }

    /***********************************************************************************************
     * example: onclick="cart.addToCart(this, '2', 'Name of comic 2', '25500')
     **********************************************************************************************/
    this.addToCart = function(curObj, id, params) {
        var kol = 1;

        if ($("input").is("#" + wiNumInputPrefID + id)) {
            kol = parseInt($("#" + wiNumInputPrefID + id).val());
        }

        id = ($.isNumeric(id)) ? "ID" + id.toString() : id;

        var id_ = ($.isEmptyObject(params.subid)) ? id : id + "_" + params.subid;


        var goodieLine = {
            "id": id_,
            "name": params.name,
            "price": params.price,
            "num": kol,
            "url": document.location.href,
            "photo": ""
        };

        if ($.isEmptyObject(this.DATA)) {
            this.DATA[id_] = goodieLine;
            this.IDS.push(id_);
        } else
            for (var idkey in this.DATA) {


                if ($.inArray(id_, this.IDS) === -1) {
                    this.DATA[id_] = goodieLine;
                    this.IDS.push(id_)

                } else
                if (idkey == id_) {

                    this.DATA[idkey].num += kol;

                }
            }

        localStorage.setItem(this.cardID, JSON.stringify(this.DATA));
        localStorage.setItem(this.cardID + "_ids", JSON.stringify(this.IDS));
        this.reCalc();

        this.renderBasketTable();

        if (this.CONFIG.showAfterAdd) {
            cart.showWindow('bcontainer', 1);
        }
    }
    this.reCalc = function() {
        var num = 0;
        var sum = 0;
        for (var idkey in this.DATA) {
            num += parseInt(this.DATA[idkey].num);
            sum += parseFloat(parseInt(this.DATA[idkey].num) * parseFloat(this.DATA[idkey].price));
        }

        // * Выводит кол-во и сумму в окошко* //
        this.widjetObj.html(num + " " + local.goods + " " + local.amount + " " + sum + " Руб.");
        localStorage.setItem(this.cardID, JSON.stringify(this.DATA));

        // *** currency plugin *** //

        if (typeof WICartConvert == 'function') {
            sum = WICartConvert(sum);
        }
    }
    this.clearBasket = function() {
        this.DATA = {};
        this.IDS = [];
        this.widjetObj.html(local.basket_is_empty);
        localStorage.setItem(this.cardID, "{}");
        localStorage.setItem(this.cardID + "_ids", "[]");
        $("#btable").html('');
        $("#bcontainer").remove();
        $("#blindLayer").remove();
    }
    this.renderBasketTable = function() {

        if ($('#bcontainer').length == 0) {
            $("#cart__body").prepend(" \
            <div id='bcontainer' class='product__table-container'>\
                <table id='bcaption' class='product-table'>\
                    <tr>\
                        <td class='product-table__name'>" + local.name + "</td>\
                        <td class='product-table__price'>" + local.price + "</td>\
                        <td class='product-table__calculate'>" + local.num + "</td>\
                        <td class='product-table__sum'>" + local.all + "</td>\
                        <td class='product-table__remove'></td>\
                    </tr>\
                </table>\
                <div id='overflw'>\
                    <table id='btable' class='product-table'></table>\
                </div>\
            </div>\
			");

        } else {
            $("#btable").html("");
        }
        this.center($("#bcontainer"))

        for (var idkey in this.DATA) {

            with(this.DATA[idkey]) {
                // <td>' + id + '</td> \
                var productLine = '\
                    <tr id="wigoodline-' + id + '" class="product-table__row">\
                        <td class="product-table__name">' + name + '</td>\
                        <td id="lineprice_' + id + '" class="product-table__price">' + price + ' руб.</td>\
                        <td class="product-table__calculate">\
                            <span class="product-table__button basket_num_buttons" id="minus_' + id + '">\
                                <i class="product-table__icon fa fa-minus-square-o" aria-hidden="true"></i>\
                            </span>\
                            <span class="product-table__number" id="basket_num_' + id + '">' + num + '</span>\
                            <span class="product-table__button basket_num_buttons" id="plus_' + id + '">\
                                <i class="product-table__icon fa fa-plus-square-o" aria-hidden="true"></i>\
                            </span>\
                        </td>\
                        <td id="linesum_' + id + '" class="product-table__sum">' + parseFloat(price * num) + ' руб.</td>\
                        <td class="product-table__remove">\
                            <a class="product-table__remove-button" href="#" onclick="' + this.objNAME + '.delItem(\'' + id + '\')">\
                                <i class="product-table__icon fa fa-times" aria-hidden="true"></i>\
                            </a>\
                        </td>\
                    </tr>';
            }

            $("#btable").append(productLine);

            $(".basket_num_buttons").data("min-value");
        }
        //* кнопки +/-
        var self = this;
        for (var ids in this.IDS) {
            $('#minus_' + this.IDS[ids]).bind("click", function() {
                var cartItemID = $(this).attr("id").substr(6);
                var cartNum = parseInt($("#basket_num_" + cartItemID).text());
                var cartNum = (cartNum > 1) ? cartNum - 1 : 1;
                self.DATA[cartItemID].num = cartNum;

                $("#basket_num_" + cartItemID).html(cartNum);
                var price = parseFloat($("#lineprice_" + cartItemID).html());
                $("#linesum_" + cartItemID).html(parseFloat(price * cartNum) + ' руб.');

                self.sumAll();

                self.reCalc();

            });

            $('#plus_' + this.IDS[ids]).bind("click", function() {
                var cartItemID = $(this).attr("id").substr(5);
                var cartNum = parseInt($("#basket_num_" + cartItemID).text());
                var cartNum = (cartNum < 1000000) ? cartNum + 1 : 1000000;
                self.DATA[cartItemID].num = cartNum;
                $("#basket_num_" + cartItemID).html(cartNum);
                var price = parseFloat($("#lineprice_" + cartItemID).html());
                $("#linesum_" + cartItemID).html(parseFloat(price * cartNum) + ' руб.');

                self.sumAll();
                self.reCalc();

            });

        }
        this.sumAll();

    }
    this.sumAll = function() {
        var sum = 0;
        for (var idkey in this.DATA) {
            sum += parseFloat(this.DATA[idkey].price * this.DATA[idkey].num);
        }
        $("#bsum").html(sum + " руб.");
    }
    this.center = function(obj) {

        // obj.css({
        //     "top": "200px"
        // });
        // obj.css({
        //     "left": Math.max(0, (($(window).width() - $(obj).outerWidth()) / 2) + $(window).scrollLeft()) + "px"
        // });
        return obj;
    }
    this.showWinow = function(win, blind) {
        $("#" + win).show();
        if (blind)
            $("#blindLayer").show();
    }
    this.closeWindow = function(win, blind) {
        $("#" + win).removeClass('is-opened').addClass('is-filled');
        if (blind)
            $("#blindLayer").hide();
    }
    this.delItem = function(id) {
        if (swal({
                title: 'Товар удалён.',
                text: 'Вы сможете добавить его позже в любой момент',
                type: 'success',
                timer: 3000
            })) {
            $("#btable").html("");
            delete this.DATA[id];
            this.IDS.splice($.inArray(id, this.IDS), 1);
            this.reCalc();
            this.renderBasketTable();
            localStorage.setItem(this.cardID, JSON.stringify(this.DATA));
            localStorage.setItem(this.cardID + "_ids", JSON.stringify(this.IDS));
            if (this.IDS.length == 0)
                this.widjetObj.html(local.basket_is_empty);
        }
    }

    // Отправка
    this.sendOrder = function(domElm) {
        var bodyHTML = "";
        var arr = domElm.split(",");

        for (var f = 0; f < arr.length; f++) {

            bodyHTML += this.getForm(arr[f]) + "<br><br>";

        };
        $('.basket_num_buttons').remove();
        $.post("sendmail.php?subj=Order WICart", {
            "order": bodyHTML
        }).done(function(data) {
            cart.closeWindow("cart", 0)
            cart.closeWindow("order", 0)
            cart.clearBasket();
            if (cart.CONFIG.clearAfterSend) {
                cart.clearBasket();
            };
            swal({
                title: 'Заказ отправлен!',
                text: 'Мы свяжемся с Вами.',
                type: 'success',
                showCloseButton: true,
                timer: 3000
            })
        });

    }
    this.getForm = function(formId) {
        var formObj = document.getElementById(formId);
        var copyForm = formObj.cloneNode(true);

        INPUTS = [].slice.call(copyForm.querySelectorAll("input,textarea"));

        INPUTS.forEach(function(elm) {
            if ((elm.tagName == 'INPUT') && ((elm.type == 'text') || (elm.type == 'hidden'))) {
                var subjP = document.createElement('b');
                subjP.innerHTML = elm.placeholder;
                elm.parentNode.insertBefore(subjP, elm);
                var spanReplace = document.createElement("div");
                spanReplace.innerHTML = elm.value;
                elm.parentNode.replaceChild(spanReplace, elm);
            } else
            if (elm.tagName == 'TEXTAREA') {
                var subjP = document.createElement('b');
                subjP.innerHTML = elm.placeholder;
                elm.parentNode.insertBefore(subjP, elm);
                var spanReplace = document.createElement("div");
                spanReplace.innerHTML = $("#" + elm.id).val();
                elm.parentNode.replaceChild(spanReplace, elm);
            }
        });


        return copyForm.innerHTML;
    }
}
