const url = "https://api.thecatapi.com/v1/images/search?limit=1";
const api_key = "live_Wxa2msnPAOBVTVSR47Y0ggWT3davbBWWtzmjtRx4Eyry2zBSM27ZkplxJ454Asdq";

catchCatPic().catch(error => {
	console.log(error);
	console.error(error);
});

async function catchCatPic() {
	const response = await fetch(url,{headers: {'x-api-key': api_key}})
	const data = await response.json();
	document.getElementById("cat").src = data[0].url;
}