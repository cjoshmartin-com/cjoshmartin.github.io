---
layout: Blog-post
title: How I learned Java!
meta: The process in which I when on to learn java in my senior year of high school
category: work
---


In my senior year of high school I took what my high school called "Ap Computer Science", this class is equivalent to a first semester of programming at a University. We learned Object-oriented programming in the language of Java. In the previous year (Junior year), I took two semesters of the intro programming classes (Programming I and Programming II). In those intro programming classes I learned the basics concepts such as, IF statements, While loops, Arrays,and basic functions in the  languages of C++ and Visual basic we also build apps using MIT App inventor 2.

In my Senior year, The Ap class went more in depth and I gained a better Knowledge on how to be a great programmer. Some of the  Important concepts from the class are found below, as well as the code.

In all these class was a pain in my butt, but I am glad I took it. It has really help me, I can pick up on any language now and start programming. It was a really helpful class for my life as well it has made looking for jobs a lot easier.


##GUI's

{% highlight Java %}

         //A+ Computer Science  -  www.apluscompsci.com
        //Name - Josh Martin
        //Date - 9/24/2014
        //Class - period 1
        //Lab  - Graphics and GUIs Test

        import java.awt.Graphics;
        import java.awt.Color;
        import java.awt.Canvas;

        class Robot extends Canvas
        {
           public Robot()    //constructor method - sets up the class
           {
              setSize(800,600);
              setBackground(Color.WHITE);   	
              setVisible(true);
           }

           public void paint( Graphics window )
           {
              window.setColor(Color.BLUE);

              window.drawString("Robot LAB ", 35, 35 );

              //call head method
              head(window);
              upperBody(window);
              lowerBody(window);

              //call other methods

           }

           public void head( Graphics window )
           {
              window.setColor(Color.YELLOW);
              window.fillOval(300, 100, 200, 100);
              // fix this
              window.setColor(Color.BLACK);
              window.fillOval(300, 200, 25, 25);

              window.setColor(Color.GREEN);
              window.fillOval(320, 120, 25, 25);
              window.fillOval(430, 120, 25, 25);

              window.setColor(Color.RED);
              window.fillArc(300,200,200,100,0,180);

        		//add more code here

           }

           public void upperBody( Graphics window )
           {
        	   window.setColor(Color.BLUE);

        	   window.fillRect(300,200,200,100);
        	   window.setColor(Color.BLACK);
        	   window.drawLine(300,200,200,100);
        	   window.drawLine(500,200,600,100);

           }

           public void lowerBody( Graphics window )
           {
        	   window.setColor(Color.GRAY);
        	   window.fillRect(300,350,200,100);

        	   window.setColor(Color.BLACK);
        	   window.drawLine(300,450,200,500);
        	   window.drawLine(500,450,700,500);

           }
        }
{% endhighlight %}

##importing  packages and use the Math class and Scanner.

{% highlight Java %}


    // Project 8-3
    import java.util.Scanner;
    import java.lang.Math;
    public class Project83 {
   	 public static void main(String args[])
   	 {
   	double aT=0,r,p,n,t,rate= 0.0;
   	n = 4.0;
   	Scanner reader = new Scanner(System.in);

   	System.out.print("enter the Principal:: ");
   	p = reader.nextDouble();

   	System.out.print("enter the rate:: ");
   	r = reader.nextDouble()* Math.pow(10,-2) ;


   	System.out.print("enter the how long:: ");
   	t = reader.nextDouble() ;





   		for (int f= 0;f <= t; f++ )
   		{

   			System.out.printf("Year:: %d | Orginal principal is:: %.2f | Interate earned:: %.1f",(2014+f),aT,(r*f*100));
   			System.out.print("%");
   			aT = p*Math.pow((1 + (r/n)),(n*f));
   			System.out.printf(" | Prinipal earned: $%.2f%n",aT);
   		}



   }// end of main

    }// end of Project 8-3

{% endhighlight %}

##Functions

{% highlight Java %}
      import java.util.Scanner;

      //project 6-3
      public class Fraction {

      	private int num,denom;
      	public Fraction()
      	{
      		num= 0;
      		denom = 1;
      	}
      	public Fraction (int n, int d)
      	{
      		num= n;
      		denom = d;
      	}
      	public int getNum()
      	{
      		return num;
      	}

      	public int getDenom()
      	{
      		return denom;
      	}
      	// the real work
      	public Fraction add(Fraction other)
      	{
      		int newNum,newDenom;
      		if (denom == other.denom)
      		{
      			newNum= num + other.num;
      			newDenom= denom;
      		}
      		else
      		{
      			newNum = num*other.denom+ other.num * this.denom;
      			newDenom = this.denom * other.denom;
      		}

      		return new Fraction();
      	}

      	public Fraction subtract(Fraction other)
      	{
      		int newNum,newDenom;
      		if (denom == other.denom)
      		{
      			newNum= num - other.num;
      			newDenom= denom;
      		}
      		else
      		{
      			newNum = num*other.denom - other.num * this.denom;
      			newDenom = this.denom * other.denom;
      		}

      		return new Fraction();
      	}

      	public Fraction mulitply(Fraction other)
      	{
      		int newNum,newDenom;
      		if (denom == other.denom)
      		{
      			newNum= num * other.num;
      			newDenom= denom;
      		}
      		else
      		{
      			newNum = num*other.num;
      			newDenom = this.denom * other.denom;
      		}

      		return new Fraction();
      	}

      	public Fraction divide(Fraction other)
      	{
      		int newNum,newDenom;

      		newNum = num*other.denom;
      		newDenom = this.denom * other.num;


      		return new Fraction();
      	}

      	public String toString()
      	{
      		return num +"/" + denom;
      	}



      }// end of project class
{% endhighlight %}

##Recursion
{% highlight Java %}

    //© A+ Computer Science  -  www.apluscompsci.com
    //Name -Josh Martin
    //Date -
    //Class -
    //Lab  - Lab 3

    import static java.lang.System.*;

    public class RecursionFunTwo
    {
    	public static int countChickens(String word)
    	{
    		int index =word.indexOf("chicken");
    		if(index != -1)
    		{
    			if(index == 0)
    				word= word.substring(7);
    			else
    				word = word.substring(0,index )+ word.substring(index+7);		
    			return 1 + countChickens(word);
    		}
    		return 0;
    	}
    }
{% endhighlight %}

##Arrays

{% highlight Java %}

      // project 10-1

      import java.util.Scanner;
      import java.util.Arrays;

      public class project101 {

      	 public static void main(String args[])
      	 {
      		 int[] evenList  = new int[10];
      		 int [] oddList  = new int[10];
      		 int[] negativeList = new int[10];
      		 int num, even = 0,odd = 0,neg = 0;
      		 String evenstr = null , oddstr = null, negivtive = null;
      		 Scanner reader = new Scanner(System.in);

      		 for (int i =0; i < 10; i++)
      		 {
      			 System.out.println(" enter in a number(#" + (i+1) + ") :: " );
      			 num = reader.nextInt();

      			 if (num % 2 ==0)
      			 {
      				 evenList[even] = num;
      			 	even++;
      			 }
      			 else if (num % 2 ==1)
      			 {
      				 oddList[odd] = num;
      				 odd++;
      			 }
      			 else if ( num <0)
      			 {
      				 negativeList[neg] = num;
      				neg++;
      			 }

      		 }// end of for loop


      		 for (int y= 0; y < evenList.length;y++)
      		 {
      			 if (evenList[y] > 0)
      				 evenstr = evenList[y] +" ";
      			 if (oddList[y] > 0)
      				 oddstr = oddList[y] +" ";
      			 if (negativeList[y] > 0)
      				 negivtive = negativeList[y] +" ";

      		 }// end of loop number 2

      		 System.out.print(" Even numbers are:: " + evenstr + " \n Odd numbers are:: " + oddstr + "\n The negitves are:: " + negivtive);

      	 }// end of main
      }// end of project 10-1 class

{% endhighlight %}

###Arraylist
{% highlight Java %}

    //Project 14-1
    import java.io.File;
    import java.io.FileNotFoundException;
    import java.io.PrintWriter;
    import java.util.*;

    import javax.swing.JOptionPane;
    public class project141 {

    	public static void main(String[] args) throws FileNotFoundException {
    			String inputstr = JOptionPane.showInputDialog("enter file name(include file type like .txt)","number.txt");


    		Scanner file = new Scanner(new File(inputstr));

    		List<String> lst = new ArrayList<String>();

    		while (file.hasNext())
    		{
    			lst.add((file.next()).toUpperCase());
    		}



    		String outputstr = JOptionPane.showInputDialog("enter file name for output (include file type like .txt)","number.txt");
    		 PrintWriter writer = new PrintWriter(new File(outputstr));
    		for (int i = 0; i < lst.size(); i++)
    			writer.println(lst.get(i));



    	}// end of main

    }// end of project 14-1
{%endhighlight%}

### Matrix

{% highlight Java %}

      	int [][] table;
      	int row =0;
      	int col = 0;
      	table = new int[10][10];
      	for (int i=0; i < table.length; i++)
      		for ( int j = 0; j< table[i].length; j++)
      			if (table[i][j] <0)
      			{
      				row = i;
      				col = j;
      			System.out.println("Negitve Number is at list[" + row +"]["+col+"]");
      				}
      	if (row <= 0 && col <= 0){
      	row= col =table.length;
      					             System.out.println( "No Negitive!");
      }
{% endhighlight %}
##Sorts and final project

    {% highlight Java %}
    //© A+ Computer Science  -  www.apluscompsci.com
    //Name -Josh Martin		
    //Date -
    //Class -
    //Lab  - Lab 2

    import java.util.Arrays;
    import java.util.Scanner;
    import static java.lang.System.*;
    import static java.util.Arrays.*;
    import java.util.ArrayList;

    //define the Grade class
    public class Grade{



    	//add in a instance variable of type double named grade
    	double grade;


    	//constructors - default and initialization
    	public Grade()
    	{
    		grade = 0.0;

    	}

    	public Grade(double a)
    	{
    		grade = a;
    	}

    	//method setGrade sets the grade
    	public void setGrade(double a)
    	{
    		grade = a;
    	}


    	//method getNum returns the grade
    	public double getNum()
    	{
    		return grade;
    	}


    	//method getLetterGrade returns a String A, B, C, D, or F
    	public String getLetterGrade()
    	{

    		if (grade >=89.5)
    			return "A";
    		if (grade >= 79.5)
    			return "B";
    		if (grade >= 69.5)
    			return "C";
    		if (grade >= 59.5)
    			return "D";

    		return "F";
    	}


    	//method toString returns grade and the letter grade
    	public String toString()
    	{
    		return grade + " - " + getLetterGrade();
    	}

    }
{% endhighlight %}
{% highlight Java %}

    //© A+ Computer Science  -  www.apluscompsci.com
    //Name -Josh Martin
    //Date -
    //Class -
    //Lab  - Lab 2

    import java.util.Arrays;
    import java.util.Scanner;

    import static java.lang.System.*;
    import static java.util.Arrays.*;

    import java.util.ArrayList;

    public class Grades
    {
    	private ArrayList<Grade> grades;

    	public Grades()
    	{
    		grades= new ArrayList<Grade>();
    	}

    	public Grades(String gradeList)
    	{
    		// finds - and adds one soo it can find the second space
    		int oldSpace = gradeList.indexOf("-") + 1;
    		String[] temp = gradeList.substring(oldSpace+ 1).split(" ");
    		// gets how many items are in the array list
    		int len = gradeList.charAt(0);
    		grades= new ArrayList<Grade>(len);

    		for (int i =0; i < temp.length; i++)
    		{
    		  double temp2 =Double.parseDouble(temp[i]);
    		grades.add(new Grade(temp2));


    		}

    	}
    	// do I put the same thing as above?
    	public void setGrades(String gradeList)
    	{	String[] temp =gradeList.split(" ");
    		for (int i = 0; i < grades.size();i++)
    			grades.set(i,new Grade(Double.parseDouble(temp[i])));

    	}

    	public void setGrade(int spot, double grade)
    	{
    		grades.get(spot).setGrade(grade);
    	}

    	public double getSum()
    	{ double sum =0;
    		for (int i= 0; i<grades.size();i++)
    			sum+=grades.get(i).getNum();


    		return sum;
    	}

    	public double getLowGrade()
    	{

    		double lowest=0;
    		//selection sort to find the lowest number in the list
    		for ( int i = 0; i< grades.size()-1;i++)
    		{
    			int min =i;
    			for(int j=i+1; j < grades.size(); j++)
    			{
    				if(grades.get(j).getNum() < grades.get(min).getNum())
    					min=j;

    			}// end of outer

    			if (min!= i)
    				lowest = grades.get(min).getNum();

    		}//end of outer loop

    		return lowest;
    	}

    	public double getHighGrade()
    	{
    		double lowest=0;
    		//selection sort to find the Highest number in the list
    		for ( int i = 0; i< grades.size()-1;i++)
    		{
    			int min =i;
    			for(int j=i+1; j < grades.size(); j++)
    			{
    				if(grades.get(j).getNum() > grades.get(min).getNum())
    					min=j;

    			}// end of outer

    			if (min!= i)
    				lowest = grades.get(min).getNum();

    		}//end of outer loop

    		return lowest;
    	}
    	public void removeValue()
    	{ int find =0;
    		for(int i =0; i< grades.size();i++)
    			if (grades.get(i).getNum()== getLowGrade())
    				find= i;
    		grades.remove(find);
    	}

    	public int getNumGrades()
    	{
    		return grades.size();
    	}

    	public String toString()
    	{
    		String output="";


    		for (int i =0; i<grades.size(); i++)
    			output += grades.get(i).toString() + " ";
    		return output;
    	}
    }// end of class
{% endhighlight %}
{% highlight Java %}
    /© A+ Computer Science  -  www.apluscompsci.com
    //Name - Josh martin
    //Date -
    //Class -
    //Lab  - Lab 2

    import java.util.Scanner;
    import static java.lang.System.*;
    import java.lang.Comparable;

    public class Student implements Comparable<Student>
    {
    	private String myName;
    	private Grades myGrades;

    	//add in constructors
    	public Student()
    	{
    		myName ="";
    	}
    	public Student(String a, String b){
    		myName =a;
    		myGrades = new Grades(b);
    	}


    	//add in set methods



    	//add in get methods as shown in StudentTester
    	public String getName()
    	{
    		return myName;
    	}
    	public Grades getGrades()
    	{
    		return myGrades;
    	}


    	public  double getSum(){
    		return myGrades.getSum();
    	}
    	public double getAverage(){

    		return getSum()/myGrades.getNumGrades();
    	}

    	public double getAverageAfterDroppingLow(){
    		myGrades.removeValue();

    		return getSum()/myGrades.getNumGrades();
    	}

    	public double getLowGrade(){

    		return myGrades.getLowGrade();
    	}
    	public double getHighGrade(){

    		return myGrades.getHighGrade();
    	}

    	public int compareTo(Student other)
    	{
    	//method compareTo will compare this Student to the other student

    	if (getAverage()> other.getAverage())
    		return 10;


    	//method equals will compare this Student to the other student
    	if (getAverage()== other.getAverage())
    		return 0;


    	return -10;
    	}


    	//add in the toString
    	public String toString()
    	{
    		return myName + " = " + myGrades;
    	}
    }// end of class
{% endhighlight %}
{% highlight Java %}
    //© A+ Computer Science  -  www.apluscompsci.com
    //Name - Josh Martin
    //Date - 03/30
    //Class -
    //Lab  - Lab 1

    import java.io.File;
    import java.io.IOException;
    import java.util.ArrayList;
    import java.util.Scanner;
    import java.util.Collections;

    import static java.lang.System.*;

    public class Word implements Comparable<Word>
    {
    	private String word;

    	//constructors

    	public Word()
    	{
    		word = "";
    	}
    	public Word(String a)
    	{
    		word =a;
    	}



    	//compareTo

    	public int compareTo(Word other)
    	{
    		int dif = word.length() - other.word.length();
    		if (dif == 0)
    			return word.compareToIgnoreCase(other.word);

    		return dif;
    	}


    	//toString

    	public String toString()
    	{
    		return word;

    	}




    }
{% endhighlight %}
{% highlight Java %}
    // data from gradebook.bat
    AP Computer Science A
    8
    Hardly Surviving
    3 - 70.2 65.3 45.1
    Sammy Morgan
    4 - 100 100 100 100
    Ben Jamin
    3 - 95.1 99.2 86.4
    Sally Brainbaum
    5 - 100.0 100 100.0 100 99
    Shude Studymore
    4 - 76.0 81.6 79.2 88.8
    Bart Simpson
    6 - 95.1 99.2 86.4 100 100 100
    Chicken Little
    5 - 100.0 100 100.0 100 45
    Marky Mark
    2 - 1 95
{% endhighlight %}
