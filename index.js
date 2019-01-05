// callback
const callbackFn = (firstName, callback) => {
  setTimeout(() => {
    if (!firstName) {
      callback('no first name passed in!')
      return
    }
    
    const fullName = `${firstName} Doe`
    
    callback(fullName)
  }, 2000)
}

callbackFn('John', console.log)
callbackFn(null, console.log)

// promise
const promiseFn = firstName => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName) reject('no first name passed in!')
      
      const fullName = `${firstName} Doe`  
      
      if (fullName) resolve(fullName)
    }, 2000)
  })
}

promiseFn('John').then(console.log)
promiseFn().catch(console.log)

// async/await
// (async () => {
//   try {
//     console.log(await promiseFn('Jane')) 
//   } catch (e) {
//     console.log(e)
//   }

//   try {
//     console.log(await promiseFn()) 
//   } catch (e) {
//     console.log(e)
//   }
// })()