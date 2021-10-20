var args = process.argv.slice(2);

var fs = require("fs");

switch (args[0]) {
    case "--createFolder":
        console.log("Wait!! till we create a folder");
        setTimeout(() => {
            console.log("Your Folder is being created");
        }, 2000);
        fs.mkdirSync(args[1]);
        break;
    case "--createFile":
        console.log("Wait!! till we create your file");
        setTimeout(() => {
            console.log("Your File is being created");
        }, 2000);
        fs.writeFileSync(args[1], args[2], (err) => {
            if (err) {
                console.error(err);
            }
        });
        break;
    case "--read":
        console.log("Wait!! till we read your file");
        setTimeout(() => {
            console.log("----here is your file-----");
        }, 2000);
        var data = fs.readFileSync(args[1], "utf-8");
        console.log(data);
        break;
    case "--deleteFile":
        console.log("Wait!! till we delete your file");
        setTimeout(() => {
            console.log("Your File is being deleted");
        }, 2000);
        fs.unlinkSync(args[1]);
        break;
    case "--deleteFolder":
        console.log("Wait!! till we delete your folder");
        setTimeout(() => {
            console.log("Your folder is being deleted");
        }, 2000);
        fs.rmdirSync(args[1]);
        break;
    default:
        console.log(
            "--createFolder [folder_name]: To Create a Folder \n" +
            "--createFile [File_name] [file_content]: To create file \n" +
            "--read [file_name]: To read a file \n" +
            "--deleteFile [file_name]: to delete a file\n" +
            "--deleteFolder [Folder_name]:to delete a folder\n"
        );
}


