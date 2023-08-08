# GoogleAppScript
These are my frequently used Google Apps Scripts.

Go to https://script.google.com/home, create a project, and then add these files in the left-side "Files" menu. Remember to add "Drive API" into the Services in the left-side "Services" menu.

When you click "Run" the first time, it pops "Authorization required", you choose "Review permissions", then you choose your Google account to authorize it. After that, you received the warning "Google hasn’t verified this app". Click "Advanced", and then "Go to <project> (unsafe)", then allow the access.

## FileAmountAndSizes
Calculate the amount and total size of files in a Google Drive folder. The example is for the folder "\moveGoogleDrive\windowsccccc". You can tweak the code to apply to any path but remember the path always starts from root of your Google Drive.

The output is like `7:54:17 PM	Info	[Total, 947, 4748449194]`, which indicates there are total 947 files and the total size is 4,748,449,194 bytes.

