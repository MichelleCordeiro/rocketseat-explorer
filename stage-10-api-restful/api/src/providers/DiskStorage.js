const fs = require('fs')
const path = require('path')
const uploadConfig = require('../configs/upload')

class DiskUpload {
  async saveFile(file) {
    await fs.promises.rename(
      path.resolve(uploadConfig.TMP_FOLDER, file),
      path.resolve(uploadConfig.UPLOADS_FOLDER, file)
    )

    return file
  }

  async deleteFile(file) {
    const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file)
    
    try {
      await fs.promises.stat(filePath)
    } catch (error) {
      alert(error.message)
    }

    await fs.promises.unlink(filePath)
  }
}

module.exports = DiskUpload