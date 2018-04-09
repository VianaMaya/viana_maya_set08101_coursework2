const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Shema
const StorySchema = new Schema({
  title:{
    type:String,
    required: true
  },
  body:{
    type: String,
    required: true
  },
  status: {
    type: String,
    default:'public'
  },
  allowComments: {
    type: Boolean,
    deflault:true
  },
  comments: [{
      commentBody: {
          type: String,
          required: true
      },
      commentData:{
          type:Date,
          default: Date.now
      },
      commentUser:{
          type: Schema.Types.ObjectId,
          ref:'users'
      }
  }],
  user:{
    type: Schema.Types.ObjectId,
    ref:'users'
},
 date:{
  type:Date,
  deflaut: Date.now  
 } 
  
});

// Create collection and add schema
mongoose.model('stories', StorySchema, 'stories');