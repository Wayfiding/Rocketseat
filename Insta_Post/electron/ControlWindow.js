const { screen } = require('electron')


function ControlWindow(win, tray) {
    function toggle() {
        if(win.isVisible()){
            win.hide()
        } else {
            show()
        }
    }

    function show() {
        // pegar o posicionamento da win / tray
        const { x,y } = getPosition()
        // atualizar o posicionamento da win
        win.setPosition(x,y, false)
        // mostrar a win
        win.show()
        win.focus()

    }
    function getPosition(){
        const displayPosistion = screen.getCursorScreenPoint()
        
        const trayBounds = screen.getCursorScreenPoint()

        const x = Math.round(displayPosistion.x - 125  )
        const y = Math.round(displayPosistion.y - 350)
        

        return { x, y }
    }

    return { 
        toggle
     }
}


 module.exports = ControlWindow