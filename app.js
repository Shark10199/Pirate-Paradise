var PirateMusic = document.getElementById("PirateMusic")
var ul = document.querySelector(".one");
var ul2 = document.querySelector(".two");
var windowsCheck = document.querySelector(".winCheck")
var androidCheck = document.querySelector(".anCheck")
var type = "";
var video = document.querySelector(".vidOne");
var video2 = document.querySelector(".vidTwo");
var video3 = document.querySelector(".vidThree");
var video4 = document.querySelector(".vidFour");

video.onplaying = function() {
    PirateMusic.pause();
}

video.onpause = function() {
    PirateMusic.play();
}

video.onended = function() {
    PirateMusic.play();
}

video2.onplaying = function() {
    PirateMusic.pause();
}

video2.onpause = function() {
    PirateMusic.play();
}

video2.onended = function() {
    PirateMusic.play();
}

video3.onplaying = function() {
    PirateMusic.pause();
}

video3.onpause = function() {
    PirateMusic.play();
}

video3.onended = function() {
    PirateMusic.play();
}

video4.onplaying = function() {
    PirateMusic.pause();
}

video4.onpause = function() {
    PirateMusic.play();
}

video4.onended = function() {
    PirateMusic.play();
}

ul.firstElementChild.querySelector("button").classList.add("round")
ul.lastElementChild.querySelector("button").classList.add("round2")

ul2.firstElementChild.querySelector("button").classList.add("round")
ul2.lastElementChild.querySelector("button").classList.add("round2")

windowsCheck.addEventListener("click", function() {
    type = "Windows";
    if (document.querySelector(".categories2").classList.contains("hide")) {
        document.querySelector(".categories2").classList.remove("hide");
    }
});

androidCheck.addEventListener("click", function() {
    type = "Android";
    if (document.querySelector(".categories2").classList.contains("hide")) {
        document.querySelector(".categories2").classList.remove("hide");
    }
});

document.querySelector(".game").addEventListener("click", function() {
    if (!document.querySelector(".android").classList.contains("hide")) {
        document.querySelector(".android").classList.add("hide")
    }
    if (!document.querySelector(".windows").classList.contains("hide")) {
        document.querySelector(".windows").classList.add("hide")
    }
    if (type == "Android" && document.querySelector(".android").classList.contains("hide")) {
        if (document.querySelector(".gameSitePage").classList.contains("hide")) {
            document.querySelector(".gameSitePage").classList.remove("hide")
        }
        if (!document.querySelector(".windows").classList.contains("hide")) {
            document.querySelector(".windows").classList.add("hide")
        }
        document.querySelector(".android").classList.remove("hide")
        if (!document.querySelector(".homePage").classList.contains("hide")) {
            document.querySelector(".homePage").classList.add("hide");
        }
        if (!document.querySelector(".contactText").classList.contains("hide")) {
            document.querySelector(".contactText").classList.add("hide");
        }
        if (!document.querySelector(".categoriesPage").classList.contains("hide")) {
            document.querySelector(".categoriesPage").classList.add("hide");
        }
        if (document.querySelector(".gameSitePage").classList.contains("hide")) {
            document.querySelector(".gameSitePage").classList.remove("hide")
        }
    }
    if (type == "Windows" && document.querySelector(".windows").classList.contains("hide")) {
        if (document.querySelector(".gameSitePage").classList.contains("hide")) {
            document.querySelector(".gameSitePage").classList.add("hide")
        }
        if (!document.querySelector(".android").classList.contains("hide")) {
            document.querySelector(".android").classList.add("hide")
        }
        document.querySelector(".windows").classList.remove("hide")
        if (!document.querySelector(".homePage").classList.contains("hide")) {
            document.querySelector(".homePage").classList.add("hide");
        }
        if (!document.querySelector(".contactText").classList.contains("hide")) {
            document.querySelector(".contactText").classList.add("hide");
        }
        if (!document.querySelector(".categoriesPage").classList.contains("hide")) {
            document.querySelector(".categoriesPage").classList.add("hide");
        }
        if (document.querySelector(".gameSitePage").classList.contains("hide")) {
            document.querySelector(".gameSitePage").classList.remove("hide")
        }
    }
});

document.querySelector(".software").addEventListener("click", function() {
    if (!document.querySelector(".androidtwo").classList.contains("hide")) {
        document.querySelector(".androidtwo").classList.add("hide")
    }
    if (!document.querySelector(".windowstwo").classList.contains("hide")) {
        document.querySelector(".windowstwo").classList.add("hide")
    }
    if (type == "Android" && document.querySelector(".androidtwo").classList.contains("hide")) {
        if (document.querySelector(".softwarePage").classList.contains("hide")) {
            document.querySelector(".softwarePage").classList.remove("hide")
        }
        if (!document.querySelector(".windowstwo").classList.contains("hide")) {
            document.querySelector(".windowstwo").classList.add("hide")
        }
        document.querySelector(".androidtwo").classList.remove("hide")
        if (!document.querySelector(".homePage").classList.contains("hide")) {
            document.querySelector(".homePage").classList.add("hide");
        }
        if (!document.querySelector(".contactText").classList.contains("hide")) {
            document.querySelector(".contactText").classList.add("hide");
        }
        if (!document.querySelector(".categoriesPage").classList.contains("hide")) {
            document.querySelector(".categoriesPage").classList.add("hide");
        }
        if (document.querySelector(".softwarePage").classList.contains("hide")) {
            document.querySelector(".softwarePage").classList.remove("hide")
        }
    }
    if (type == "Windows" && document.querySelector(".windowstwo").classList.contains("hide")) {
        if (document.querySelector(".softwarePage").classList.contains("hide")) {
            document.querySelector(".softwarePage").classList.add("hide")
        }
        if (!document.querySelector(".androidtwo").classList.contains("hide")) {
            document.querySelector(".androidtwo").classList.add("hide")
        }
        document.querySelector(".windowstwo").classList.remove("hide")
        if (!document.querySelector(".homePage").classList.contains("hide")) {
            document.querySelector(".homePage").classList.add("hide");
        }
        if (!document.querySelector(".contactText").classList.contains("hide")) {
            document.querySelector(".contactText").classList.add("hide");
        }
        if (!document.querySelector(".categoriesPage").classList.contains("hide")) {
            document.querySelector(".categoriesPage").classList.add("hide");
        }
        if (document.querySelector(".softwarePage").classList.contains("hide")) {
            document.querySelector(".softwarePage").classList.remove("hide")
        }
    }
});

document.querySelector(".toolsandutilities").addEventListener("click", function() {
    if (!document.querySelector(".androidthree").classList.contains("hide")) {
        document.querySelector(".androidthree").classList.add("hide")
    }
    if (!document.querySelector(".windowsthree").classList.contains("hide")) {
        document.querySelector(".windowsthree").classList.add("hide")
    }
    if (type == "Android" && document.querySelector(".androidthree").classList.contains("hide")) {
        if (document.querySelector(".toolsPage").classList.contains("hide")) {
            document.querySelector(".toolsPage").classList.remove("hide")
        }
        if (!document.querySelector(".windowsthree").classList.contains("hide")) {
            document.querySelector(".windowsthree").classList.add("hide")
        }
        document.querySelector(".androidthree").classList.remove("hide")
        if (!document.querySelector(".homePage").classList.contains("hide")) {
            document.querySelector(".homePage").classList.add("hide");
        }
        if (!document.querySelector(".contactText").classList.contains("hide")) {
            document.querySelector(".contactText").classList.add("hide");
        }
        if (!document.querySelector(".categoriesPage").classList.contains("hide")) {
            document.querySelector(".categoriesPage").classList.add("hide");
        }
        if (document.querySelector(".toolsPage").classList.contains("hide")) {
            document.querySelector(".toolsPage").classList.remove("hide")
        }
    }
    if (type == "Windows" && document.querySelector(".windowsthree").classList.contains("hide")) {
        if (document.querySelector(".toolsPage").classList.contains("hide")) {
            document.querySelector(".toolsPage").classList.remove("hide")
        }
        if (!document.querySelector(".androidthree").classList.contains("hide")) {
            document.querySelector(".androidthree").classList.add("hide")
        }
        document.querySelector(".windowsthree").classList.remove("hide")
        if (!document.querySelector(".homePage").classList.contains("hide")) {
            document.querySelector(".homePage").classList.add("hide");
        }
        if (!document.querySelector(".contactText").classList.contains("hide")) {
            document.querySelector(".contactText").classList.add("hide");
        }
        if (!document.querySelector(".categoriesPage").classList.contains("hide")) {
            document.querySelector(".categoriesPage").classList.add("hide");
        }
        if (document.querySelector(".toolsPage").classList.contains("hide")) {
            document.querySelector(".toolsPage").classList.remove("hide")
        }
    }
});


document.addEventListener("click", function(event) {
    if (event === undefined) {
        event = window.event;
    } else {
        PirateMusic.play();
    }
});

document.querySelector(".discordBtn").addEventListener("click", function() {
    window.open("https://discord.gg/EZ44sDsav5");
});

document.querySelector(".home").addEventListener("click", function() {
    if (!document.querySelector(".gameSitePage").classList.contains("hide")) {
        document.querySelector(".gameSitePage").classList.add("hide")
    }
    if (!document.querySelector(".softwarePage").classList.contains("hide")) {
        document.querySelector(".softwarePage").classList.add("hide")
    }
    if (!document.querySelector(".toolsPage").classList.contains("hide")) {
        document.querySelector(".toolsPage").classList.add("hide")
    }
    if (document.querySelector(".contact").classList.contains("active")) {
        document.querySelector(".contact").classList.remove("active");
    }
    if (document.querySelector(".catagory").classList.contains("active")) {
        document.querySelector(".catagory").classList.remove("active");
    }
    document.querySelector(".home").classList.add("active");
    if (document.querySelector(".homePage").classList.contains("hide")) {
        document.querySelector(".homePage").classList.remove("hide");
    }
    if (!document.querySelector(".contactText").classList.contains("hide")) {
        document.querySelector(".contactText").classList.add("hide");
    }
    if (!document.querySelector(".categoriesPage").classList.contains("hide")) {
        document.querySelector(".categoriesPage").classList.add("hide");
    }
});

document.querySelector(".contact").addEventListener("click", function() {
    if (!document.querySelector(".gameSitePage").classList.contains("hide")) {
        document.querySelector(".gameSitePage").classList.add("hide")
    }
    if (!document.querySelector(".softwarePage").classList.contains("hide")) {
        document.querySelector(".softwarePage").classList.add("hide")
    }
    if (!document.querySelector(".toolsPage").classList.contains("hide")) {
        document.querySelector(".toolsPage").classList.add("hide")
    }
    if (document.querySelector(".home").classList.contains("active")) {
        document.querySelector(".home").classList.remove("active");
    }
    if (document.querySelector(".catagory").classList.contains("active")) {
        document.querySelector(".catagory").classList.remove("active");
    }
    document.querySelector(".contact").classList.add("active");
    if (!document.querySelector(".homePage").classList.contains("hide")) {
        document.querySelector(".homePage").classList.add("hide");
    }
    if (document.querySelector(".contactText").classList.contains("hide")) {
        document.querySelector(".contactText").classList.remove("hide");
    }
    if (!document.querySelector(".categoriesPage").classList.contains("hide")) {
        document.querySelector(".categoriesPage").classList.add("hide");
    }
});

document.querySelector(".catagory").addEventListener("click", function() {
    if (!document.querySelector(".gameSitePage").classList.contains("hide")) {
        document.querySelector(".gameSitePage").classList.add("hide")
    }
    if (!document.querySelector(".softwarePage").classList.contains("hide")) {
        document.querySelector(".softwarePage").classList.add("hide")
    }
    if (!document.querySelector(".toolsPage").classList.contains("hide")) {
        document.querySelector(".toolsPage").classList.add("hide")
    }
    if (document.querySelector(".home").classList.contains("active")) {
        document.querySelector(".home").classList.remove("active");
    }
    if (document.querySelector(".contact").classList.contains("active")) {
        document.querySelector(".contact").classList.remove("active");
    }
    document.querySelector(".catagory").classList.add("active");
    if (!document.querySelector(".homePage").classList.contains("hide")) {
        document.querySelector(".homePage").classList.add("hide");
    }
    if (!document.querySelector(".contactText").classList.contains("hide")) {
        document.querySelector(".contactText").classList.add("hide");
    }
    if (document.querySelector(".categoriesPage").classList.contains("hide")) {
        document.querySelector(".categoriesPage").classList.remove("hide");
    }
});

document.querySelector(".steamUnlocked").addEventListener("click", function() {
    window.open("https://steamunlocked.net")
});

document.querySelector(".fitGirl").addEventListener("click", function() {
    window.open("https://fitgirl-repacks.site/")
});

document.querySelector(".fileCr").addEventListener("click", function() {
    window.open("https://filecr.com/")
});

document.querySelector(".karan").addEventListener("click", function() {
    window.open("https://karanpc.com/")
});