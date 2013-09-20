todomvc.factory('todoStorage', function(){
  return {
    get: function(){
      return [{title: "Learn Angular JS", completed:true}, {title:'Give an IOH on Angular', completed:false}];
    }
  }
});
