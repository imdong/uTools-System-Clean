window.exports = {
    "clear_system": {
        mode: "none",
        args: {
            enter: (action) => {
                utools.showNotification('清理完成')
                
                window.utools.hideMainWindow()
                window.utools.outPlugin()
            }
        }
    }
}