
def NoZeroElement(lst):
    el = []
    for i in lst:
        if i != 0:
            el.append(i)

    ZeroCount = lst.count(0)

    el.extend([0]*ZeroCount)

    return el


l = [0,0,2,4,0,1,6,9]
lst = NoZeroElement(l)

print(lst)
