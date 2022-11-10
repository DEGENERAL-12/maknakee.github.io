
const queLoader = [
    {
        id: "1",
        q: "Q1. Human beings make use of ______________ to solve problems",
        a: "intelligence",
        b: "emotion",
        c: "reasoning",
        d: "intuition",
        crt: "d",
        view: "Option D"
    },
    {
        id: "2",
        q: "Q2. In ______________ criterion, there should also be a stopping criterion to terminate an algorithm in a case of a step with repeated execution.",
        a: "Input",
        b: "Efficiency",
        c: "Finiteness",
        d: "Output",
        crt: "c",
        view: "Option C"
    },
    {
        id: "3",
        q: "Q3. A _______________ is a logical representation of an algorithm using third generation language (3 GL) style.",
        a: "Algorithm",
        b: "Procedure",
        c: "Pseudocode",
        d: "All",
        crt: "c",
        view: "Option C"
    },
    {
        id: "4",
        q: "Q4. ________ is simply the step-by-step operation of each block in your structure chart.",
        a: "Structure chart",
        b: "Detailed logic",
        c: "General logic",
        d: "None of the options",
        crt: "b",
        view: "Option B"
    },
    {
        id: "5",
        q: "Q5. A_____________ is the flowchart that outlines the general flow and major segments of a program.",
        a: "Micro flowchart",
        b: "Modular programming flowchart ",
        c: "Detail flowchart",
        d: "None",
        crt: "b",
        view: "Option B"
    },
    {
        id: "6",
        q: "Q6. Which of the following options is NOT an advantage of Machine Language (ML)?",
        a: "Totally machine-dependent",
        b: "Programmer's full control of the Computer and its capabilities",
        c: "Storage Saving",
        d: "Fast execution speed",
        crt: "a",
        view: "Option A"
    },
    {
        id: "7",
        q: "Q7. _______________ are those that perform specific computational tasks or data processing to solve user's problems.",
        a: "mySQL",
        b: "Application program",
        c: "Database program",
        d: "All",
        crt: "b",
        view: "Option B"
    },
    {
        id: "8",
        q: "Q8. The ________________ provides no information to the computer itself and hence the statement is never executed during the execution of the program.",
        a: "LET statement",
        b: "LINE statement",
        c: "REM statement",
        d: "GOTO statement",
        crt: "c",
        view: "Option C"
    },
    {
        id: "9",
        q: "Q9. ___________ represents the information requirements of users of the program.",
        a: "Input",
        b: "Output",
        c: "Processing",
        d: "All",
        crt: "b",
        view: "Option B"
    },
    {
        id: "10",
        q: "Q10. The disadvantages of Assembly Language (AL) can be summarised as follows except",
        a: "It is cumbersome in usage",
        b: "Assembly Language is machine-dependent like the Machine Language",
        c: "Assembly Language has one-to-one-relationship with machine language",
        d: "It provides an error listing which is useful in debugging",
        crt: "d",
        view: "Option D"
    },
    {
        id: "11",
        q: "Q11. The major processing programs existing in the OS include the following except",
        a: "Data Program",
        b: "Utility Program",
        c: "Language Translators",
        d: "Linkage Editor",
        crt: "a",
        view: "Option A"
    },
    {
        id: "12",
        q: "Q12. The _____________ should consist of all written descriptions and explanations of the program and other materials associated with the development.",
        a: "documentation",
        b: "development",
        c: "software",
        d: "All",
        crt: "a",
        view: "Option A"
    },
    {
        id: "13",
        q: "13. The aims that guide the design of a good computer program include the following except?",
        a: "Exportability",
        b: "Reliability",
        c: "Maintainability",
        d: "Portability",
        crt: "a",
        view: "Option A"
    },
    {
        id: "14",
        q: "Q14. The following options are all stages in the program development EXCEPT?",
        a: "Problem Maintenance",
        b: "Program Testing",
        c: "Solution Design",
        d: "Problem Definition",
        crt: "a",
        view: "Option A"
    },
    {
        id: "15",
        q: "Q15. An ____________ is just a signal sent to the CPU indicating that an event 'hat occurred.",
        a: "Overflow",
        b: "Underflow",
        c: "Exterminate",
        d: "Interrupt",
        crt: "d",
        view: "Option D"
    },
    {
        id: "16",
        q: "Q16. The assertions are classified as follows in association with algorithm development EXCEPT?",
        a: "Middle assertion",
        b: "Initial assertion",
        c: "Pre-condition",
        d: "Final assertion",
        crt: "a",
        view: "Option A"
    },
    {
        id: "17",
        q: "Q17. ____________ is a scientific-oriented and problem-oriented language.",
        a: "BASIC",
        b: "Pascal",
        c: "FORTRAN",
        d: "Assembly Language",
        crt: "c",
        view: "Option C"
    },
    {
        id: "18",
        q: "Q18. A_____________ is the flowchart that outlines the general flow and major segments of a program.",
        a: "Micro flowchart",
        b: "Detail flowchart",
        c: "Modular programming flowchart",
        d: "None",
        crt: "c",
        view: "Option C"
    },

    {

        id: "19",
        q: "Q19. __________ is the processing of adding element to the stack",
        a: "PUSH",
        b: "DELETE",
        c: "ADD",
        d: "None",
        crt: "a",
        view: "Option A" 
    },
    {
        id: "20",
        q: "Q20. ___________ occurs when the whole program is being tested in its final form to be ready for use.",
        a: "System testing",
        b: "Software testing",
        c: "Unit testing",
        d: "Integration Testing",
        crt: "a",
        view: "Option A"
    },
    {
        id: "21",
        q: "Q21. __________is simply the difficulty of solving computational problems, measured in terms of some resources employed during the computational process.",
        a: "Time complexity",
        b: "Program complexity",
        c: "Space complexity",
        d: "Algorithm complexity",
        crt: "d",
        view: "Option D"
    },
    {
        id: "22",
        q: "Q22. It is very essential to check the correctness of the algorithm in the ____________ Criterion.",
        a: "Finiteness",
        b: "Input",
        c: "Output",
        d: "Efficiency",
        crt: "c",
        view: "Option C"
    },
    {
        id: "23",
        q: "Q23. The following are example of BASIC that compile the source code EXCEPT?",
        a: "BASIC 4GL",
        b: "KBASIC",
        c: "GWBASIC",
        d: "Turbo Basic",
        crt: "c",
        view: "Option C"
    },
    {
        id: "24",
        q: "Q24. The BASIC statements to execute such repetitions are the FOR and _________ statements.",
        a: "NEXT",
        b: "CONTINUE",
        c: "WAIT",
        d: "STEP",
        crt: "a",
        view: "Option A"
    },
    {
        id: "25",
        q: "Q25. In using a ___________ language, you have to specify how to solve a problem by indicating the procedures the computer will follow step by step.",
        a: "procedure-oriented",
        b: "object-oriented",
        c: "problem-oriented",
        d: "All",
        crt: "a",
        view: "Option A"
    },
    {
        id: "26",
        q: "Q26. The short form of binary digit is __________",
        a: "os",
        b: "byte",
        c: "0s and 1s",
        d: "bit",
        crt: "d",
        view: "Option D"
    },
    {
        id: "27",
        q: "27. The first computer to use Neumann\'s stored program concept was",
        a: "ENIAC",
        b: "ABC",
        c: "EDVAC",
        d: "None",
        crt: "a",
        view: "Option A"
    },
    {
        id: "28",
        q: "Q28. Which option is NOT a valid reserved word in Fortran?",
        a: "STOP",
        b: "PAUSE",
        c: "RETURN",
        d: "UPDATE",
        crt: "d",
        view: "Option D"
    },
    {
        id: "29",
        q: "Q29. The ____ language is lower in level than a language like Pascal but higher than",
        a: "assembly language",
        b: "FORTRAN",
        c: "BASIC",
        d: "None of the above",
        crt: "d",
        view: "Option D"
    },
    {
        id: "30",
        q: "Q30. The _____ specifier simply directs the computer to create the file during the program execution",
        a: "OPEN",
        b: "CLOSE",
        c: "CREATE",
        d: "STATUS",
        crt: "d",
        view: "Option D"
    },
    {
        id: "31",
        q: "Q31. The _____ simply keeps track of the next data element to be read.",
        a: "write",
        b: "data",
        c: "pointer",
        d: "read",
        crt: "c",
        view: "Option C"
    },
    {
        id: "32",
        q: "Q32. A Pascal Pseudocode is simply made up of the following blocks EXCEPT?",
        a: "End of algorithm",
        b: "File name",
        c: "Algorithm Name",
        d: "Declarations",
        crt: "b",
        view: "Option B"
    },
    {
        id: "33",
        q: "Q33. The following are the common ways of representing algorithms except",
        a: "Data Flow Diagrams",
        b: "Formulae",
        c: "Flowcharts",
        d: "Pseudocode",
        crt: "a",
        view: "Option A"
    },
    {
        id: "34",
        q: "Q34. _________ involves testing the program as separate modules are put together.",
        a: "System testing",
        b: "Unit testing",
        c: "Integration testing",
        d: "Software testing",
        crt: "c",
        view: "Option C"
    },
    {
        id: "35",
        q: "Q35. The following variables in C++ has the fixed sizes of 2 in memory EXCEPT?",
        a: "short",
        b: "char",
        c: "enum",
        d: "jut",
        crt: "b",
        view: "Option B"
    },
    {
        id: "36",
        q: "Q36. The syntax for Manipulation of strings are follows except",
        a: "LEN",
        b: "OCT$",
        c: "MID$",
        d: "LOC",
        crt: "d",
        view: "Option D"
    },
    {
        id: "37",
        q: "Q37. Some available compilers for Fortran 77 language are as follows except",
        a: "FortranPro",
        b: "Microsoft Fortran 77",
        c: "Fortransoft",
        d: "Fortran Environment",
        crt: "a",
        view: "Option A"
    },
    {
        id: "38",
        q: "Q38. TAGS are instructions that direct the Web Browser to do the following EXCEPT?",
        a: "What graphics to display and where",
        b: "What distant pages to link",
        c: "How to lay out text",
        d: "None of the options",
        crt: "d",
        view: "Option D"
    },
    {
        id: "39",
        q: "Q39. _______ statement is very important in Fortran because it enables Fortran programs to be written in a way more harmonious with structured programming.",
        a: "IF _ THEN _ ELSE",
        b: "GOTO",
        c: "FOR _ NEXT",
        d: "DO _ UNTIL",
        crt: "a",
        view: "Option A"
    },
    {
        id: "40",
        q: "Q40. In Fortran, the terminator of a loop initiated by a DO statement is given by the ___ statement.",
        a: "WHILE",
        b: "CONTINUE",
        c: "REPEAT",
        d: "UNTIL",
        crt: "b",
        view: "Option B"
    },
    {
        id: "41",
        q: "Q41. The keyword ____ is used in Fortran as a Program Header statement, usually to give a name to your program code.",
        a: "PROGRAM",
        b: "COMMENT",
        c: "START",
        d: "None of the options",
        crt: "a",
        view: "Option A"
    },
    {
        id: "42",
        q: "Q42. The following options are all features of MATLAB language EXCEPT?",
        a: "Data structures",
        b: "Control flow statements",
        c: "Functions",
        d: "None of the options",
        crt: "d",
        view: "Option D"
    },
    {
        id: "43",
        q: "Q43. A /An ______ constant is a positive, negative or zero whole number without a decimal point or commas.",
        a: "Real",
        b: "Integer",
        c: "Complex",
        d: "Double",
        crt: "b",
        view: "Option B"
    },
    {
        id: "44",
        q: "Q44. _______ is just the name given to the programming statements you write and associate with the controls on your form.",
        a: "Code",
        b: "Project",
        c: "Events",
        d: "Objects",
        crt: "a",
        view: "Option A"
    },
    {
        id: "45",
        q: "Q45. A driver program simply directs the computer to ____ the appropriate module",
        a: "EXIT",
        b: "ELOPED",
        c: "END",
        d: "ENTER",
        crt: "d",
        view: "Option D"
    },
    {
        id: "46",
        q: "Q46. The roots of a polynomial function are obtained by using the built-in MATLAB function known as",
        a: "Roots",
        b: "Polynomial",
        c: "Solve",
        d: "Square",
        crt: "a",
        view: "Option A"
    },
    {
        id: "47",
        q: "Q47. _____ has a way of coding its own programming expressions to obtain the required symbols you want to use to carry out one process or the other.",
        a: "Mathematica",
        b: "Matlab",
        c: "MathCad",
        d: "Fortran",
        crt: "c",
        view: "Option C"
    },
    {
        id: "48",
        q: "Q48. Some languages are interpreted by converting the_______ into machine language as the program is being executed.",
        a: "application program",
        b: "object software",
        c: "source program",
        d: "object program",
        crt: "c",
        view: "Option C"
    },
    {
        id: "49",
        q: "Q49. __________is simply the difficulty of solving computational problems, measured in terms of some resources employed during the computational process.",
        a: "Space complexity",
        b: "Algorithm complexity",
        c: "Time complexity",
        d: "Space complexity",
        crt: "b",
        view: "Option B"
    },
    {
        id: "50",
        q: "Q50. The following options are common specifiers in Fortran EXCEPT?",
        a: "ERR =",
        b: "STATUS =",
        c: "FILE =",
        d: "RECAL =",
        crt: "d",
        view: "Option D"
    },
    {
        id: "51",
        q: "Q51. The ______________ method helps the programmer to backtracks to the first unwritten module that is directly connected to the path being developed, until all modules are developed.",
        a: "Modular programming ",
        b: "Structured programming ",
        c: "Path programming ",
        d: "All of the options",
        crt: "c",
        view: "Option C"
    },
    {
        id: "52",
        q: "Q52.___________ is not a bitwise operator in C++.  ",
        a: "$",
        b: "&",
        c: "^",
        d: "|",
        crt: "a",
        view: "Option A"
    },
    {
        id: "53",
        q: "Q53. Which of the following options is not a valid reserved word in Fortran? ",
        a: "PAUSE",
        b: "UPDATE",
        c: "STOP",
        d: "RETURN",
        crt: "b",
        view: "Option B"
    },
    {
        id: "54",
        q: "Q54. _____________ is a collection of files you create that makes up your windows application created by Visual Basic.",
        a: "Code",
        b: "Objects",
        c: "Events",
        d: "Project",
        crt: "d",
        view: "Option D"
    },
    {
        id: "55",
        q: "Q55. In HTML, what are the tags that mark the beginning and the end of the link text called? ",
        a: "Anchor tags",
        b: "Hypertext link",
        c: "Logical tags",
        d: "Centre Tags",
        crt: "a",
        view: "Option A"
    },
    {
        id: "56",
        q: "Q56. Which option is a valid variable name in Fortran?",
        a: "AF@5",
        b: "GK.5",
        c: "4BD",
        d: "GUY",
        crt: "d",
        view: "Option D"
    },
    {
        id: "57",
        q: "Q57. ______ is not a list of some header files available in a specified directory created for them when you install your C++ compiler",
        a: "errno.h",
        b: "dos.h",
        c: "alloc.h",
        d: "canio.h",
        crt: "d",
        view: "Option D"
    },
    {
        id: "58",
        q: "Q58. MathCad is a very powerful tool capable of doing the following",
        a: "Plotting Graphics",
        b: "Solving Equations",
        c: "Statistical Analysis",
        d: "All of the options",
        crt: "d",
        view: "Option D"
    },
    {
        id: "59",
        q: "59. State an operator that exists in BASIC and Fortran but is missing in the groups of operators",
        a: "NOT operator",
        b: "Complex operator",
        c: "Exponential operator",
        d: "None of the above",
        crt: "c",
        view: "Option C"
    },
    {
        id: "60",
        q: "Q60. A _________ translates an entire program into machine language before the execution of the program.",
        a: "program",
        b: "compiler",
        c: "interpreter",
        d: "All",
        crt: "b",
        view: "Option B"
    },
    {
        id: "61",
        q: "Q61. The Interpreter is a ________environment where you can type your BASIC code and run the program immediately.",
        a: "Window-driven",
        b: "Menu-driven",
        c: "File-driven",
        d: "DOS-driven",
        crt: "b",
        view: "Option B"
    },
    {
        id: "62",
        q: "Q62. The ______ is merely data to the computer and the program can modify itself during",
        a: "Machine Language",
        b: "Assembly Language",
        c: "High Languages",
        d: "All Languages",
        crt: "a",
        view: "Option A"
    },
    {
        id: "63",
        q: "Q63. Double Precision in BASIC is represented by the _____ symbol.",
        a: "#",
        b: "@",
        c: "$",
        d: "&amp",
        crt: "a  ",
        view: "Option A"
    },
    {
        id: "64",
        q: "Q64. ___________ are the forms and controls you use to enable your program users to enter data and view information.",
        a: "Code",
        b: "Objects",
        c: "Events",
        d: "Project",
        crt: "b",
        view: "Option B"
    },
    {
        id: "65",
        q: "Q65. The transpose of a matrix is defined by the __________",
        a: "Single precision",
        b: "Double precision",
        c: "Single quote",
        d: "Double quote",
        crt: "c",
        view: "Option C"
    },
    {
        id: "66",
        q: "Q66. Which of the options is the keyword used to create a new address for the pointer X?",
        a: "READ(X)",
        b: "NEW(X)",
        c: "BEGIN(X)",
        d: "START(X)",
        crt: "b",
        view: "Option B"
    },
    {
        id: "67",
        q: "Q67. In Fortran, the terminator of a loop initiated by a DO statement is given by the _______ statement.",
        a: "UNTIL",
        b: "REPEAT",
        c: "CONTINUE",
        d: "WHILE",
        crt: "c",
        view: "Option C"
    },
    {
        id: "68",
        q: "Q68. The DBSTATUS command in MATLAB is meant for ____________",
        a: "List break point",
        b: "Change local workspace context",
        c: "Execute one or more lines",
        d: "Continue execution",
        crt: "a",
        view: "Option A"
    },
    {
        id: "69",
        q: "Q69. The ______________ symbol indicates that the following data items will define the constants to be used by your program",
        a: "CONSTS",
        b: "CONS",
        c: "CONST",
        d: "All of the options",
        crt: "c",
        view: "Option C"
    },
    {
        id: "70",
        q: "Q70. The colours in HTML are usually set by using what look like 6-digit hexadecimal numbers. What does 80 stands for?",
        a: "Full beam color",
        b: "Off",
        c: "Dipped color",
        d: "None of the options",
        crt: "c",
        view: "Option C"
    },
    {
        id: "71",
        q: "Q71. In a Pascal, the END statement is followed by a _____as an essential part of the program code",
        a: "full stop ",
        b: "semicolon",
        c: "colon",
        d: "double colon",
        crt: "a",
        view: "Option A"
    },
    {
        id: "72",
        q: "Q72. _____________ statements are usually given at the beginning of your program before the first references to the names defined in the declaration statements.",
        a: "READ",
        b: "WRITE",
        c: "START",
        d: "DECLARATION",
        crt: "d",
        view: "Option D"
    },
    {
        id: "73",
        q: "Q73. The reserved words used in Pascal are as follows except",
        a: "CASE",
        b: "DISPOSE",
        c: "COMMENT",
        d: "DIV",
        crt: "c",
        view: "Option C"
    },
    {
        id: "74",
        q: "Q74. The ______________ statement is used primarily to connect a file or the printer to your program.",
        a: "OPEN",
        b: "STATUS",
        c: "CLOSE",
        d: "CREATE",
        crt: "a",
        view: "Option A"
    },
    {
        id: "75",
        q: "Q75. In BASIC, __________ used for comment line in place of REM.",
        a: "colon",
        b: "common",
        c: "single quote",
        d: "semicolon",
        crt: "c",
        view: "Option C"
    },
    {
        id: "76",
        q: "Q76. The__________ operation can be expressed by using the SQR function.",
        a: "division",
        b: "exponentiation",
        c: "product",
        d: "arithmetic",
        crt: "b",
        view: "Option B"
    },
    {
        id: "77",
        q: "Q77. The_______ function also can be expressed by using the SIN and COS functions.",
        a: "tangent",
        b: "division",
        c: "arithmetic",
        d: "exponential",
        crt: "a",
        view: "Option A"
    },
    {
        id: "78",
        q: "Q78. The exponentiation operation can be done using _______ and______ functions.",
        a: "LN, EP",
        b: "EXP, LN",
        c: "EXP, SIN",
        d: "SIN, LN",
        crt: "b",
        view: "Option B"
    },
    {
        id: "79",
        q: "Q79. Another name for path programming is which of the following?",
        a: "Line Programming",
        b: "Backtracking Programming",
        c: "FrontEnd Programming",
        d: "BackEnd Programming",
        crt: "b",
        view: "Option B"
    },
    {
        id: "80",
        q: "Q80. " && " is a _______ operator in C++ programming",
        a: "Physical",
        b: "Boolean",
        c: "Logical",
        d: "Composite",
        crt: "c",
        view: "Option C"
    },
    {
        id: "81",
        q: "Q81. ______________ are larger pictures having a number of hyperlinks embedded within them.",
        a: "Graphics",
        b: "LASCI",
        c: "Tablets",
        d: "Java Apples",
        crt: "d",
        view: "Option D"
    },
    {
        id: "82",
        q: "Q82. __________ are used to divide your website into a set of separate areas, each of which can display a different file and be changed independently",
        a: "Iframes",
        b: "Hyperlinks",
        c: "Hypertexts",
        d: "Anchor",
        crt: "a",
        view: "Option A"
    },
    {
        id: "83",
        q: "Q83. In C++ programming the fixed size of double is _______",
        a: "7",
        b: "8",
        c: "9",
        d: "0",
        crt: "a",
        view: "Option A"
    },
    {
        id: "84",
        q: "Q84. Character variable refers to memory locations containing__________",
        a: "variables",
        b: "strings",
        c: "consts",
        d: "loops",
        crt: "b",
        view: "Option B"
    },
    {
        id: "85",
        q: "Q85. ________ software is used to remove Virus from the System.",
        a: "Anti-virus",
        b: "Windows Protector",
        c: "Windows Defender",
        d: "Windows Lock",
        crt: "a",
        view: "Option A"
    },
    {
        id: "86",
        q: "Q86. Each statement of a Python program is translated to machine code as it is executed. Thus Python ________",
        a: "compile",
        b: "combine",
        c: "interprete",
        d: "process",
        crt: "c",
        view: "Option C"
    },
    {
        id: "87",
        q: "Q87. Actions such as double clicking an icon in a VB programare referred to as which of the following?",
        a: "Events",
        b: "Actions",
        c: "Commands",
        d: "Statements",
        crt: "a",
        view: "Option A"
    },
    {
        id: "88",
        q: "Q88. Which of the following statements terminates a Pascal program?",
        a: "END",
        b: "ENDS",
        c: "STOP",
        d: "STOPS",
        crt: "a",
        view: "Option A"
    },
    {
        id: "89",
        q: "Q89. In programming __________ statements are used tospecify the variable types.",
        a: "constant",
        b: "variables",
        c: "commands",
        d: "statements",
        crt: "b",
        view: "Option B"
    },
    {
        id: "90",
        q: "Q90. A C program is translated completely in machine codebefore it is executed. Thus C is __________ instead of interpreted",
        a: "compiled",
        b: "combined",
        c: "covered",
        d: "separate",
        crt: "a",
        view: "Option A"
    },
    {
        id: "91",
        q: "Q91. _______ words generally describe the operations to be performed by the computer",
        a: "Exponential",
        b: "Execution",
        c: "Expression",
        d: "Command",
        crt: "b",
        view: "Option B"
    },
    {
        id: "92",
        q: "Q92. A computer is not a useful device as an entity without a force driving its operations.",
        a: "programming",
        b: "programmable",
        c: "programmed",
        d: "program",
        crt: "a",
        view: "Option A"
    },
    {
        id: "93",
        q: "Q93. A__________ is simply a device manipulated by a person",
        a: "Android",
        b: "operation",
        c: "system",
        d: "computer",
        crt: "d",
        view: "Option D"
    },
    {
        id: "94",
        q: "Q94. A ___________ is a set of instructions.",
        a: "device",
        b: "computer",
        c: "program",
        d: "technology",
        crt: "c",
        view: "Option C"
    },
    {
        id: "95",
        q: "Q95. The programs that make up the Operating System are Control Programs and_______",
        a: "Oriented Programs",
        b: "Processing Programs",
        c: "Progressing Programs",
        d: "Procedural Programs",
        crt: "b",
        view: "Option B"
    },
    {
        id: "96",
        q: "Q96. A readable program is easier to___________",
        a: "maintain",
        b: "print",
        c: "process",
        d: "clarify",
        crt: "a",
        view: "Option A"
    },
    {
        id: "97",
        q: "Q97. A program that doesn't carry out the expected tasks quickly and efficiently_______ has lost the aim.",
        a: "progress",
        b: "processing",
        c: "performance",
        d: "automation",
        crt: "c",
        view: "Option C"
    },
    {
        id: "98",
        q: "Q98. The__________ is expected to analyse the problem thoroughly in order to understand what is required of its solution",
        a: "programmer",
        b: "operator",
        c: "attendant",
        d: "computer",
        crt: "a",
        view: "Option A"
    },
    {
        id: "99.",
        q: "Q99. There are_______ major aspects to develop a program logical flow",
        a: "two",
        b: "three",
        c: "five",
        d: "seven",
        crt: "a",
        view: "Option A"
    },
    {
        id: "100",
        q: "Q100. There are major aspects to develop a program logical flow EXCEPT",
        a: "Debugging",
        b: "Compiling",
        c: "Testing",
        d: "Interpreting",
        crt: "d",
        view: "Option D"
    }
];


const quest = document.getElementById('quest');
const a_text = document.querySelector('.a')
const b_text = document.querySelector('.b')
const c_text = document.querySelector('.c')
const d_text = document.querySelector('.d')
const btn = document.querySelector('.btn')
const range = document.querySelector(".questionbox span");
const showans = document.getElementById('showans');
const answerShow = document.querySelector('.answerbox h4');
const ansBtn = document.querySelector('.showans');
let answerEls = document.querySelectorAll(".answer")
let counter = 0;

let func = () => {
    uncheckedOpt();
    let item = queLoader[counter];
    quest.textContent = item.q;
    a_text.textContent = item.a;
    b_text.textContent = item.b;
    c_text.textContent = item.c;
    d_text.textContent = item.d;
    range.textContent = `Range: ${item.id}/${queLoader.length}`;
    answerShow.textContent = item.view;
}
/* local storage*/
function uncheckedOpt() {
    answerEls.forEach(function (answerEl) {
        answerEl.checked = false;

    })

}
function answerSelected() {
    let answer = undefined;
    answerEls.forEach(function (answerEl) {
        if (answerEl.checked) {
            answer = answerEl.id;
        }

    }); return answer;

}


func();


ansBtn.addEventListener('click', function () {

    answerShow.style.display = 'block';



})

let score = 0;
const popWarning = document.querySelector('.popWarning')
const clearbox = document.querySelector('.clearbox');
const result = document.querySelector('.result')
clearbox.addEventListener("click", function () {
    popWarning.style.transform = 'translate(-100%)';
})


btn.addEventListener("click", function () {
    let answer = answerSelected();
    answerShow.style.display = 'none';
    ansBtn.innerHTML = "Show Answer";
    if (answer) {
        if (answer === queLoader[counter].crt) {
            score++;

        }

        counter++;
        let msg;
        if (score < 50 || score == 49) {
            msg = "You fail the Quizz";
        } else if (score >= 50 || score == 69) {
            msg = "Good Performance";
        } else if (score >= 70 || score == 100) {
            msg = "Excellent Performance";
        }

        if (counter < queLoader.length) {

            func();

        } else {
            result.innerHTML = `<div class="container">
       <div class="resultbox"> 
       <h1> Your score is : ${score}/${queLoader.length} </h1>
       <h2> ${msg}</h2>
       <li> <a href="cit211.html">retake test </a></li>
       <li> <a href="courseware.html"> go to menu </a></li>

       </div> </div>`;
        }

    } else {
        popWarning.style.transform = 'translate(0%)';
    }

})