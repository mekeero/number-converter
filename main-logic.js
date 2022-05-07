const roman = {
  I: 1,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
function fun1(){
  var a=Array.from(document.getElementById("num1").value);
  var innum=0;
  for (i=0; i<a.length; i++)
  {
    if (a[i]=='I' && a[i+1]=='V')
    {
      innum+=4;
      i++;
    }
    else if (a[i]=='I' && a[i+1]=='X')
    {
      innum+=9;
      i++;
    }
    else if (a[i]=='X' && a[i+1]=='L')
    {
      innum+=40;
      i++;
    }
    else if (a[i]=='X' && a[i+1]=='C')
    {
      innum+=90;
      i++;
    }
    else if (a[i]=='C' && a[i+1]=='D')
    {
      innum+=400;
      i++;
    }
    else if (a[i]=='C' && a[i+1]=='M')
    {
      innum+=900;
      i++;
    }
    else
    {
      innum+=roman[a[i]];
    }
  }
document.getElementById("num2").value=innum;
}
