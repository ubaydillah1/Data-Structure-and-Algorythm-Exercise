def fibonacci(n):
    if n < 0:
        return [0]

    result = [0, 1]

    for i in range(n - 2):
        result.append(result[i] + result[i + 1])

    return result


print(fibonacci(6))
