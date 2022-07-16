using System;
// n là số lượng viên sỏi
// k là số lượng viên sỏi tối đa có thể bốc được trong 1 lượt
static int Ket(int n, int k) {
  // 0 là thắng, 1 là thua
  return (n % (k+1) == 1 ? 0 : 1);
}

static int CachDi(int n,int k) {
  // Đoạn dư r = n mod (k+1)
  int r = n % (k+1);
  if (r == 1) return 1;
  else return (r==0 ? k : r-1);
}

Console.WriteLine("Hello, World!");
Console.WriteLine(CachDi(13,2));
