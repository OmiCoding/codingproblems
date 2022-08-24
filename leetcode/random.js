function somef() {
  let x = 0;

  return () => {
    console.log(this);
  };
}

console.log(somef());
