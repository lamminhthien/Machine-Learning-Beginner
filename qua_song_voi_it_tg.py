# 1) Người 1 và 2 qua cầu: mất 3 giây.

# 2) Người 1 cầm đèn quay trở lại: mất 1 giây.

# 3) Người 3 và 4 qua cầu: mất 12 giây.

# 4) Người 2 cầm đèn quay trở lại:  mất 3 giây.

# 5) Người 1 và 2 qua cầu: mất 3 giây.

# Tổng cộng mất 22 giây.
# 4
# 1 3 8 12

def minimumTime(lis, n):
    lis = sorted(lis)
    sumTime = 0
 
    for i in range(n - 1, 1, -2):
        if (i == 2):
            sumTime += lis[2] + lis[0]
 
        else:
            price_first = lis[i] + lis[0] + 2 * lis[1]
            price_second = lis[i] + lis[i - 1] + 2 * lis[0]
            sumTime += min(price_first, price_second)
 
    if (n == 1):
        sumTime += lis[0]
 
    else:
        sumTime += lis[1]
 
    return sumTime

lis = list(map(int, input().split()))
n = len(lis)
 
print(minimumTime(lis, n))