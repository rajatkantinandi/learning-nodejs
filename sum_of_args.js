var args=process.argv,sum=0;
for(var i=2;i<args.length;i++){
  sum+=Math.abs(args[i]);
}
console.log(sum);