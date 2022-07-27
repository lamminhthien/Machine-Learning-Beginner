from os.path import exists
from threading import Thread
import threading
## Chú thích
# i là số thứ tự của hàng, j là số thứ tự của cột

a = [None]*20
def Ok(x2,y2):
  # kiểm tra cách đặt có thỏa mãn không
  for i in range (1,x2):
    if (a[i] == y2 or abs(i-x2) == abs(a[i]-y2)):
      return bool(0)
  # Nếu kiểm tra hết các trường hợp vẫn không sai thì trả về true
  return bool(1)

def Xuat(n):
  # In ra một kết quả
  for i in range(1,n+1):
    print(f'{a[i]}',end = " ")
    f.write(f'{a[i]}')
  print('\n')
  f.write('\n')

def Try(i,n):
  for j in range(1,n+1):
    # Thử đặt quân hậu vào các cột từ 1 đến n
    if(Ok(i,j)):
      # Nếu cách đặt này thỏa mãn thì lưu lại vị trí
      a[i] = j
      # Nếu đặt xong quân hậu thứ n thì xuất ra một kết quả
      if (i==n):
        Xuat(n)
      Try(i+1,n)

n = 8 # Ở đây mình cho bài toán là 8 quân hậu trên bàn 8*8
# Ghi dữ liệu vào file để render lên html
f = open("result.txt","w")
Try(1,n)
