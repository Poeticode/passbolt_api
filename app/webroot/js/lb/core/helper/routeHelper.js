steal( 
    'jquery/class'
)
.then( 
    function($){
        
        $.Class('lb.core.helper.routeHelper', {
            
            'getClassController': function()
            {
                
            },
            
            
            'formatStrToPluginName' : function(str)
            {
                var returnValue = '';
                
                // change uppercase char with _ following by the char in lowercase
                var j = 0;
                for(var i in str){
                    if(str[i] != '_' 
                        && str[i] == str[i].toUpperCase())
                    {
                        returnValue += '_'+str[i].toLowerCase();
                        j+=1;
                    }
                    else{
                        returnValue += str[i];
                    }
                    j++;
                }
                
                return returnValue;
            },
            
            /**
             * Get a plugin name controller functions of a route
             * @param lb.core.models.Route
             * @static
             * @todo set the application name. Now gacd is currently used, and clean the param
             * @todo move a part in classHelper
             */
            'pluginNameController' : function(route, options)
            {
                var returnValue = '';
                var prefix = typeof(options)!='undefined' && typeof(options.prefix)!='undefined' ? options.prefix : '';
                
                //route is route :)
                if(typeof route == 'object'){
                    returnValue = route.module+'_'+route.controller;
                }
                //is a string which represent de class
                else{
                    var arr = route.split('.');
                    //returnValue = arr[0] + '_' + arr[1] + '_' + arr[3].substr(0,1).toLowerCase() + arr[3].substr(1, arr[3].length-11);
                    //myAppName.myModuleName.controller.myCtlNameController -> myAppName_myModuleName_myCtlName
                    returnValue = arr[0] + '_' + arr[1] + '_' + arr[3].substr(0, arr[3].length-10).toLowerCase();
                }
                
                return prefix+lb.core.helper.routeHelper.formatStrToPluginName(returnValue);
            }
            
            /**
             * Get a class name controller functions of a route
             * @param lb.core.models.Route
             * @static
             * @todo set the application name. Now gacd is currently used
             */
            , 'classNameController' : function(route, options)
            {
                var prefix = typeof(options)!='undefined' && typeof(options.prefix)!='undefined' ? options.prefix : '';
                var controllerName = route.controller.charAt(0).toUpperCase() + route.controller.slice(1)+'Controller';
                return prefix+route.module+'.controller.'+controllerName;
            }
        }
        , {
            /**
             * There is no constructor
             * @throw {lb.core.NoConstructor}
             */
            'init' : function(){
                throw new lb.core.NoConstructor();
            }
        });
    
    }
);