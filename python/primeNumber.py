import math


def isPrimeNumber(n):
    if n < 2:
        return False
    if n == 2:
        return True

    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False

    return True


print(isPrimeNumber(5))
print(isPrimeNumber(15))
print(isPrimeNumber(3))
print(isPrimeNumber(21))
