var fs = require('fs');

module.exports = function(path, cb) {

  fs.readFile(path, 'utf8', function (err, rawData) {
    if (err) {
      return console.log(err);
    }

    var dataObject = JSON.parse(rawData);
    //console.log(JSON.stringify(ss, 2));
    //console.log(JSON.stringify(rawData, 2));

    //  Copy the snapshot data.
    var result = {};
    result.snapshot = {
      title: dataObject.snapshot.title,
      uid: dataObject.snapshot.uid,
      meta: dataObject.snapshot.meta      
    };

    console.log(JSON.stringify(result.snapshot, null, 2));

    var x = 0;
    for(var prop in dataObject) {
      if (dataObject.hasOwnProperty(prop)) {
        console.log(prop);
        if(x++ > 1) break;
        //  console.log(JSON.stringify(rawData[prop], 2));
      }
    }
  });

};

/*
  {"snapshot":
    {"title":"Snapshot 2",
    "uid":2,
    "meta":{
      "node_fields": ["type","name","id","self_size","edge_count","trace_node_id"],
      "node_types":[["hidden","array","string","object","code","closure","regexp","number","native","synthetic","concatenated string","sliced string"],
      "string","number","number","number","number","number"],
      "edge_fields":["type","name_or_index","to_node"],
      "edge_types":[["context","element","property","internal","hidden","shortcut","weak"],
      "string_or_number","node"],
      "trace_function_info_fields":["function_id","name","script_name","script_id","line","column"],
      "trace_node_fields":["id","function_info_index","count","size","children"]},
      "node_count":42362,
      "edge_count":192415,
      "trace_function_count":0},
*/
