n = int(input('Số lượng viên sỏi:'))
m = int(input('Số lượng viên sỏi tối đa có thể lụm:'))

playerName = 1  #Người chơi khởi điểm là 1 là Thắng

while (n > 1):
  if (playerName == 1):
    soVienBoc = int(input(f'Mời bạn Thắng bốc sỏi:'))
  else:
    soVienBoc = int(input(f'Mời bạn Thiện bốc sỏi:'))
  while (soVienBoc > m or soVienBoc < 0):
    print('Bạn bốc quá số viên hoặc bốc âm viên:')
    soVienBoc = int(input('Mời bạn bốc lại viên sỏi:'))
  n = n - soVienBoc # Cập nhật lại số lượng viên sỏi
  print(f'Còn lại {n} viên sỏi')
  playerName = playerName*(-1) # Chuyển sang người -1

if (playerName == '1'):
  print("Thắng thắng game bốc sỏi")
else:
  print("Thiện thắng game bốc sỏi")
