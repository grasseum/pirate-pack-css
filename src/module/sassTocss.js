const structkit = require("structkit"); 
//const scrape = require("packcore-support/src/support/scrape")

const {jsrequire} = require('path-assist');
var sass  = require("node-sass");

module.exports =  (configMain)=>{
   
    return {
        name:"sassTocss",
         
            transform : async (config)=>{


    var data = config.content;
    

   const result =  sass.renderSync({
       omitSourceMapUrl : true,
       sourceMapContents : true,
       sourceMap: jsrequire.joinPath( config.processCwd, config.currentPath),

      file: jsrequire.joinPath( config.processCwd, config.currentPath),

    })//, function(err, result) {

if( result ===null){

  console.log("Invalid sass file");
  return "";
}else{
  return  Buffer.from(result['css'])//result['css'];
}



            },
            transformFirstFile : async (config)=>{
                return null;
            },
            transformLastFile : async (config)=>{
               
                return null;
            }
            
        
    }
}