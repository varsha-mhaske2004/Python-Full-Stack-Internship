#Day 02: Python Programming Fundamentals 
# Program 1:EVen or Odd 
num=int(input("Enter a number:"))
if num%2==0:
    print("Even number")
else:
    print("Odd number")

# Program 2: Largest of Three Numbers 
a=int(input("Enter first number:"))
b=int(input("Enter second number:"))
c=int(input("Enter third number:"))
if a>=b and a>=c:
  print("largest number is:",a)
elif b>=a and b>=c:
   print("Largest number is:",b)
else:
   print("Largest number is:",c)



# Program 3: Factorial of a Number

num = int(input("Enter a number: "))

fact = 1

if num < 0:
    print("Factorial is not defined for negative numbers")
else:
    for i in range(1, num + 1):
        fact = fact * i

    print("Factorial is:", fact)


# Program 4: Check Prime Number

num = int(input("Enter a number: "))

if num <= 1:
    print("Not a prime number")
else:
    for i in range(2, num):
        if num % i == 0:
            print("Not a prime number")
            break
    else:
        print("Prime number")


# Program 5: Reverse a Number

num = int(input("Enter a number: "))

reverse = 0

while num > 0:
    digit = num % 10
    reverse = reverse * 10 + digit
    num = num // 10

print("Reversed number is:", reverse)



# Program 6: Multiplication Table

num = int(input("Enter a number: "))

for i in range(1, 11):
    print(num, "x", i, "=", num * i)
