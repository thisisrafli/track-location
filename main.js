const input = require("prompt-sync")();

const url = "https://api.ipgeolocation.io/v2/ipgeo";
const api = "9b2ec68b1def4b9c8a7d33bcfcf1052a";

async function trackLocation(ip) {
   try {
      const res = await fetch(`${url}?apiKey=${api}&ip=${ip}`);
      return await res.json();
   } catch (e) {
      return e;
   }
}

const ip = input("[+] PUBLIC IP => ");

if (ip === "") {
   console.log("IP cannot be empty.");
} else {
   
   trackLocation(ip).then(function(results) {
      console.log(results.location);
   });
   
}
