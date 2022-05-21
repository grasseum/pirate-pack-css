const structkit = require("structkit"); 
const scrape = require("packcore-support/src/support/scrape")
exports.cjsToEsmFileNameOnly =  (config)=>{
    
    return {
        name:"cjsToEsmFileNameOnly",
         
            transform : async (config)=>{
                //console.log("test",config)
                const data = scrape(config.content)
                let content = null;
               // console.log( data['esm'].export )
                if(data['esm'].export.length >0){
                    content = "import {default as "+data['esm'].export[0]['name']+"_module} from '"+config.currentPath+"';\n";
                    content += "export const "+data['esm'].export[0]['name']+"="+data['esm'].export[0]['name']+"_module;\n";
                }
                
                return content;
            },
            transformFirstFile : async (config)=>{
                return null;
            },
            transformLastFile : async (config)=>{
                //return null;
                //console.log("tests_s",config)
                return null;
            }
            
        
    }
}

exports.cjsToEsmconvertExportToRequire =  (config)=>{
    
}
