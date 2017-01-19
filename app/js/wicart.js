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
        "name": "IPhone 5",
        "price": "205"
    },
    "002": {
        "id": "002",
        "subid": {},
        "name": "IPad MIdasdNI",
        "price": "235"
    },
    "003": {
        "id": "003",
        "subid": {},
        "name": "IPad MINhrI",
        "price": "105"
    },
    "004": {
        "id": "004",
        "subid": {},
        "name": "IPad MINqwI",
        "price": "656"
    },
    "005": {
        "id": "005",
        "subid": {},
        "name": "IPad MINqdwI",
        "price": "244"
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
            }
            alert(local.send);
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
