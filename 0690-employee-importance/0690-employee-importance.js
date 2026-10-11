/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let arr=[id];
    let z=0;
    let count=0;
    while(z<arr.length){
        for(let j=0;j<employees.length;j++){
            if(arr[z]==employees[j].id){
                arr.push(...employees[j].subordinates);
                count+=employees[j].importance;
            }
        }
        z++;
    }
    return count;
};