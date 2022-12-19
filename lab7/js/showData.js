var loadData1 = localStorage["loadData1"];
if (loadData1) {
	$("#result").load("/resource/group1.json", function () {
		$("<div>" + loadData1 + "</div>").insertBefore("#insert");
	});
}

let loadData2 = localStorage["loadData2"];
if (loadData2) {
	$("#result").load("/resource/group2.json", function () {
		$("<div>" + loadData2 + "</div>").insertBefore("#insert");
	});
}

let loadData3 = localStorage["loadData3"];
if (loadData3) {
	$("#result").load("/resource/group3.json", function () {
		$("<div>" + loadData3 + "</div>").insertBefore("#insert");
	});
}

let loadData4 = localStorage["loadData4"];
if (loadData4) {
	$("#result").load("/resource/group4.json", function () {
		$("<div>" + loadData4 + "</div>").insertBefore("#insert");
	});
}

$("#clear").click(function () {
	localStorage.clear();
	window.location.reload();
});
