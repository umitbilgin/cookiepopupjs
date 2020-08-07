/* CookiePopupJS v1.0.0 | github.com/umitbilgin/cookiepopupjs */

function createCookiePopup(obj) {
    if (typeof obj.type === "undefined")
        return false;

    switch (obj.type) {
        case "bottom":

            let popup = document.createElement("div");
            let text = document.createElement("div");
            let button = document.createElement("button");

            popup.id = "cookiePolicyPopup";
            popup.classList.add("bottom");
            popup.style.background = obj.background;
            popup.style.color = obj.textColor;

            text.innerHTML = obj.text;
            text.classList.add("cookieText");

            button.id = "acceptCookie";
            button.innerHTML = obj.buttonText;
            button.style.background = obj.buttonBackground;
            button.style.color = obj.buttonTextColor;

            popup.appendChild(text);
            popup.appendChild(button);

            if (getCookie("cookiePolicy") == "") {
                popup.classList.add("active");
                document.body.appendChild(popup);
            }

            button.addEventListener("click", function () {
                setCookie("cookiePolicy", "1", 180);
                popup.classList.remove("active");
            });

            break;
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}