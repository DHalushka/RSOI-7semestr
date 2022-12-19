$("#loadGroup1").click(function () {
    $("#msg").html("");
	$(".result").load("/resource/group1.txt",
		function (response, status, xhr) {
			if (status == "error") {
				var msg = "Произошла ошибка: ";
                let errorOptions = "<a href='#' onclick='location.reload(); return false;'><button>Перезагрузить страницу</button></a> <br/>"+ 
                "<a href='error.html'><button>Перейти на страницу Error</button></a>";
				$("#error").html(msg + xhr.status + " " + xhr.statusText + "<br/>" + errorOptions);
			}
		});
	document.getElementById("par").innerText = "Вы выбрали группу №1";
	document.getElementById("load1").style.display = "block";

	document.getElementById("load2").style.display = "none";
	document.getElementById("load3").style.display = "none";
	document.getElementById("load4").style.display = "none";
});
$("#loadGroup2").click(function () {
    $("#msg").html("");
	$(".result").load("/resource/group2.txt",
    function (response, status, xhr) {
        if (status == "error") {
            var msg = "Произошла ошибка: ";
            let errorOptions = "<a href='#' onclick='location.reload(); return false;'><button>Перезагрузить страницу</button></a> <br/>"+ 
            "<a href='error.html'><button>Перейти на страницу Error</button></a>";
            $("#error").html(msg + xhr.status + " " + xhr.statusText + "<br/>" + errorOptions);
        }
    });
	document.getElementById("par").innerText = "Вы выбрали группу №2";
	document.getElementById("load2").style.display = "block";

	document.getElementById("load1").style.display = "none";
	document.getElementById("load3").style.display = "none";
	document.getElementById("load4").style.display = "none";
});
$("#loadGroup3").click(function () {
    $("#msg").html("");
	$(".result").load("/resource/group3.txt",
    function (response, status, xhr) {
        if (status == "error") {
            var msg = "Произошла ошибка: ";
            let errorOptions = "<a href='#' onclick='location.reload(); return false;'><button>Перезагрузить страницу</button></a> <br/>"+ 
            "<a href='error.html'><button>Перейти на страницу Error</button></a>";
            $("#error").html(msg + xhr.status + " " + xhr.statusText + "<br/>" + errorOptions);
        }
    });
	document.getElementById("par").innerText = "Вы выбрали группу №3";
	document.getElementById("load3").style.display = "block";

	document.getElementById("load2").style.display = "none";
	document.getElementById("load1").style.display = "none";
	document.getElementById("load4").style.display = "none";
});
$("#loadGroup4").click(function () {
    $("#msg").html("");
	$(".result").load("/resource/group4.txt",
    function (response, status, xhr) {
        if (status == "error") {
            var msg = "Произошла ошибка: ";
            let errorOptions = "<a href='#' onclick='location.reload(); return false;'><button>Перезагрузить страницу</button></a> <br/>"+ 
            "<a href='error.html'><button>Перейти на страницу Error</button></a>";
            $("#error").html(msg + xhr.status + " " + xhr.statusText + "<br/>" + errorOptions);
        }
    });
	document.getElementById("par").innerText = "Вы выбрали группу №4";
	document.getElementById("load4").style.display = "block";

	document.getElementById("load2").style.display = "none";
	document.getElementById("load3").style.display = "none";
	document.getElementById("load1").style.display = "none";
});
