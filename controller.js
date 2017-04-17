app.controller("empCtrl", ['empService' , function(empService) {
	
	this.hierarchy = {};
	this.empJson = empService.getEmpList;

	this.gethierarchy = function (id, pointingId) {
		const parentPointingId = id;
		this.hierarchy[parentPointingId] = [];
		while(pointingId !== 0) {
			if(this.empJson[pointingId].status == 1) {
				this.hierarchy[parentPointingId].push(this.empJson[pointingId]);
			}
			pointingId = this.empJson[pointingId].pointing; 
		}
	}

}]);