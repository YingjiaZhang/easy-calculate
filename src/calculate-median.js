function calculate_median(arr) {
  	
	var odd_index_arr = new Array();
	
	for(var i=1; i < arr.length;i+=2){
		
		odd_index_arr.push(arr[i]);
	}
	odd_index_arr =	odd_index_arr.sort();
	
	var length = odd_index_arr.length;
	var index = parseInt(length/2);
	var temp = length%2;

	var median = (temp==0)?(odd_index_arr[index-1]+odd_index_arr[index])/2:odd_index_arr[index];

	return median;
}

module.exports = calculate_median;
