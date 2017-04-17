app.service("empService", function() {
	const obj = {};

	obj.getEmpList = {
		801 : {
			"name": "Himanshu Gupta",
			"empId": 801,
			"pointing": 501,
			"image" : 'https://image.ibb.co/dcAJfk/883.jpg',
			"status" : 1
		}, 
		501 : {
			"name": "Samar Panda",
			"empId": 501,
			"pointing": 100,
			"image" : 'https://image.ibb.co/gTttD5/766.jpg',
			"status" : 1
		},
		100 : {
			"name": "Himanshu Sharma",
			"empId": 100,
			"pointing": 89,
			"image" : 'https://image.ibb.co/hDPN6Q/553.jpg',
			"status" : 1
		},
		325 : {
			"name": "Manish Sinha",
			"empId": 325,
			"pointing": 9,
			"image" : 'https://image.ibb.co/iy9YD5/325.jpg',
			"status" : 1
		}, 
		89: {
			"name": "Manoj Sharma",
			"empId": 89,
			"pointing": 9,
			"image" : 'https://image.ibb.co/fQcaRQ/189.jpg',
			"status" : 1
		},
		9 : {
			"name": "Pranay Chulate",
			"empId": 9,
			"pointing" : 0,
			"image" : '9.jpg',
			"status" : 1
		},
		802: {
			"name": "Jay Prakash",
			"empId": 802,
			"pointing": 501,
			"image" : 'https://image.ibb.co/fuUEmQ/603.jpg',
			"status" : 1
		}, 
		803: {
			"name": "Gugan N",
			"empId": 803,
			"pointing": 100,
			"image" : 'https://preview.ibb.co/nd2BY5/2323.jpg',
			"status" : 1
		},
		1000: {
			"name" : "Nitin Bist",
			"empId" : 1000,
			"pointing" : 801,
			"image" : '1000.jpg',
			"status" : 1
		},
		1001: {
			"name" : "Mukul",
			"empId" : 1001,
			"pointing" : 801,
			"image" : '1001.jpg',
			"status" : 1
		}
	}

	return obj;
});