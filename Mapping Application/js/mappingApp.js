function enterInfo_show() {
	document.getElementById('enterInfo').style.display = "block";
}

function enterInfo_hide(){
	document.getElementById('enterInfo').style.display = "none";
}

function editInfo_show() {
	document.getElementById('editInfo').style.display = "block";
}

function editInfo_hide(){
	document.getElementById('editInfo').style.display = "none";
}

function changeInfo_show() {
	editInfo_hide();
	document.getElementById('changeInfo').style.display = "block";
}

function changeInfo_hide(){
	document.getElementById('changeInfo').style.display = "none";
}


$(document).ready(function(){

	
	var landmarks = [];
	var markers = [];
		$("#map").width(window.innerWidth - 265);
		$("#map").height(window.innerHeight - 130);
	
	var icons = {
		none: '',
		castle : 'Castle',
		mountain : 'Mountain',
		cavern : 'Cavern',
		farmland : 'Farmland',
		forest : 'Forest',
		river : 'River',
		ruin : 'Ruin',
		sea : 'Sea',
		town : 'Town'
	};
	var select = document.getElementById("enterLandIcon");
	for(index in icons) {
		select.options[select.options.length] = new Option(icons[index], index);
	}
	var select2 = document.getElementById("editLandIcon");
	for(index in icons) {
		select2.options[select2.options.length] = new Option(icons[index], index);
	}
	
	var index = 0;
	var activeIndex = -1;
	
	var overlay;
	var backgroundOverlay;
	USGSOverlay.prototype = new google.maps.OverlayView();
	var backgroundImage = 'images/background.png';
	mapImage = new Image();
	var srcImage = 'images/map1.jpg';
	
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 5,
		width: window.innerWidth - 210,
		height: window.innerHeight - 110,
		center: {lat: 0, lng: 0},
		mapTypeId: 'satellite'
	});
	map.setOptions({ minZoom: 5, maxZoom: 15 });
	
	google.maps.event.addDomListener(window, "resize", function() {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center); 
	});

	////////////////////////INIT FUNCTION////////////////////////////
	
	function initMap() {
		
		var imgWidth, imgHeight, aspectRatio, xLeft, xRight;
		//Once the image is loaded, load the image onto the map
		mapImage.onload = function() {
			
			//set the left and right bounds for the image based on its aspect ratio
			imgWidth = mapImage.width;
			imgHeight = mapImage.height;
			aspectRatio = imgWidth/imgHeight;
			xLeft = -(aspectRatio * 12.5);
			xRight = (aspectRatio * 12.5);
			console.log(xLeft + ", " + xRight);
			
			//Bounds for the black background, these are just set to cover the entire background of the map
			var backgroundBounds = new google.maps.LatLngBounds(
			new google.maps.LatLng(-100, -100),
			new google.maps.LatLng(100, 100));
		
			//Bounds of the actual image
			var bounds = new google.maps.LatLngBounds(
				new google.maps.LatLng(-12.5, xLeft),
				new google.maps.LatLng(12.5, xRight));
			
			//bounds that the user cannot drag beyond
			var strictBounds = new google.maps.LatLngBounds(
				new google.maps.LatLng(-2, -8),
				new google.maps.LatLng(2, 8));
				
			// Listen for the dragend event
			/*google.maps.event.addListener(map, 'drag', function() {
			
				if (strictBounds.contains(map.getCenter())) return;

				// We're out of bounds - Move the map back within the bounds

				var c = map.getCenter(),
					x = c.lng(),
					y = c.lat(),
					maxX = strictBounds.getNorthEast().lng(),
					maxY = strictBounds.getNorthEast().lat(),
					minX = strictBounds.getSouthWest().lng(),
					minY = strictBounds.getSouthWest().lat();
					if (x < minX) x = minX;
					if (x > maxX) x = maxX;
					if (y < minY) y = minY;
					if (y > maxY) y = maxY;
					map.setCenter(new google.maps.LatLng(y, x));
			});*/
			
			google.maps.event.addListener(map, 'click', function(event) {
				var marker = new google.maps.Marker({
					position: event.latLng, 
					map: map
				});
				marker.addListener('click', function() {
					var i = 0;
					while(i<landmarks.length){
						if(markers[i] === this){
							activeIndex = landmarks[i].ID;
						}
						i++;
					}
					console.log(activeIndex);
					if(landmarks[activeIndex].landmarkName == ""){
						enterInfo_show();
					}
					else{
						editInfo_show();
					}
				});
				temp = new Landmark(index, marker.position, "", "", "", "");
				markers.push(marker);
				landmarks.push(temp);
				console.log(markers)
				console.log(landmarks);
				index++;
			});

			// The custom USGSOverlay object contains the USGS image,
			// the bounds of the image, and a reference to the map.
			backgroundOverlay = new USGSOverlay(backgroundBounds, backgroundImage, map);
			overlay = new USGSOverlay(bounds, srcImage, map);
				
		}
		
		mapImage.src = srcImage;
		
	}

	google.maps.event.addDomListener(window, 'load', initMap);
	
	////////////////////////OVERLAY FUNCTIONS////////////////////////
	
	function USGSOverlay(bounds, image, map) {

		// Initialize all properties.
		this.bounds_ = bounds;
		this.image_ = image;
		this.map_ = map;

		// Define a property to hold the image's div. We'll
		// actually create this div upon receipt of the onAdd()
		// method so we'll leave it null for now.
		this.div_ = null;

		// Explicitly call setMap on this overlay.
		this.setMap(map);
	}
	
	USGSOverlay.prototype.onAdd = function() {

		var div = document.createElement('div');
		div.style.borderStyle = 'none';
		div.style.borderWidth = '0px';
		div.style.position = 'absolute';

		// Create the img element and attach it to the div.
		var img = document.createElement('img');
		img.src = this.image_;
		img.style.width = '100%';
		img.style.height = '100%';
		img.style.position = 'absolute';
		div.appendChild(img);

		this.div_ = div;

		// Add the element to the "overlayLayer" pane.
		var panes = this.getPanes();
		panes.overlayLayer.appendChild(div);
	};
	
	USGSOverlay.prototype.draw = function() {

		// We use the south-west and north-east
		// coordinates of the overlay to peg it to the correct position and size.
		// To do this, we need to retrieve the projection from the overlay.
		var overlayProjection = this.getProjection();

		// Retrieve the south-west and north-east coordinates of this overlay
		// in LatLngs and convert them to pixel coordinates.
		// We'll use these coordinates to resize the div.
		var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
		var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

		// Resize the image's div to fit the indicated dimensions.
		var div = this.div_;
		div.style.left = sw.x + 'px';
		div.style.top = ne.y + 'px';
		div.style.width = (ne.x - sw.x) + 'px';
		div.style.height = (sw.y - ne.y) + 'px';
	};

	// The onRemove() method will be called automatically from the API if
	// we ever set the overlay's map property to 'null'.
	USGSOverlay.prototype.onRemove = function() {
		this.div_.parentNode.removeChild(this.div_);
		this.div_ = null;
	};
	
	////////////////////////BUTTON FUNCTIONS////////////////////////
	
	$("#viewLandmark").click(function(){
		var tempName = landmarks[activeIndex].landmarkName;
		var tempType = landmarks[activeIndex].landmarkType;
		var tempInfo = landmarks[activeIndex].landmarkInfo;
		var contentString = '<div id="info">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">'+ tempName +'</h1>'+
			'<h3 id="secondHeading" class="secondHeading"><b>Type:</b> '+ tempType +'</h2>'+
            '<div id="bodyContent">'+
            '<p><b>Info:</b>' + tempInfo +
            '</p>'+
            '</div>'+
            '</div>';

		var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
		infowindow.open(map, markers[activeIndex]);
		activeIndex = -1;
		editInfo_hide();
	});
	
	$("#editLandmark").click(function(){
		$("#editName").val(landmarks[activeIndex].landmarkName);
		$("#editType").val(landmarks[activeIndex].landmarkType);
		$("#editLandInfo").val(landmarks[activeIndex].landmarkInfo);
		$("#editLandIcon").val(landmarks[activeIndex].landmarkIcon);
        changeInfo_show();
	});
	
	$("#deleteLandmark").click(function(){
		editInfo_hide();
		markers[activeIndex].setVisible(false);
	});
	
	$("#loadImage").click(function(){
        $('#selectImage').trigger('click');
		var x = $('#selectImage').value;
	});
	
	$("#loadData").click(function(){
        $('#selectData').trigger('click');
		var x = $('#selectData').value;
	});
	
	$("#saveData").click(function(){
        var data = JSON.stringify(landmarks);
		var fileName = "markerData.mdata";
		var a = document.createElement("a");
		document.body.appendChild(a);
		a.style = "display: none";
		console.log( data);
		console.log( fileName);      
		 var json = JSON.stringify(data),
			blob = new Blob([json], {type: "octet/stream"}),
			url = window.URL.createObjectURL(blob);
		a.href = url;
		a.download = fileName;
		a.click();
		window.URL.revokeObjectURL(url);
	});
	
	$('#selectImage').change(function () {
		console.log(this.files[0].name);
		var name = this.files[0].name;
		srcImage = 'images/' + name;
		map = new google.maps.Map(document.getElementById('map'), {
			zoom: 5,
			center: {lat: 0, lng: 0},
			mapTypeId: 'satellite'
		});
		map.setOptions({ minZoom: 5, maxZoom: 15 });
		initMap();
	});
	
	$('#selectData').change(function () {
		file = this.files[0];
		fr = new FileReader();
		fr.onload = createMarkers;
		fr.readAsText(file);
	});
	
	$("#hideMarkers").click(function(){
        setMapOnAll(null);
	});
	
	$("#showMarkers").click(function(){
        setMapOnAll(map);
	});
	
	function setMapOnAll(map) {
		for (var i = 0; i < markers.length; i++) {
			markers[i].setMap(map);
		}
	}
	
	function createMarkers(e) {
		lines = e.target.result;
		var newArr = JSON.parse(JSON.parse(lines));
		console.log( newArr);
		landmarks = newArr;
		setMapOnAll(null);
		markers = [];
		index = 0;
		var j = 0;
		while(j < landmarks.length){
			var marker = new google.maps.Marker({
				position: landmarks[j].position, 
				map: map
			});
			if(landmarks[j].landmarkIcon != ""){
				marker.setIcon("icons/" + landmarks[j].landmarkIcon + ".png");
			}
			markers.push(marker);
			index++;
			j++;
		}
		console.log(markers);
		activeIndex = -1;
		j = 0;
		while(j < landmarks.length){
			markers[j].addListener('click', function() {
				var i = 0;
				activeIndex = -1;
				while(i<landmarks.length){
					console.log(i);
					if(markers[i].position == this.position){
						activeIndex = landmarks[i].ID;
					}
					i++;
				}
				console.log(activeIndex);
				if(landmarks[activeIndex].landmarkName == ""){
					enterInfo_show();
				}
				else{
					editInfo_show();
				}
			});
			j++;
		}
	}

	////////////////////////LANDMARK FUNCTIONS////////////////////////
	
	Landmark = function (ID, position, landmarkName, landmarkType, landmarkInfo, landmarkIcon){
		this.ID = ID;
		this.position = position;
		this.landmarkName = landmarkName;
		this.landmarkType = landmarkType;
		this.landmarkInfo = landmarkInfo;
		this.landmarkIcon = landmarkIcon;
	}
	
	Landmark.prototype.constructor = Landmark;
	
	////////////////////////OTHER FUNCTIONS////////////////////////
	
	$("#submitInfo").click(function(){
		var landName = $("#enterName").val();
		var landType = $("#enterType").val();
		var landInfo = $("#enterLandInfo").val();
		var landIcon = $("#enterLandIcon").val();
		if(landIcon != ""){
			setIcon(landIcon);
		}
		landmarks[activeIndex].landmarkName = landName;
		landmarks[activeIndex].landmarkType = landType;
		landmarks[activeIndex].landmarkInfo = landInfo;
		landmarks[activeIndex].landmarkIcon = landIcon;
		$("#enterName").val("");
		$("#enterType").val("");
		$("#enterLandInfo").val("");
		$("#enterLandIcon").val("");
		activeIndex = -1;
		console.log(landmarks);
		enterInfo_hide();
	});
	
	$("#submitChangeInfo").click(function(){
		var landName = $("#editName").val();
		var landType = $("#editType").val();
		var landInfo = $("#editLandInfo").val();
		var landIcon = $("#editLandIcon").val();
		if(landIcon != ""){
			setIcon(landIcon);
		}
		landmarks[activeIndex].landmarkName = landName;
		landmarks[activeIndex].landmarkType = landType;
		landmarks[activeIndex].landmarkInfo = landInfo;
		landmarks[activeIndex].landmarkIcon = landIcon;
		activeIndex = -1;
		console.log(landmarks);
		changeInfo_hide();
	});
	
	function setIcon(name){
		var src = "icons/" + name + ".png";
		markers[activeIndex].setIcon(src);
	}
	
});
