  function regularmap(){
	var var_location = new google.maps.LatLng(40.725118, -73.997699);
	var var_mappoint = {
		center: var_location,
		zoom: 14
		};
	var var_map = new google.maps.Map(document.getElementById("map-container"),var_mapoptions);
	var var_marker = new google.maps.Marker({position: var_location, map: var_map, title: "My  Home Addrss"});
	}