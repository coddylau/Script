const fs = require('fs')
const path = require('path')

// 示例
// merge({
//   filePath: './md',
//   fileType: 'md'
// })


// 合并文件主程序， 传入文件路径和文件类型，会在当前路径生成一个合并后的mergefile文件
async function merge({ filePath, fileType }) {
  filePath = path.join(__dirname, filePath)
  let fileList = await getFileList(filePath, fileType)

  for (let i = 0; i < fileList.length; i++) {
    let flag = await writeFile(fileList[i], fileType)
    if (flag) {
      continue
    }
  }
}

// 传入文件写入
function writeFile(file, fileType) {
  return new Promise((resolve, reject) => {
    const BaseFile = path.join(__dirname, `mergefile.${fileType}`)
    fs.readFile(file, (err, data) => {
      if (err) {
        console.log(`${file}文件路径有问题，或文件不可读取`)
        reject(err)
        return err
      }
      fs.appendFile(BaseFile, data, (err) => {
        if (err) {
          console.log('写入文件失败', err)
          reject(err)
        } else {
          console.log(`${file}写入成功`)
          resolve(true)
        }

      })
    })
  })
}

// 传入文件目录获取文件夹下指定后缀文件
function getFileList(filePath, fileType) {

  return new Promise((resolve, reject) => {
    let fileList = []
    fs.readdir(filePath, (err, files) => {
      if (err) {
        return reject(err)
      }
      // 过滤文件类型
      let filterList = files.filter(file => {
        let re = new RegExp(fileType + '$')
        return re.test(file)
      })

      // 获取文件的绝对路径，
      filterList.forEach(file => {
        fileList.push(path.join(filePath, file))
      })
      resolve(fileList)
    })
  })

}

