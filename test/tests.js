define(["chai", "src/reactive-model"], function (chai, ReactiveModel){
  var expect = chai.expect;
  describe("ReactiveModel", function(){
    describe("Module Loading", function(){
      it("should load", function(){
        expect(ReactiveModel).to.equal("reactive-model");
      })
    })
  });
});
