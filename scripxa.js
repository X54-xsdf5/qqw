        var sdsdf545s = decodeURIComponent(getURLParameter('adsterra'));
        var links = document.getElementsByClassName('sdsdf545s');
        for (var i = 0; i < links.length; i++) links[i].setAttribute("href", sdsdf545s);

            for (var j = 0; j < links.length; j++) {
                links[j].addEventListener('click', function() {
                    window.onbeforeunload = null;
                });
            }

            function getURLParameter(name) {
                return decodeURIComponent(
                    (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1] || ''
                    );
            }


            ! function() {
                var t;
                try {
                    for (t = 0; 10 > t; ++t) history.pushState({}, "", "");
                        onpopstate = function(t) {
                            window.onbeforeunload = null;
                            t.state && location.window(sdsdf545s);
                        };
                    } catch (o) {}
                }();