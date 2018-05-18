
  	
	 var pages = [
	  { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
	  { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
	  { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
	]


	//  adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
	function createPage(websiteId, page){
		page._id = Math.floor(Math.random() * Math.floor(1000000)).toString();
		page.websiteId = websiteId;
		this.pages.push(page);
		return page;
	}

	createPage("123", {name: "Post4", description: "Hello"});
	console.log(pages);

	// retrieves the pages in local pages array whose websiteId matches the parameter
	function findPageByWebsiteId(websiteId) {
		let result = [];
		for(let i =0; i < this.pages.length;i++){
			if(this.pages[i].websiteId === websiteId) {
			    result.push(this.pages[i]);
			}
		}

		return result;
	}

	//  retrieves the page in local pages array whose _id matches the pageId parameter
	function findPageById(pageId) {
		for(let i= 0;i<this.pages.length;i++) {
			if(this.pages[i]._id === pageId)  {
				return this.pages[i];
			}
		}
	}

	//  updates the page in local pages array whose _id matches the pageId parameter
	function updatePage(pageId, page) {
		let oldPage = this.findPageById(pageId);
		const index = this.pages.indexOf(oldPage);
		this.pages[index].page.name;
		this.pages[index].description = page.description;
	}

	//  removes the page from local pages array whose _id matches the pageId parameter
	function deletePage(pageId) {
		let oldPage = this.findPageById(pageId);
		const index = this.pages.indexOf(oldPage);
		this.websites.splice(index, 1);
	}


