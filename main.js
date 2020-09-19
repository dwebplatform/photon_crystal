// const {app, BrowserWindow, Menu, globalShortcut} = require('electron');

const { spawn } = require('child_process');


// const childPython = spawn('python',['--version']);
const childPython = spawn('python',['layercomputation.py'])
// const isDev = true;
// let mainWindow;
// function createWindow(){
//     mainWindow =new BrowserWindow({
//         width:800,
//         height:800,
//         resizable: true,
//         backgroundColor:'#f2f2f2',
//         webPreferences:{
//             nodeIntegration: true
//         }
//     });
//     mainWindow.loadFile('index.html');
//     mainWindow.webContents.openDevTools()
// }

childPython.stdout.on('data',(data)=>{
    console.log(`incoming ${data}`);
});
childPython.on('close',(code)=>{
    console.log(`child code exit with code ${code}`);

})



 
// app.whenReady().then(()=>{
    
//     const mainMenu =Menu.buildFromTemplate(menu);
//     Menu.setApplicationMenu(mainMenu);
//     globalShortcut.register('Ctrl+R',()=>mainWindow.reload());
//     globalShortcut.register('Ctrl+Shift+I',()=>mainWindow.toggleDevTools())
//     createWindow();
//     mainWindow.on('ready',()=>mainWindow = null)
// });
// const menu =[
//     {
//         label:'File',
//         ...(isDev?[
//             {
//                 label:'Developer',
//                 submenu:[
//                     {role:'reload'},
//                     {role:'forcereload'},
//                     {type:'separator'},
//                     {role:'toggledevtools'}

//                 ]
//             }
//         ]:[])
        
//     }
// ];