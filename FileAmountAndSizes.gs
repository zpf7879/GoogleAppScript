function calculateFilesInFolder() {
  var folderName = 'moveGoogleDrive'; // Replace with your parent folder name
  var sub_folder_name = 'windowsccccc'
  var parent_folder = DriveApp.getFoldersByName(folderName).next();
  var folder = parent_folder.getFoldersByName(sub_folder_name).next();

  var fileAmount = { value: 0 };
  var totalSize = {value : 0.0};
  traverse(folder, sub_folder_name, fileAmount, totalSize);
  Logger.log(['Total', fileAmount.value.toFixed(0), totalSize.value.toFixed(0)]);
}
 
function traverse(folder, currentPath, fileAmount, totalSize) {
  // List all files in the folder
  var files = folder.getFiles();

  var var_file;
  var var_size;
  while (files.hasNext()) {
    var_file = files.next();
    var_name = var_file.getName();
    var_size = var_file.getSize();
    fileAmount.value += 1;
    totalSize.value += var_size;
  }
  
  // List all sub-folders in the folder
  var subfolders = folder.getFolders();
  while (subfolders.hasNext()) {
    var subfolder = subfolders.next();
    traverse(subfolder, currentPath + '/' + subfolder.getName(), fileAmount, totalSize)
  }
}

