using System;
// n là số lượng viên sỏi
// m là số lượng viên sỏi tối đa có thể bốc được trong 1 lượt
static int Ket(int n, int m) {
  // 0 là thắng, 1 là thua
  return (n % (m+1) == 1 ? 0 : 1);
}

static int CachDi(int n,int m) {
  int r = n % (m+1);
  if (r == 1) return 1;
  else return (r==0 ? m : r-1);
}

Console.WriteLine("Hello, World!");
Console.WriteLine(CachDi(13,3));
