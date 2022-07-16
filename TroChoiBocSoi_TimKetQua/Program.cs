using System;
// n là số lượng viên sỏi
// k là số lượng viên sỏi tối đa có thể bốc được trong 1 lượt
static int Ket(int n, int k)
{
  // 0 là thắng, 1 là thua
  return (n % (k + 1) == 1 ? 0 : 1);
}

static void CachDi(int n, int k)
{
  // Đoạn dư r = n mod (k+1)
  int r = n % (k + 1);
  if (r == 1) Console.WriteLine("Bạn đã thua");
  // else return (r==0 ? k : r-1);
  else if (r == 0) Console.WriteLine(k);
  else Console.WriteLine(r - 1);
}

Console.WriteLine("Hello, World!");
// Console.WriteLine(CachDi(13, 2));
CachDi(13,4);
// 13,5 Bí mật cộng vào giá trị 1 ở mỗi lần bốc, cố gắng để lại
// 1 viên cuối cùng
//a 1 n=12
//b 3 n=9
// a 2 n=7
// b 3 n=4
// a 3 n=1
// a win

// a 1 n=12
// b 1 n=11
// a 2 n=9
// b 1 n=8
// a 3 n=5
// b 1 n=4
// a 4 n=1
// a win


