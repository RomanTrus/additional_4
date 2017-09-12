module.exports = function multiply(first, second) {
let arrFirst=[];
	let arrSecond=[];
 	for (let i=0; i<first.length;i++){
 		arrFirst[i]=first.charAt(i);
 	};
  	for (let j=0; j<second.length;j++){
 		arrSecond[j]=second.charAt(j);
 	};
 	arrFirst.reverse();
 	arrSecond.reverse();
 	let matrix=[];
	for (let cols=0;cols<second.length;cols++) {
		matrix[cols]=[];
		for(let rows=0; rows<first.length+second.length;rows++){
			matrix[cols][rows]=0;
		}
	}
	for (let colsCount=0; colsCount<arrSecond.length; colsCount++) {
		for (let rowsCount=0; rowsCount<arrFirst.length+colsCount;rowsCount++) {
			if ((rowsCount+colsCount)>=(arrFirst.length+arrSecond.length)){
			}
			else {matrix[colsCount][rowsCount+colsCount]=arrSecond[colsCount]*arrFirst[rowsCount];}
		}
		}
	for (let j=0;j<second.length;j++) {
		for(let k=0; k<first.length+second.length;k++){
			if (isNaN(matrix[j][k])){
				matrix[j][k]=0;
			}
			}
			}
	for (let j=0;j<second.length;j++) {
		
		for(let k=0; k<first.length+second.length;k++){
			if (matrix[j][k]>9){
				matrix[j][k+1]=((matrix[j][k]-matrix[j][k]%10)/10)+matrix[j][k+1];
				matrix[j][k]=matrix[j][k]%10;
			}
			}
			}
	let answer=[];
	for (let j=0;j<first.length+second.length;j++) {
		answer[j]=0;
	}
	for (let rowsCount=0; rowsCount<first.length+second.length;rowsCount++){
		for (let colsCount=0; colsCount<second.length; colsCount++) {
			answer[rowsCount]=(+matrix[colsCount][rowsCount]+answer[rowsCount]);
		}
	}
	for (let i=0; i<first.length+second.length;i++){
		if (answer[i]>9){
			answer[i+1]=((answer[i]-answer[i]%10)/10)+answer[i+1];
			answer[i]=answer[i]%10;
		}
	}
 	answer.reverse();
	if (answer[0]==0){
		answer.shift();
	}
	return answer.join('');
}