var arrayUtils = {

    isEmpty: function (array) {
        if (array.length == 0) {
            return true;
        } else {
            return false;
        }
    },

    max: function (array) {
        res = array[0];
        for (i = 0; i < array.length; i++) {
            if (array[i] > res) {
                res = array[i];
            }
        }
        return res;
    },
    min: function (array) {
        res = array[0];
        for (i = 0; i < array.length; i++) {
            if (array[i] < res) {
                res = array[i];
            }
        }
        return res;
    },
    average: function (array) {
        media = 0;
        for (i = 0; i < array.length; i++) {
            media += array[i];
        }
        media = media / array.length;
        return media;
    },
    indexOf: function(array,pos){
        res = array[pos];
        return res;
    },
    subArray: function(array,startIndex,endIndex){
        subArray = ["["];
        for (i = startIndex; i<= endIndex; i++){
            subArray+= array[i]+ ",";
        }
        subArray += "]"
        return subArray;
    }
}

module.exports = arrayUtils;