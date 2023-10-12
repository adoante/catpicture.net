

function GetCatPic() {
//change the limit to however many images to use
const url = "https://api.thecatapi.com/v1/images/search?limit=1";
const api_key = "live_Wxa2msnPAOBVTVSR47Y0ggWT3davbBWWtzmjtRx4Eyry2zBSM27ZkplxJ454Asdq";

 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
  let img = new Image();
  img.src = data[0].url;
  document.getElementById("cat").appendChild(img);
})

	return (
		<p>
		<h1>Cat Pictures</h1>
		<div id="cat"></div>
		<a href="./">Click Here for more!</a>
		</p>
	);

}

export default GetCatPic