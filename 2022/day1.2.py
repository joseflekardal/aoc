with open("2022/input.txt", "r") as file:
    input = file.read()

MAX_TOP_ITEMS = 3


def solve_puzzle(input):
    kcal_top_list = []

    for elf_foods in input.split("\n\n"):
        kcals = map(int, elf_foods.split("\n"))
        elf_total = sum(kcals)
        kcal_top_list.append(elf_total)

        if len(kcal_top_list) > MAX_TOP_ITEMS:
            lowest = min(kcal_top_list)
            kcal_top_list.remove(lowest)

    return sum(kcal_top_list)


result = solve_puzzle(input)
print(result)
