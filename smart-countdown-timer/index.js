let number = 10; 

if (number < 0) {
  console.log("عدد منفی است، برنامه متوقف شد ❌");
} else {

  let step;

  if (number % 2 === 0) {
    step = 2;
    console.log("عدد زوج است 🔵");
  } else {
    step = 1;
    console.log("عدد فرد است 🟢");
  }

  const timer = setInterval(() => {
    console.log(number);

    number = number - step;

    if (number <= 0) {
      console.log("پایان تایمر ⏹️");
      clearInterval(timer);
    }

  }, 1000);
}
