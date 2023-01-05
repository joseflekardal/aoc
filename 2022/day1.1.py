with open("2022/input.txt", "r") as file:
    input = file.read()


def solve_puzzle(input):
    highest_kcal_total = 0

    for elf_foods in input.split("\n\n"):
        kcals = map(int, elf_foods.split("\n"))
        elf_total = sum(kcals)
        highest_kcal_total = max(highest_kcal_total, elf_total)

    return highest_kcal_total


result = solve_puzzle(input)

print(result)
