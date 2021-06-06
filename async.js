/*----------------s3sivaram-----------------------------------------------------------------
Await can be used only on a function or a statement that returns a promise.
Await waits for that function / statement to be completed before it proceeds to the next line.

func2 returns a promise ('passed' if error=false, else 'error' after 2 seconds).

await func2() will return output as 'func1,inside func2, error,func3'

func2() without await will return output as 'func1,func3,inside func2,error'
 
-----------------6-Jun-2021--------------------------------------------------------------*/

function func1() {
  console.log("func1");
}
async function func2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;
      if (!error) resolve("passed");
      else reject("error");
      console.log("inside func2");
    }, 2000);
  });
}

async function func3() {
  console.log("func3");
}

function callback() {
  console.log("callback function");
}

async function main() {
  func1();
  await func2()
    .then((mess) => console.log(mess))
    .catch((err) => console.log(err));
  func3();
}

main();
