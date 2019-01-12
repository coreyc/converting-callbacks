// callback
const callbackFn = (firstName, callback) => {
  setTimeout(() => {
    if (!firstName) return callback(new Error('no first name passed in!'))
    
    const fullName = `${firstName} Doe`
    
    return callback(fullName)
  }, 2000)
}

callbackFn('Callback', console.log)
callbackFn(null, console.log)

// converting callback -> promise
const promiseFn = firstName => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName) reject(new Error('no first name passed in!'))
      
      const fullName = `${firstName} Doe`  
      
      resolve(fullName)
    }, 2000)
  })
}

promiseFn('Promise').then(console.log)
promiseFn().catch(console.log)

// calling promise using async/await
const result = (async () => {
  try {
    console.log(await promiseFn('Async')) 
  } catch (e) {
    console.log(e)
  }

  try {
    console.log(await promiseFn()) 
  } catch (e) {
    console.log(e)
  }
})()

const timeout = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// converting callback -> async/await
const asyncAwaitFn = async firstName => {
  await timeout(2000)
  
  if (!firstName) throw new Error('no first name passed in!')
    
  const fullName = `${firstName} Doe`
    
  return fullName
}

const res = (async () => {
  try {
    console.log(await asyncAwaitFn('Async-converted')) 
  } catch (e) {
    console.log(e)
  }

  try {
    console.log(await asyncAwaitFn()) 
  } catch (e) {
    console.log(e)
  }
})()