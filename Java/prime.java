import java.util.*;
public class prime {
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);

        int n;
        System.out.print("Enter the number : ");
        n = sc.nextInt();
        int count = 0;
        for(int i = 2; i <= (int)n/2; i++)
        {
            if(n%i == 0)
            {
                count++;
            }
        }

        if(count != 0)
        {
            System.out.println(n+" is not a prime number");
        }

        else
        {
            System.out.println(n+" is a prime number");
        }
    }
}