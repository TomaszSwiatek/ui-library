// this is the option object where we configure out input output files and others:
// this is node.js script. becouse we run it in our computer no inbrowser.
// module.exports means that it is module we wany to export.
const path = require("path");
module.exports = {
  entry: "./src/index.js", //input file to compile - relative path
  output: {
    path: path.resolve(__dirname, "dist/assets"), //absolute path this time from root folder of PC - becouse of it we have to use path method - becouse on each comp ll be different absolute path.
    filename: "bundle.js" //here we write file, higher only path to folder.
  },
  // now we configure out webpack dev server:
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), //absolue path
    publicPath: "/assets/" //only path from dist folder to folder which include js files. in truth we set up the same path like above for output but for virtual server to watchin our project. this ONLY RUNS OUR FILES IN VIRTUAL MEMORY OF WEBPACK.
  },
  module: {
    rules: [
      {
        test: /\.js$/, //to znaczy że na końcu musi być .js kazdego pliku.
        exclude: /node_modules/, //to tez wyrazenie regularne ktore kaze pomijac pliki w całym folderze node_modules bo inaczej tez babel by tam robil robote.
        use: {
          loader: "babel-loader", //to zmieniania kodu używać babel-loadera- pewnie sa tez inne loadery.
          options: {
            presets: ["@babel/preset-env"] //this is the same preset which we used with only babel compilator.
          }
        }
      }, //ponizej tworzymy rules dla kompilowania plikow css:
      {
        test: /\.css$/, //ma sie konczyc na .css
        use: ["style-loader", "css-loader"] //tutaj kolejosc jest wazna - kod czytany jest tu od PRAWEJ DO LEWEJ I wpierw musi byc uzyty css loader by potem mogl dzialac styleloader! style loader dodaje przerobione pliki do htmlk by mogly byc wyswietlone. te loadery dzialaja tylko GDY DODAMY IMPORT DO INDEX.JS KTORY jest podlinkowany do html w dist.
      }
    ]
  }
};
