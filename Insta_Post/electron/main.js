const { app } = require('electron')
const controlWindow = require('./ControlWindow')


function App(){
  const win  = require('./CreateWindow')
  const tray = require('./Tray')

  const { toggle } = controlWindow(win,tray)

  tray.on('click', toggle )
}

app.whenReady().then(App) 


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


