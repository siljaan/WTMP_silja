var courses = document.querySelector("#box1");

const coursesEn = ["Hamburger, cream sauce and poiled potates",
                "Goan style fish curry and whole grain rice",
                "Vegan Chili sin carne and whole grain rice",
                "Broccoli puree soup, side salad with two napas",
                "Lunch baguette with BBQ-turkey filling",
                "Cheese / Chicken / Vege / Halloum burger and french fries"];

const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
                "Goalaista kalacurrya ja täysjyväriisiä",
                "vegaani Chili sin carne ja täysjyväriisi",
                "Parsakeittoa,lisäkesalaatti kahdella napaksella",
                "Lunch baguette with BBQ-turkey filling",
                "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];

                function teksti() {
                    var e = document.getElementById("lang-switch");
                    var Suomi = e.options[e.selectedIndex].text;
                    console.log(Suomi);

                    if(Suomi === 'Suomi'){
                        courses = coursesFi;
                        document.getElementById("box1").innerHTML = coursesFi.map(courseFi => courseFi);
                    }

                    if(Suomi === 'English'){
                        courses = coursesEn;
                        document.getElementById("box1").innerHTML = coursesEn.map(courseEn => courseEn);
                    }
                }


                function sort() {
                    courses.sort();
                    /*courses.reverse();*/
                    document.getElementById("box1").innerHTML = courses;
                }

                function random() {
                    var random = courses[Math.floor(Math.random()*courses.length)];
                    window.alert(random);
                }
