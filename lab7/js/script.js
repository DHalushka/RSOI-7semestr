$("#load1").click(function () {
	$.getJSON("/resource/group1.json", function (result) {
		let loadData1 = "";
		$.each(result, function (name, value) {
			loadData1 += name + ": " + value + " </br>";
		});
		localStorage.setItem("loadData1", loadData1);
	})
    .fail(function() {
        $("#msg").html("<span>Ошибка</span>");
    })
    .done(function() {
        $("#msg").html("<span>Отправлено</span>");
    });
});

$("#load2").click(function () {
	$.getJSON("/resource/group2.json", function (result) {
		let loadData2 = "";
		$.each(result, function (name, value) {
			loadData2 += name + ": " + value + " </br>";
		});
		localStorage.setItem("loadData2", loadData2);
	})
    .fail(function() {
        $("#msg").html("<span>Ошибка</span>");
    })
    .done(function() {
        $("#msg").html("<span>Отправлено</span>");
    });
});
$("#load3").click(function () {
	$.getJSON("/resource/group3.json", function (result) {
		let loadData3 = "";
		$.each(result, function (name, value) {
			loadData3 += name + ": " + value + " </br>";
		});
		localStorage.setItem("loadData3", loadData3);
	})
    .fail(function() {
        $("#msg").html("<span>Ошибка</span>");
    })
    .done(function() {
        $("#msg").html("<span>Отправлено</span>");
    });
});
$("#load4").click(function () {
	$.getJSON("/resource/group4.json", function (result) {
		let loadData4 = "";
		$.each(result, function (name, value) {
			loadData4 += name + ": " + value + " </br>";
		});
		localStorage.setItem("loadData4", loadData4);
	})
    .fail(function() {
        $("#msg").html("<span>Ошибка</span>");
    })
    .done(function() {
        $("#msg").html("<span>Отправлено</span>");
    });
});


$(document).ajaxError(function (event, request, settings) {
	$("#msg").html("<span>Error requesting page " + settings.url + "</span>");
});
$(document).ajaxSuccess(function (event, request, settings) {
	$("#msg").html("<span>Successful Request!</span>");
});
//$.getJSON("test.json");
