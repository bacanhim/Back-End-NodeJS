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
    indexOf: function (array, num) {
        res = null;
        for (i = 0; i < array.length; i++) {
            if (num == array[i]) {
                res = i;
            }
        }
        return res;
    },
    subArray: function (array, startIndex, endIndex) {
        subArray = [];
        for (i = startIndex; i <= endIndex; i++) {
            subArray.push(array[i]);
        }
        return subArray;
    },
    isSameLength: function (a1, a2) {
        if (a1.length == a2.length) {
            return true;
        } else {
            return false;
        }
    },
    reverse: function (array) {
        arrayNovo = [];
        for (j = array.length - 1; j >= 0; j--) {
            arrayNovo.push(array[j]);
        }
        return arrayNovo;
    },
    swap: function (array, index1, index2) {
        var a = array[index1];
        array[index1] = array[index2];
        array[index2] = a;
        return array;
    }, 
    contains: function (array, value) {
        for (i = 0; i < array.length; i++) {
            if (array[i] == value) {
                return true;
            } else {
                return false;
            }
        }
    },
    concatenate: function (a1, a2) {
        var novoArray = [];
        for (i = 0; i < a1.length; i++) {
            novoArray.push(a1[i]);
        }
        for (i = 0; i < a2.length; i++) {
            novoArray.push(a2[i]);
        }
        return novoArray;
    }
}
module.exports = arrayUtils;