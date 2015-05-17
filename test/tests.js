define(["chai", "src/myModule"], function (chai, myModule){
  var expect = chai.expect;
  describe("My Module", function(){
    describe("Module Loading", function(){
      it("should load", function(){
        expect(myModule).to.equal("myModule works!");
      });
    });

    describe("Test Failing", function(){
      it("should show a failed test", function(){
        expect("apples").to.equal("oranges");
      });
    });
  });
});
