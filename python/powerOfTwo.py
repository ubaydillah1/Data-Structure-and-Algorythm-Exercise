def powerOfTwo(n: int) -> bool:
    if n < 2:
        return False

    while n > 2:
        if n % 2 != 0:
            return False

        n = n / 2

    return True


print(powerOfTwo(50))
print(powerOfTwo(24))
print(powerOfTwo(64))
print(powerOfTwo(2))
print(powerOfTwo(2.4))
