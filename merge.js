const fs = require('fs')
const path = require('path')

let filePath = process.argv[2]
let fileType = process.argv[3]


// 示例
// merge({
//   filePath: './md',
//   fileType: 'md'
// })

filePath = getArgument(filePath)
fileType = getArgument(fileType)

if (fileType && filePath) {
  merge({
    filePath,
    fileType
  })
} else {
  console.log('使用方法: node merge.js [相对于此文件的目录名称] [文件类型]')
}

function getArgument(file) {
  const re = /-*(?<name>\w+)/
  const list = re.exec(file)

  if (list.groups) {
    return list.groups.name
  }
  
}

// 合并文件主程序， 传入文件路径和文件类型，会在当前路径生成一个合并后的mergefile文件
async function merge({ filePath, fileType }) {
  filePath = path.join(__dirname, filePath)
  let fileList = await getFileList(filePath, fileType)
  if (fileList.length === 0) return console.log('没有需要合并的文件')
  for (let i = 0; i < fileList.length; i++) {
    try {
      let flag = await writeFile(fileList[i], fileType)
      if (!flag) {
        break
      } else {
        continue
      }
    } catch (error) {
      console.log(error)
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
        return
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

