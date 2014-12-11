var Sort = {
  merge: function(left, right) {
    var merged = [], which;
    while(left && left.length && right && right.length) {
      which = left[0] <= right[0] ? left : right;
      merged.push(which[0]);
      which.shift();
    }
    return merged.concat(left,right);
  },
  merge_sort: function(collection) {
    var mid = Math.floor(collection.length / 2);
    if (collection.length <= 1) {
      return collection;
    }
    return this.merge(
      this.merge_sort(collection.slice(0, mid)),
      this.merge_sort(collection.slice(mid, collection.length))
    );
  }
};

try{
  module.exports = Sort;
} catch(e){

}
