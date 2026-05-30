public class lastword 
{
    public static void main(String args[])
    {
        String s = "hello World ";
        int  l = s.length();
        System.out.println(s.substring(l - 1).equals(" "));
    }
}
