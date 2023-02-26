const path = require("path");
const prod = process.env.NODE_ENV === 'production';

/*
    We are basically telling webpack to take index.js from entry. Then check for all file extensions in resolve. 
    After that apply all the rules in module.rules and produce the output and place it in main.js in the public folder.
*/

module.exports = {
    mode: prod ? 'production' : 'development',
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js"
    },
    /** "target"
     * setting "node" as target app (server side), and setting it as "web" is 
     * for browser (client side). Default is "web"
     */
    
    target: "web",
    devServer: {
        port: "9500",
        static: ["./public"],

        // open browser after server starts
        open: true,

        /** "hot"
         * enabling and disabling HMR. takes "true", "false" and "only". 
         * "only" is used if enable Hot Module Replacement without page 
         * refresh as a fallback in case of build failures
         */        
        hot: true,

        /** "liveReload"
         * disable live reload on the browser. "hot" must be set to false for this to work
        */
       liveReload: true
    },
    resolve: {
        /** "extensions" 
         * If multiple files share the same name but have different extensions, webpack will 
         * resolve the one with the extension listed first in the array and skip the rest. 
         * This is what enables users to leave off the extension when importing
         */

        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,  // looks for js or jsx files and applies the test to those files
                exclude: /node_modules/, // ignore anything inside node_modules
                use: 'babel-loader' // loader we'll use to transpile 
            }
        ]
    }
}
