const mongoose = require("mongoose");

const pcSchema = mongoose.Schema({
    status:{
        type:Boolean,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    pcModel:{
        type:String,
        required:true
    },
    productCode:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    pcImage:{
        type:String,     
    },
    available:{
        type:Boolean,
        required:true
    },
    desc:{
        type:Object, 
    },
    information:{
        type:Array,
    }

})
module.exports= mongoose.model("PC",pcSchema);