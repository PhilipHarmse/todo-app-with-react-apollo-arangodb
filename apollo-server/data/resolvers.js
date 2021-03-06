//import {default as GetDocByHandle} from './repo.js';

const resolvers = {
  Query: {
    author(root, args){
      console.log("this gets hit")
       return { id: 1, firstName: args.firstName, lastName: args.lastName };
        // return GetDocByHandle("100982097935").then((doc)=>{
        //    return { id: doc.age, firstName: doc.firstName, lastName: 'World' };
        // });
    },
  },
  Author: {
    posts(author){
      return [
        { id: 1, title: 'A post', text: 'Some text', views: 2},
        { id: 2, title: 'Another post', text: 'Some other text', views: 200}
      ];
    }
    
  },
  
  Post: {
    author(post){
      return { id: 1, firstName: 'Hello', lastName: 'World' };
    },
  },
};

export default resolvers;