//Certain text for a certain languages
const welcome_message_lang_nl = ["Goedenacht", "Goedemorgen", "Goedemiddag", "Goedenavond"];
const welcome_message_lang_en = ["Good night", "Good morning", "Good afternoon", "Good evening"];
const day_of_week_lang_nl = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
const day_of_week_lang_en = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month_lang_nl = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
const month_lang_en = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const interface_header_text_lang_nl = ["Het weer voor vandaag:", "Uw agenda voor vandaag:", "Uw notities:"];
const interface_header_text_lang_en = ["The weather for today:", "Your calendar for today:", "Your notes:"];
//Processing flags
let processing_calender_done = true;
let processing_notes_done = true;

function get_welcome_message(firstname, lastname, gender, lan) {
    let use_generic = false;
    let use_language;
    // Perform a check to see if you need to use generic welcome messages or if you can use personal message
    if (firstname, lastname, gender === null || firstname, lastname, gender === undefined) {
        use_generic = true;
    }
    if (gender === null) {
        use_generic = true
    }
    // Check which language to use for the welcome message
    if (lan === "NL") {
        use_language = "NL";
    } else if (lan === "EN") {
        use_language = "EN";
    } else {
        use_language = "EN";
    }

    let current_hours = new Date().getHours();
    let message
    if (current_hours >= 23 || current_hours < 6) {
        if (use_generic) {
            if (use_language === "NL") {
                message = welcome_message_lang_nl[0];
            } else {
                message = welcome_message_lang_en[0];
            }
        } else {
            if (use_language === "NL") {
                if (gender === "male") {
                    message = welcome_message_lang_nl[0] + ", Meneer " + lastname;
                } else {
                    message = welcome_message_lang_nl[0] + ", Mevrouw " + lastname;
                }
            } else {
                if (gender === "male") {
                    message = welcome_message_lang_en[0] + ", Sir " + lastname;
                } else {
                    message = welcome_message_lang_en[0] + ", Miss " + lastname;
                }
            }
        }
    } else if (current_hours > 6 && current_hours < 12) {
        if (use_generic) {
            if (use_language === "NL") {
                message = welcome_message_lang_nl[1];
            } else {
                message = welcome_message_lang_en[1];
            }
        } else {
            if (use_language === "NL") {
                if (gender === "male") {
                    message = welcome_message_lang_nl[1] + ", Meneer " + lastname;
                } else {
                    message = welcome_message_lang_nl[1] + ", Mevrouw " + lastname;
                }
            } else {
                if (gender === "male") {
                    message = welcome_message_lang_en[1] + ", Sir " + lastname;
                } else {
                    message = welcome_message_lang_en[1] + ", Miss " + lastname;
                }
            }
        }
    } else if (current_hours >= 12 && current_hours < 18) {
        if (use_generic) {
            if (use_language === "NL") {
                message = welcome_message_lang_nl[2];
            } else {
                message = welcome_message_lang_en[2];
            }
        } else {
            if (use_language === "NL") {
                if (gender === "male") {
                    message = welcome_message_lang_nl[2] + ", Meneer " + lastname;
                } else {
                    message = welcome_message_lang_nl[2] + ", Mevrouw " + lastname;
                }
            } else {
                if (gender === "male") {
                    message = welcome_message_lang_en[2] + ", Sir " + lastname;
                } else {
                    message = welcome_message_lang_en[2] + ", Miss " + lastname;
                }
            }
        }
    } else if (current_hours >= 18 && current_hours < 23) {
        if (use_generic) {
            if (use_language === "NL") {
                message = welcome_message_lang_nl[3];
            } else {
                message = welcome_message_lang_en[3];
            }
        } else {
            if (use_language === "NL") {
                if (gender === "male") {
                    message = welcome_message_lang_nl[3] + ", Meneer " + lastname;
                } else {
                    message = welcome_message_lang_nl[3] + ", Mevrouw " + lastname;
                }
            } else {
                if (gender === "male") {
                    message = welcome_message_lang_en[3] + ", Sir " + lastname;
                } else {
                    message = welcome_message_lang_en[3] + ", Miss " + lastname;
                }
            }
        }
    } else {
        message = "There was an error while trying to detect the current time";
    }
    // Display the welcome message
    document.getElementById("welcome-message").innerHTML = message;
    // Repeat this function after 1800000 milliseconds (0.5 hours)
    t = setTimeout(function () {
        get_welcome_message(firstname, lastname, gender, lan);
    }, 1800000);
}

function get_date(lan) {
    let use_language;
    // Check which language to use for the date message
    if (lan === "NL") {
        use_language = "NL";
    } else if (lan === "EN") {
        use_language = "EN";
    } else {
        use_language = "EN";
    }
    let current_datetime = new Date()
    let current_date = current_datetime.getDate()
    let current_dayoftheweek = current_datetime.getDay()
    let current_month = current_datetime.getMonth()

    let string_dayofweek
    if (use_language === "NL") {
        string_dayofweek = day_of_week_lang_nl[current_dayoftheweek]
    } else {
        string_dayofweek = day_of_week_lang_en[current_dayoftheweek]
    }

    let string_month
    if (use_language === "NL") {
        string_month = month_lang_nl[current_month]
    } else {
        string_month = month_lang_en[current_month]
    }

    // Display the date
    if (use_language === "NL") {
        document.getElementById("date").innerHTML = string_dayofweek + " " + current_date + " " + string_month;
    } else {
        document.getElementById("date").innerHTML = string_dayofweek + " " + current_date + " of " + string_month;
    }
    // Repeat this function after 1800000 milliseconds (0.5 hours)
    t = setTimeout(function () {
        get_welcome_message();
    }, 1800000);
}

async function get_weather(url, apikey, amount_of_weather_points, temp_style, lan) {
    let use_celsius = temp_style === "C";

    let headers = ["lan", "temp-style"];
    let headers_content = [lan];

    if (use_celsius) {
        headers_content += "C";
    } else {
        headers_content += "F";
    }

    let weather_data = await post_request(url, apikey, headers, headers_content);
    //TODO Implement weather data processing of the JSON

    // Repeat this function after 1800000 milliseconds (0.5 hours)
    t = setTimeout(function () {
        get_weather(url, apikey, amount_of_weather_points, temp_style, lan);
    }, 1800000);
}

async function get_calender(url, apikey, amount, lan) {
    if (processing_calender_done) {
        processing_calender_done = false
        let headers = ["lan", "amount"];
        let headers_content = [lan, amount];
        let calender_data = await post_request(url, apikey, headers, headers_content);
        //TODO Implement calender data processing of the JSON
        processing_calender_done = true
    }
    // Repeat this function after 1800000 milliseconds (0.5 hours)
    t = setTimeout(function () {
        get_calender(url, apikey, amount, lan);
    }, 1800000);
}

async function get_notes(url, apikey, amount, lan) {
    if (processing_notes_done) {
        processing_notes_done = false
        let headers = ["lan", "amount"];
        let headers_content = [lan, amount];
        let notes_data = await post_request(url, apikey, headers, headers_content);
        //TODO Implement notes data processing of the JSON
        processing_notes_done = true
    }
    // Repeat this function after 1800000 milliseconds (0.5 hours)
    t = setTimeout(function () {
        get_notes(url, apikey, amount, lan);
    }, 1800000);
}

function isTimeOneLen(number) {
    // Check to see if the number is smaller than 10 if so add a 0 to the front
    if (number < 10) {
        number = "0" + number
    }
    //Return the result
    return number
}

function clock() {
    // Get the current datetime
    let current_datetime = new Date();
    // Get the Hours, Minutes and Seconds
    let current_hours   = current_datetime.getHours();
    let current_minutes = current_datetime.getMinutes();
    let current_seconds = current_datetime.getSeconds();
    // Check to see if the time is smaller than 1 charcter, if so then add a 0 infront of the time
    current_hours   = isTimeOneLen(current_hours);
    current_minutes = isTimeOneLen(current_minutes);
    current_seconds = isTimeOneLen(current_seconds);
    // Display the time on the HTML document
    document.getElementById("time").innerHTML = current_hours + ":" + current_minutes + ":" + current_seconds;
    // Repeat this function after 500 milliseconds
    t = setTimeout(function () {
        clock();
    }, 500);
}

function InterfaceLan(lan) {
    if (lan === "NL") {
        document.getElementById("weather-header").innerHTML = interface_header_text_lang_nl[0]
        document.getElementById("agenda-header").innerHTML = interface_header_text_lang_nl[1]
        document.getElementById("notes-header").innerHTML = interface_header_text_lang_nl[2]
    } else {
        document.getElementById("weather-header").innerHTML = interface_header_text_lang_en[0]
        document.getElementById("agenda-header").innerHTML = interface_header_text_lang_en[1]
        document.getElementById("notes-header").innerHTML = interface_header_text_lang_en[2]
    }
}

function post_request(url, apikey, headers, headers_content) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            return this.response
        } else {
            return "{\"error-code\":\"101\",\"error-message\":\"There was an error while trying to retrieve data, Please try again later or take a look at the problem\"}"
        }
    };
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("api-key", apikey)
    let pos = 0;
    for (let header in headers) {
        let header_content = headers_content[pos]
        xhttp.setRequestHeader(header, header_content)
    }
    xhttp.send();
}