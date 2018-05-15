 var websites = [
  { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
  { _id: "234", name: "Tweeter",  developerId: "456", description: "Lorem" },
  { _id: "456", name: "Gizmodo",   developerId: "456", description: "Lorem" },
  { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
  { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
  { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
  { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
];


function createWebsite(userId, website) {
	website._id = Math.floor(Math.random() * Math.floor(1000000)).toString();
	website.developerId = userId;
	this.websites.push(website);
	return website;
} 

createWebsite("555", {name: "newWeb", description: "a new website"});
console.log(websites);