# Write a Python function called max_num() to find the maximum of three numbers.
def max_num(a,b,c):
    print(max(a,b,c))

# Write a Python function called mult_list() to multiply all the numbers in a list.
def mult_list(lst):
    if len(lst) == 0:
        return 0
    prod = lst[0]
    if len(lst) > 1:
        for i in lst[1:]:
            prod = prod * i
    return print(prod)

# Write a Python function called rev_string() to reverse a string.
def rev_string(string):
	print(string[::-1])

# Write a Python function called num_within() to check whether a number falls in a given range.
def num_within(a, b, c):
	if (a in range(b,c)):
		print("True")
	else:
		print("False")

# Write a Python function called pascal() that prints out the first n rows of Pascal's triangle.
triangle = [[1],[1,1]]
def pascal(n):
  #base case
  if n < 1:
    print("invalid number of rows")
  elif n == 1:
    print(triangle[0])
  else:
    row_number = 2
    #fill up correct number of rows in triangle
    while len(triangle) < n:
      row = []
      row_prev = triangle[row_number - 1]
      #create correct row, then add to triangle (this row will be 1 longer than row before it)
      length = len(row_prev)+1
      for i in range(length):
        #first number is 1
        if i == 0:
          row.append(1)
        #intermediate nunmbers get added from previous rows
        elif i > 0 and i < length-1:
          row.append(triangle[row_number-1][i-1]+triangle[row_number-1][i])
        #last number is 1
        else:
          row.append(1)
      triangle.append(row)
      row_number += 1

    #print triangle
    for row in triangle:
      print(row)



max_num(2,6,9)
mult_list([2, 6, 9])
rev_string("hello")
num_within(2,6,9)
pascal(2)
pascal(5)





# Example of recursion vs iterative
""" def get_recursive_factorial(n):
	if n< 0:
		return -1
	elif n<2:
		return 1
	else:
		return n*get_recursive_factorial(n-1)

def get_iterative_factorial(n):
	if n < 0:
		return -1
	else: 
		fact = 1
		for i in range(1, n+1):
			fact *= i
		return fact

print(get_recursive_factorial(6))
print(get_iterative_factorial(6))
 """