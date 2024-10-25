# Javascript-tutorial

- compiler and interpreter:
- Compiler: 
    - Translates the entire source code into machine code (or an intermediate code) before execution. This produces an executable file that can be run later without the need for the source code or the compiler.
    (compilers translate the entire program upfront into machine code for later execution)
- Interpreter: 
    - Translates the source code line by line and immediately executes it, without producing a separate machine code file.
    (while interpreters translate and execute code on-the-fly.)
     
- javascript used just in compiler (JIT) compiler:
    - A Just-In-Time (JIT) compiler is a hybrid approach that combines aspects of both traditional compilation and interpretation.
    - It compiles code during the execution of a program rather than before execution, which is why it is called "just in time."

- Defer :
    - In JavaScript, the defer attribute is used in the script tag to specify that a script should be executed after the HTML document has been fully parsed.
    -  It ensures that the script does not block the HTML parsing process, improving the performance of the page loading.
    - Key Points :
    - 1. Non-blocking - Unlike scripts without defer, which block the parsing of the HTML until the script is downloaded and executed, a deferred script allows the HTML parsing to continue while the script is being downloaded in the background.
    - 2. Runs After Document Parsing: The script will only run after the entire document has been parsed, but before the DOMContentLoaded event.
    - This behavior is useful for scripts that manipulate the DOM, as it ensures the DOM is fully available when the script runs.



- status code :
    - 404 not found
    - 200 ok 

- VARIABLE-1 :
    - variable in javascript just name of storage location (i.e container to store the value in javascript ) (container are location in memory used to stored value)
    - variable defined in 3 way 
    - 1. var
    - 2. const
    - 3. let 

- VAR  :
    - Scope :==> functional scope 
    - Accessibility :==> variable declare by var  available throughout the function in which they are declare
    - Declare without initialization or not :==> in var we have to declare without initialization 
    - Access without initialization :==>  if you used var you access before without initialization as its default value is undefined
    - Re-declare :==> if you defined variable you have to redeclare the variable value
    - (i.e it can update or re-declare the  into the scope) (it allow redefined or redeclare)
    - Update :==> if you defined the variable value  var so later on you have to change the  value
    - Hoisting :==> hoisting allowed with var.

- lET 
    - Scope :==> Block scope
    - Accessibility  :==> variable declared by let this variable  available only block where they are defined .
    - Declare without initialization or not :==> in let  we have to declare without initialization  
    - Access without initialization :==>  if you used let you can not  access  Before without initialization  otherwise it show the references error
    - Re-declare :==> if you defined variable with let  we can not redeclare more then once if you defined that previously same scope(if you defined variable with let so you can not redeclare with same scope with same name  (not allowed to redefined or redeclare))
    - Update :==> if you defined the variable value  as  let  so later on you have to change or update the  value
    - Hoisting :==> hoisting is not allowed in let  (it is allowed but not initialized)

- CONST :
 
    - Scope :==> block scope
    -  Accessibility  :==> if you declare variable as const so it having the block scope so which can access into the block whatever it defined
    - Declare without initialization or not :==>  it can not declare without initialization   You can't declare a const variable without assigning it a value, (// SyntaxError: Missing initializer in const declaration)
    - Access without initialization :==>  const  can not be accessed without initialization and Cannot be redeclare: Once a const variable is initialized, it cannot be redeclare or reassigned a new value
    -  Redeclare :==> you can not redeclare variable more then once if you defined it previously in the same scope
    - Update : if you define a variable using the const you can not change the value later in your function (it can not update value once it is defined.)
    - Hoisting : Hoisting not allowed  (it is allowed but not initialized.)


-   What is the concept of variable shadowing in java script ?
    - Variable shadowing is when a variable with the same name is declared in an inner scope as a variable in an outer scope. In such cases, the variable in the inner scope hides the variable in the outer scope. Any references to the variable within the inner scope will refer to the inner variable, effectively "shadowing" the outer variable



- DATA TYPE-2 :
    - Def : data type is classification  of data which tells the compiler or interpreter how the programmer intends to use the data.
    - 2 type :
    - primitive data type 
    - not-primitive data type 


- SCOPE-3 :
    -  scop determine the accessibility and visibility of the variable in program
    - type of scope
        - Global scope
        - local scope
        - block scope

-DIALOG BOXES  (defined in window.js file)
        - alter : 
        - confirm :
        - prompt :


- STRING-4 :
    - 1. what is string --> sequences of character 
    - 2. how to create string --> 1. using string literal and using string constructor();
    - 3. How to find the length of the string --> using length property;

    - string method () :
        * method without Argument :
        - 1. toUpperCase() --> convert Given string into the upper case.
        - 2. toLowerCase() --> convert Given string into the lower case
        - 3. trim() --> remove tab, whitespace ,space form the both side . (remove the leading and trailing white space and line terminator character form a string)
        - 4. trimEnd() -->  trimEnd () method remove the whitespace from the end of this string
        - 5. trimStart() --> The trimStart () method remove the whitespace from the starting  of this string 

    - string method with Arguments:
        - 1.includes(searchString, position) :--> 
            - The includes() method in JavaScript is used to check if a given string contains a specified substring. 
            - It returns true if the substring is found, and false otherwise. This method is case-sensitive.

        - 2. indexOf() :-->
            - indexOf() method returns the index of the first occurrence of a specified substring within a string.
            - if the specified substring are not found it return -1

        - 3. replace()
            - used to search for a specified substring or pattern within a string and replace it with another substring
            -  by default replace method only replace first match

        - 4. replaceAll()
            - in JavaScript is used to replace all occurrences of a specified substring or pattern with a new substring.

        - 5. concat() 
            - concat() method in JavaScript is used to combine (concatenate) two or more strings into a single string.
            -  It does not modify the original strings but returns a new string containing the concatenated result.

        - 6. padStart()
            - padStart() method in JavaScript is used to pad the beginning of a string with another string (or characters) until the resulting string reaches a specified length.
            - If the original string is already of the specified length or longer, no padding is applied.

        - 7. padEnd()
            - Padding is added at the end of the string to meet the desired targetLength.
            - Spaces are the default padding character if padString is not provided.
            - if the target length is smaller than the original string's length, the original string is returned without padding.

        - 8. charAt()
            - The charAt() method in JavaScript is used to retrieve the character at a specific index from a string. 
            - It returns a string representing the character at the specified index.
            - does not support -ve index (-ve index treated as zero) (if index of of range or -ve index it return empty string " ")

        - 9. charCodeAt()
            - The charCodeAt() method in JavaScript returns the Unicode (or ASCII) value of the character at a specified index in a string. 
            - It returns an integer representing the UTF-16 code unit at the given index.

        - 10. split()
            - splits a string into an array of substrings, based on a specified delimiter (also limit the number of splits by passing an optional second argument.)
            - original array does not change 

        - 11. at()
            - at() method in JavaScript is used to access the element at a given index in a string or an array. 
            - It is similar to using bracket notation ([]), but with an added benefit: it allows you to use negative indices to     access elements from the end of the string or array.

        - 12. codePointAt() :
            -
        - 13. endWith():
            - endsWith() method in JavaScript determines whether a string ends with the characters of a specified string,or not 
            - it return true or false options

        - 14. fromCharCode()
            - String.fromCharCode() method is used to create a string from a sequence of Unicode values (also known as character codes).

        - 15. fromCharPoint()
            - String.fromCodePoint() method in JavaScript returns a string created from the specified sequence of code points. It is similar to String.fromCharCode()

        - 16. isWellFormed()
            - 
        - 17. lastIndexOf()
            -  The lastIndexOf() method in JavaScript is used to find the last occurrence of a specified value within a string &
            -  return the index of the last occurrences of the specified value 

        - 19. localCompare()
            - localeCompare() method in JavaScript is used to compare two strings in a locale-sensitive manner.
            -  It returns a number indicating whether the reference string (this string) comes before, after, or is the same as the given string (compareString) in sort order.
            - Return the following value based on the comparison
            - -1 if the reference string is sorted before compareString.
            -  0 if the reference string is equal to compareString.
            -  1 if the reference string is sorted after compareString.

        - 20. match()
            - The match() method of string value retrieve the result of matching this string against a regular expression 
            - The match() method returns an array of matches.
            - Match method used to search for first match for regular expression within a string 

        - 21. matchAll()
            -  match() method of string value retrieve the result of All matching this string against a regular expression
            -  matchAll() method used to find all matches for regular expression within a 
            -  Return an iterable iterator object of matches

        - 22. normalize();
            - normalize method of string value return the unicode normalize from of the string 

        - 23. propertyAccess()
            - by using the property access you have to access the character of the given index in string. like [0]

        - 24. repeat()
            - the repeat() method of the string value construct and new string  which contains the specified number of copies of this string or (concatenated together);
            - if the count is 0, an empty string is returned.
            - If the count is negative or Infinity, it throws a RangeError

        - 25. row() raw(templateStrings, ...substitutions)
            - is static method is a tag function of template literals
            -  It is used to get the raw string from of template literals 
            -  It is particularly useful when you need to include backslashes (\) in a string without them being interpreted as escape characters.


        - 26. search(regexp)
            - search() method is used to search a string for a specified value and return the position of the match (OR index of the first match)
            - return -1 if no match found in given regular expression
            -  search() method is used to find the index of the first occurrence of the pattern in the string.

        - 27. slice(start, end) :
            - slice() method of string extract portion or section of the string and return it as a new string

        - 28. valueOf()
                - The valueOf() method in JavaScript is used to return the primitive value of an object.

        - 29. toString()
            -  used to return a string representation of an object.

        - 30. startWith()
            - startWith() method of the string value determine whether the string begin with the character of a specified string or not
            - returning the true of false as appropriate
            - 
        - 31. subStr():
          -  The subStr() method in JavaScript is used to extract a portion of a string starting from a specified index and for a specified number of characters or length
            - extracts the substring  at the specified location and having specified length.
            - subStr() allows negative values for the start parameter, meaning it can count from the end of the string

        - 32. subString()
            -  subString method used to extract the portion of string and return it as a new string
            - Swaps indices if startIndex > endIndex 
        
 

        - Template Literals in javascript :
        -  template Literal are literals delimited with backtick (``) characters allowing  you for multi-line string,
        - string interpolation with embedded expression
        - have to used backtick (`  `) and inside that by using dollar $ symbol you have to write anything
        -  it is a way to represent string Representation.  


- OPERATOR-5 :
    - Expression (combination of operator and operand and its return result)

    - Operator :
    1. Arithmetic operator :
        - 1.Addition
        - 2.Subtraction
        - 3.Division
        - 4.Multiplication 
        - 5.Reminder (Module operator) → return reminder.
        - 6. Exponentiation operator ** (find the power of the value)
    2. Assignment Operator :
        - 1.assign operator equal (=)
        - 2.addition assignment operator', " += "
        - 3.'subtraction assignment operator', " -= "
        - 4.multiplication assignment operator', " *=
        - 5.module  assignment operator', " /= 
        - 6.exponential  assignment operator', " /= "
    3. truthy and falsy value :
        - zero and NaN are falsy value  also empty are are falsy
        - if you give any negative number it always true

    4. Type of comparison operator  :
        - 1. Equal (==); ==> it does implicit automatically conversion form string to number
        - 2. notEqual(!=);
        - 3.StrictEqual(===); (strict equality) need to explicitly conversion form string to number (manually using + operator or parseInt)
        - 4. Strict Not Equal(!==);
        - 5. Greater Than (>)
        - 6. Greater than or equal (>=);
        - 7. Less than (<)
        - 8. Less than or equal (<=)

    5. logical operator
        - 1 logical AND(&&) --> called as conjunction
        - 2.logical OR (||)  --> called as disjunction 
        - 3.logical NOT (!) --> call as Negation

    6.Increment and Decrement Operator :
        - preIncrement (++x) and postIncrement (x++)
        - preDecrement (--x) and postDecrement (x--)

    7. Bitwise operator :




- MATH Object-6 :
        1. Math.round()  
            - Return the value of x rounded to its nearest integer.
            - In round method after point if value less then 5 then its print previous value if value is Greater the 5 or equal the print next rounded integer value

        2. Math.pow() 
            - return the value of x to the power y

        3. Math.sqrt();
            - return the square root of the given value.
        
        4. Math.sqrt();
            -return the square root of the given value

        5.  Math.abs():
            - Math.abs() only changes negative to positive and the value remains the same if the value having 2 decimal or may be having negative value it converts into positive value.

        6.  Math.ceil():
            - Math.ceil(x) return the value of x rounded up to its nearest integer
            -  In ceil method if you have -ve number it return number before decimal as it is
            - console.log(Math.ceil(-4.1)); //-4
            - console.log(Math.ceil(-4.9)); // -4
        
        7. Math.floor():
            - Math.floor() method return the value of x rounded downward to its nearest integer
            - If you give -ve integer value it return increment value as it is before decimal (it is is negative value)
            - console.log(Math.floor(-4.1)); // -5
            - console.log(Math.floor(-4.9)); // -5

        8. Math. max():
            -math.max () can be used to find the highest value in a list of arguments.

        9.  Math.min():
            - Math.min() can be used to find the lowest value in a list of arguments.

        10 Math.random():
            -return random number;

        11 Math.trunc():
            -  The trunc() method return the integer part of a number by removing any fractional or decimal part
            - If a number is positive it returns a positive number also if the number is negative it returns a negative number.



- CONTROL-FLOW-STATEMENT-6 :
        1. Decision making statement   (Conditional statement )
            1. if
            2. if else
            3. nested if else
            4. if-else if ladder
            5. switch statement
      2. Loop statement  (we have to used loop to perform repeated action)
      3. Jump statement


- NOTE :
    - if you write multiline string you have to used back tick ``

- Step to program execution
    1. memory creation phase
    2. program execution phase

-   Global scope :
    - if you create variable using var it create inside the Global scope in browser
- Script scope :(specified to the javascript file that are loaded into html document vai script tag:)
    - if you create variable using const and let it location inside the script scope in bower (it also type of another global scope)
    - Script scope is specific to JavaScript files that are loaded into an HTML document via the script tag. 
    - Each script loaded into the page gets its own scope, meaning variables and functions declared within a script are only available within that script, unless they are explicitly declared as global.

