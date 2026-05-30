import java.util.*;
public class clacl 
{
    public static void main(String devansh[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();

        System.out.println("Enter the operation : ");
        char ch = sc.next().charAt(0);

        if(ch == '+')
        {
            System.out.println(a+b);
        }

        else if(ch == '-')
        {
            System.out.println(a-b);
        }

        else if(ch == '*')
        {
            System.out.println(a*b);
        }

        else if(ch == '/')
        {
            System.out.println(a/(double)b);
        }

        else
        {
            System.out.println("Wrong choice enetered");
        }
    }
}
