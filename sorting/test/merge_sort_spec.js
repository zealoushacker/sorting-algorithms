var chai      = require('chai'),
    expect    = chai.expect,
    sinon     = require('sinon'),
    sinonChai = require('sinon-chai'),
    Sort      = require('../merge_sort');

chai.use(sinonChai);

describe("merge", function() {
  describe("given two arrays", function() {
    it("should merge them in the correct order", function() {
      expect(
        Sort.merge(
          [-1,1,200,210,250],
          [0,2,201,220,275]
        )
      ).to.deep.equal([-1,0,1,2,200,201,210,220,250,275]);
    });
  });
});

describe("merge_sort", function() {
  describe("given a collection containing 1 element", function() {
    it("should return the collection", function() {
      var one_el_coll = [1];
      expect(
        Sort.merge_sort(one_el_coll)
      ).to.equal(one_el_coll);
    });
  });

  describe("given a collection containing 0 elements", function() {
    it("should return the collection", function() {
      var no_els_coll = [];
      expect(
        Sort.merge_sort(no_els_coll)
      ).to.equal(no_els_coll);
    });
  });

  describe("given a collection containing more than 1 element", function() {
    var unsorted_collection;

    beforeEach(function() {
      unsorted_collection = [1000, -100, 25, 0, 200, 250, 300, -300]; 
    });

    describe("algorithm tests", function() {
      var merge_sort_spy,
          times;

      beforeEach(function() {
        // spy on the merge_sort
        merge_sort_spy = sinon.spy(Sort, "merge_sort");
        // how many times should merge_sort be called 
        // based on the length of the collection
        times = unsorted_collection.length * 2 - 1; 
      });

      afterEach(function() {
        // restore the original object
        // see: http://sinonjs.org/docs/
        Sort.merge_sort.restore();
      });

      it("should invoke merge_sort length * 2 times - 1", function() {
        Sort.merge_sort(unsorted_collection);
        expect(merge_sort_spy).to.have.callCount(times);
      });

      it("should invoke the merge_sort function with the correctly sliced sub-arrays", function() {
        Sort.merge_sort(unsorted_collection);
        expect(merge_sort_spy).to.have.been.calledWith([1000, -100, 25, 0, 200, 250, 300, -300]);
      });
    });

    it("should return the sorted collection", function() {
      expect(
        Sort.merge_sort(unsorted_collection)
      ).to.deep.equal([-300, -100, 0, 25, 200, 250, 300, 1000]);
    });
  });
});
